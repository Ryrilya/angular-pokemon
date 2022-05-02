import { Component, Input, OnInit } from '@angular/core';
import { pokemonTypes } from 'src/app/constants/pokemon-types';

@Component({
  selector: 'pokemon-type-pill',
  templateUrl: './pokemon-type-pill.component.html',
  styleUrls: ['./pokemon-type-pill.component.scss'],
})
export class PokemonTypePillComponent implements OnInit {
  @Input() type!: string;
  translatedType: string = '';

  constructor() {}

  ngOnInit(): void {
    this.translatedType = pokemonTypes.get(this.type)!;
  }
}
