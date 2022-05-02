import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetails } from 'src/app/models/PokemonDetails';

@Component({
  selector: 'artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss'],
})
export class ArtworkComponent implements OnInit {
  @Input() pokemon!: PokemonDetails;

  constructor() {}

  ngOnInit(): void {}

  get officialArtwork(): string | undefined {
    return this.pokemon.sprites.other?.['official-artwork'].front_default;
  }

  get sprite(): string | undefined {
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
    return this.pokemon.types[0].type.name;
  }
}
