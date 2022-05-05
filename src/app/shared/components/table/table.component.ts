import { Component, Input, OnInit, Type } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { pokemonTypes } from 'src/app/constants/pokemon-types';
import { PokemonTypePillComponent } from '../pokemon-type-pill/pokemon-type-pill.component';

export interface Header {
  text: string;
  icon?: IconDefinition;
}

@Component({
  selector: 'my-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() headers!: Header[];
  @Input() data!: { [key: string]: any }[];

  constructor() {}

  ngOnInit(): void {}

  parseRow(row: { [key: string]: any }): { key: string; value: any }[] {
    return Object.entries(row).map(([key, value]) => {
      return {
        key,
        value,
      };
    });
  }

  getItalianTypeName(type: string): string {
    return pokemonTypes.get(type)!;
  }
}
