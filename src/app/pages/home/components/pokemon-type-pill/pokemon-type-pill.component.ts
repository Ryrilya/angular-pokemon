import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pokemon-type-pill',
  templateUrl: './pokemon-type-pill.component.html',
  styleUrls: ['./pokemon-type-pill.component.scss'],
})
export class PokemonTypePillComponent implements OnInit {
  @Input() type!: string;

  constructor() {}

  ngOnInit(): void {}
}
