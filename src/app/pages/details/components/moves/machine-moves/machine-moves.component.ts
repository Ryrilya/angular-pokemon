import { State } from 'src/app/pages/details/store/details.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, forkJoin, firstValueFrom } from 'rxjs';
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
import { Machine } from 'src/app/models/Machine';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';

const machineTableHeaders: Header[] = [
  {
    text: 'Macchina',
  },
  ...commonHeaders,
];

@Component({
  selector: 'machine-moves',
  templateUrl: './machine-moves.component.html',
  styleUrls: ['./machine-moves.component.scss'],
})
export class MachineMovesComponent implements OnInit {
  pokemon$!: Observable<PokemonDetails>;
  movesByMachine!: TableMoves;
  faCompactDisc = faCompactDisc;

  constructor(
    private store: Store<State>,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.pokemon$ = this.store.select(DetailsSelectors.pokemonSelector);
  }

  ngAfterContentInit(): void {
    this.pokemon$.subscribe((pokemon) => {
      const movesLearnedByMachine = this.filterMovesByMachine(pokemon.moves);

      // For every move, fetch its details
      const movesApiCalls = movesLearnedByMachine.map((item) =>
        this.pokemonService.getResourceFromUrl<Move>(item.move.url)
      );

      // When all moves' details have been fetched...
      forkJoin(movesApiCalls).subscribe((results) => {
        Promise.all(
          results.map(
            async (result, i) =>
              // Machine have their own endpoint, so wait for that to be fetched
              await this.parseMove(movesLearnedByMachine[i], result)
          )
        ).then((data) => {
          this.movesByMachine = {
            headers: machineTableHeaders,
            data,
          };
        });
      });
    });
  }

  /** Function that returns those moves whose move's learn-method is by machine. */
  filterMovesByMachine(moves: PokemonDetailsMove[]): PokemonDetailsMove[] {
    return moves.filter((item) => {
      // Get the last pokemon game available version of the move
      const numOfVersions = item.version_group_details.length;
      // prettier-ignore
      const currentMoveLearnMethodName = item.version_group_details[numOfVersions - 1].move_learn_method.name;

      return currentMoveLearnMethodName === EnumMoveLearnMethods.MACHINE;
    });
  }

  fetchMachineDetails(machineUrl: string): Promise<Machine> {
    return firstValueFrom(
      this.pokemonService.getResourceFromUrl<Machine>(machineUrl)
    );
  }

  async parseMove(
    pokemonMove: PokemonDetailsMove,
    move: Move
  ): Promise<ParsedMove> {
    // prettier-ignore
    const machine: Machine = await this.fetchMachineDetails(move.machines[move.machines.length - 1].machine.url);
    const itName = move.names.find((name) => name.language.name === 'it')?.name;

    return {
      machine: machine.item.name,
      name: itName ?? move.name,
      type: move.type.name,
      category: move.damage_class.name,
      power: move.power,
      accuracy: move.accuracy,
      pp: move.pp,
    };
  }
}
