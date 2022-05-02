import { pokemonTypesColors } from './../../../../constants/pokemon-types';
import {
  Component,
  Input,
  OnInit,
  ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR,
} from '@angular/core';
import { PokemonDetails } from 'src/app/models/PokemonDetails';
import {
  faAlignJustify,
  faArrowLeft,
  faArrowsUpDown,
  faDumbbell,
} from '@fortawesome/free-solid-svg-icons';
import { PokemonSpecies } from 'src/app/models/PokemonSpecies';

@Component({
  selector: 'details-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  @Input() pokemon!: PokemonDetails;
  @Input() species!: PokemonSpecies;
  faArrowLeft = faArrowLeft;
  faArrowsUpDown = faArrowsUpDown;
  faDumbbell = faDumbbell;
  faAlignJustify = faAlignJustify;

  constructor() {}

  ngOnInit(): void {}

  get pokemonType(): string {
    return this.pokemon.types[0].type.name;
  }

  get waveColor(): string | undefined {
    return pokemonTypesColors.get(this.pokemonType);
  }

  get bio(): string {
    const itBios = this.species.flavor_text_entries.filter(
      (i) => i.language.name === 'it'
    );

    // Get the last gen italian bio
    return itBios[itBios.length - 1].flavor_text;
  }
}
