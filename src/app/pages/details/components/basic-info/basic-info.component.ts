import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetails } from 'src/app/models/PokemonDetails';
import { PokemonSpecies } from 'src/app/models/PokemonSpecies';

@Component({
  selector: 'details-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
})
export class BasicInfoComponent implements OnInit {
  @Input() pokemon!: PokemonDetails;
  @Input() species!: PokemonSpecies;

  constructor() {}

  ngOnInit(): void {}

  get pokemonGenera(): string {
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
