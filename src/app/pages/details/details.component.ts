import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { PokemonDetails } from 'src/app/models/PokemonDetails';
import { PokemonSpecies } from 'src/app/models/PokemonSpecies';
import { PokemonService } from 'src/app/services/pokemon.service';
import { State } from './store/details.reducer';
import * as DetailsActions from './store/details.actions';
import { pokemonTypesColors } from 'src/app/constants/pokemon-types';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  pokemonId!: number;
  pokemonDetails!: PokemonDetails;
  pokemonSpecies!: PokemonSpecies;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => (this.pokemonId = parseInt(params['id']))
    );

    this.pokemonService
      .getPokemonDetailsFromId(this.pokemonId)
      .subscribe((details) => {
        this.pokemonDetails = details;
        this.store.dispatch(
          DetailsActions.updatePokemon({ pokemon: this.pokemonDetails })
        );

        this.store.dispatch(
          DetailsActions.updateColor({
            color: pokemonTypesColors.get(
              this.pokemonDetails.types[0].type.name
            )!,
          })
        );
      });

    this.pokemonService
      .getPokemonSpeciesById(this.pokemonId)
      .subscribe((species) => {
        this.pokemonSpecies = species;
        this.store.dispatch(
          DetailsActions.updateSpecies({ species: this.pokemonSpecies })
        );
      });
  }
}
