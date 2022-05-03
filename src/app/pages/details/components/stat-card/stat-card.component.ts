import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store/details.reducer';
import * as DetailsSelectors from '../../store/details.selectors';
import { ParsedStat } from '../stats/stats.component';

@Component({
  selector: 'pokemon-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss'],
})
export class StatCardComponent implements OnInit {
  @Input() stat!: ParsedStat;
  pokemonColor!: string;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store
      .select(DetailsSelectors.colorSelector)
      .subscribe((color) => (this.pokemonColor = color));
  }
}
