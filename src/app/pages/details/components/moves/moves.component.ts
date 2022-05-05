import { Component, OnInit } from '@angular/core';
import { Header } from 'src/app/shared/components/table/table.component';

export interface TableMoves {
  headers: Header[];
  data: ParsedMove[];
}
export interface ParsedMove {
  [key: string]: any;
  name: string;
  type: string;
  category: string;
  power: number;
  accuracy: number;
  pp: number;
}

export const commonHeaders: Header[] = [
  {
    text: 'Nome',
  },
  {
    text: 'Tipo',
  },
  {
    text: 'Categoria',
  },
  {
    text: 'Potenza',
  },
  {
    text: 'Precisione',
  },
  {
    text: 'PP',
  },
];

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.scss'],
})
export class MovesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
