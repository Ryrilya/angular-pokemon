import { Component, OnInit } from '@angular/core';
import {
  faGaugeHigh,
  faHeart,
  faShield,
  faShieldHalved,
  faSquarePollVertical,
  faTeethOpen,
  faWandSparkles,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { pokemonStats } from 'src/app/constants/pokemon-stats';
import { PokemonDetails } from 'src/app/models/PokemonDetails';
import { State } from '../../store/details.reducer';
import * as DetailsSelectors from '../../store/details.selectors';

export interface ParsedStat {
  originalName: string;
  name: string;
  value: number;
  icon: IconDefinition;
}

@Component({
  selector: 'pokemon-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  stats!: PokemonDetails['stats'];
  parsedStats!: ParsedStat[];
  faSquarePollVertical = faSquarePollVertical;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.select(DetailsSelectors.pokemonSelector).subscribe((pokemon) => {
      this.stats = pokemon.stats;

      if (this.stats) this.parseStats(this.stats);
    });
  }

  /** Converts pokemon's stats into a format needed for template */
  parseStats(stats: PokemonDetails['stats']): void {
    this.parsedStats = this.stats.map((item): ParsedStat => {
      let icon: IconDefinition;

      switch (item.stat.name) {
        case 'hp':
          icon = faHeart;
          break;

        case 'attack':
          icon = faTeethOpen;
          break;

        case 'defense':
          icon = faShield;
          break;

        case 'special-attack':
          icon = faWandSparkles;
          break;

        case 'special-defense':
          icon = faShieldHalved;
          break;

        case 'speed':
          icon = faGaugeHigh;
          break;
      }

      return {
        originalName: item.stat.name,
        name: pokemonStats.get(item.stat.name)!,
        value: item.base_stat,
        icon: icon!,
      };
    });
  }
}
