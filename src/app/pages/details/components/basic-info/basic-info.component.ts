import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokemonDetails } from 'src/app/models/PokemonDetails';
import { PokemonSpecies } from 'src/app/models/PokemonSpecies';
import { State } from '../../store/details.reducer';
import * as DetailsSelectors from '../../store/details.selectors';

@Component({
  selector: 'details-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
})
export class BasicInfoComponent implements OnInit {
  pokemon!: PokemonDetails;
  species!: PokemonSpecies;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store
      .select(DetailsSelectors.pokemonSelector)
      .subscribe((pokemon) => (this.pokemon = pokemon));

    this.store
      .select(DetailsSelectors.speciesSelector)
      .subscribe((species) => (this.species = species));
  }

  get pokemonGenera(): string {
    if (!this.species || Object.keys(this.species).length === 0) return '';

    const itGenera = this.species.genera.find((g) => g.language.name === 'it');

    if (itGenera) {
      return itGenera.genus;
    } else {
      const enGenera = this.species.genera.find(
        (g) => g.language.name === 'en'
      );

      return enGenera ? enGenera.genus : '';
    }
  }
}
