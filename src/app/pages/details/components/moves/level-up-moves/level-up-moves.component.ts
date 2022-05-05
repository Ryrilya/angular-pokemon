import { State } from 'src/app/pages/details/store/details.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, forkJoin } from 'rxjs';
import { EnumMoveLearnMethods } from 'src/app/models/enums/EnumMoveLearnMethods';
import { Move } from 'src/app/models/Move';
import {
  PokemonDetails,
  PokemonDetailsMove,
} from 'src/app/models/PokemonDetails';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Header } from 'src/app/shared/components/table/table.component';
import { commonHeaders, ParsedMove, TableMoves } from '../moves.component';
import * as DetailsSelectors from 'src/app/pages/details/store/details.selectors';
import { faTurnUp } from '@fortawesome/free-solid-svg-icons';

const levelMovesHeaders: Header[] = [{ text: 'Livello' }, ...commonHeaders];

@Component({
  selector: 'level-up-moves',
  templateUrl: './level-up-moves.component.html',
  styleUrls: ['./level-up-moves.component.scss'],
})
export class LevelUpMovesComponent implements OnInit {
  pokemon$!: Observable<PokemonDetails>;
  movesByLevel!: TableMoves;
  faTurnUp = faTurnUp;

  constructor(
    private store: Store<State>,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.pokemon$ = this.store.select(DetailsSelectors.pokemonSelector);
  }

  ngAfterContentInit(): void {
    this.pokemon$.subscribe((pokemon) => {
      const movesLearnedByLevel = this.filterMovesByLevel(pokemon.moves);

      // For every move, fetch its details
      const movesApiCalls = movesLearnedByLevel.map((item) =>
        this.pokemonService.getResourceFromUrl<Move>(item.move.url)
      );

      // When all moves' details have been fetched...
      forkJoin(movesApiCalls).subscribe(
        (results) =>
          (this.movesByLevel = {
            headers: levelMovesHeaders,
            data: results
              .map((result, i) =>
                this.parseMove(movesLearnedByLevel[i], result)
              )
              .sort((a, b) => a['level'] - b['level']),
          })
      );
    });
  }

  /** Function that returns those moves whose move's learn-method is by level-up. */
  filterMovesByLevel(moves: PokemonDetailsMove[]): PokemonDetailsMove[] {
    return moves.filter((item) => {
      // Get the last pokemon game available version of the move
      const numOfVersions = item.version_group_details.length;
      // prettier-ignore
      const currentMoveLearnMethodName = item.version_group_details[numOfVersions - 1].move_learn_method.name;

      return currentMoveLearnMethodName === EnumMoveLearnMethods.LEVELUP;
    });
  }

  parseMove(pokemonMove: PokemonDetailsMove, move: Move): ParsedMove {
    // Get the last pokemon game available version of the move
    const numOfVersions = pokemonMove.version_group_details.length;
    // prettier-ignore
    const level = pokemonMove.version_group_details[numOfVersions - 1].level_learned_at;
    const itName = move.names.find((name) => name.language.name === 'it')?.name;

    return {
      level,
      name: itName ?? move.name,
      type: move.type.name,
      category: move.damage_class.name,
      power: move.power,
      accuracy: move.accuracy,
      pp: move.pp,
    };
  }
}
