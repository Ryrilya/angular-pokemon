import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokemonDetails } from 'src/app/models/PokemonDetails';
import { State } from '../../store/details.reducer';
import * as DetailsSelectors from '../../store/details.selectors';

@Component({
  selector: 'artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss'],
})
export class ArtworkComponent implements OnInit {
  pokemon!: PokemonDetails;
  pokemonColor!: string;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store
      .select(DetailsSelectors.pokemonSelector)
      .subscribe((pokemon) => (this.pokemon = pokemon));

    this.store
      .select(DetailsSelectors.colorSelector)
      .subscribe((color) => (this.pokemonColor = color));
  }

  get officialArtwork(): string | undefined {
    if (!this.pokemon || Object.keys(this.pokemon).length === 0)
      return undefined;

    return this.pokemon.sprites.other?.['official-artwork'].front_default;
  }

  get sprite(): string | undefined {
    if (!this.pokemon || Object.keys(this.pokemon).length === 0)
      return undefined;

    if (
      this.pokemon.sprites.versions?.['generation-v']['black-white'].animated
        ?.front_default
    ) {
      return this.pokemon.sprites.versions['generation-v']['black-white']
        .animated.front_default;
    } else {
      return this.pokemon.sprites.front_default;
    }
  }

  get pokemonType(): string {
    if (!this.pokemon || Object.keys(this.pokemon).length === 0) return '';

    return this.pokemon.types[0].type.name;
  }
}
