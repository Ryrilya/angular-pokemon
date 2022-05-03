import { pokemonTypesColors } from './../../../../constants/pokemon-types';
import { Component, OnInit } from '@angular/core';
import { PokemonDetails } from 'src/app/models/PokemonDetails';
import {
  faAlignJustify,
  faArrowLeft,
  faArrowsUpDown,
  faDumbbell,
  faMarsAndVenus,
} from '@fortawesome/free-solid-svg-icons';
import { PokemonSpecies } from 'src/app/models/PokemonSpecies';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Store } from '@ngrx/store';
import { State } from '../../store/details.reducer';
import * as DetailsSelectors from '../../store/details.selectors';

@Component({
  selector: 'details-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  species!: PokemonSpecies;
  pokemon!: PokemonDetails;
  gender!: number;
  pokemonColor!: string;

  // Icons
  faArrowLeft = faArrowLeft;
  faArrowsUpDown = faArrowsUpDown;
  faDumbbell = faDumbbell;
  faAlignJustify = faAlignJustify;
  faMarsAndVenus = faMarsAndVenus;

  constructor(
    private pokemonService: PokemonService,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.store
      .select(DetailsSelectors.pokemonSelector)
      .subscribe((pokemon) => (this.pokemon = pokemon));

    this.store
      .select(DetailsSelectors.speciesSelector)
      .subscribe((species) => (this.species = species));

    this.store
      .select(DetailsSelectors.colorSelector)
      .subscribe((color) => (this.pokemonColor = color));
  }

  ngOnChanges(): void {
    if (!this.pokemon || !this.pokemon.id) return;

    this.pokemonService
      .getPokemonGenderByName('bulbasaur')
      .subscribe((gender) => {
        console.log(gender);
        return (this.gender = gender.pokemon_species_details[0].rate);
      });
  }

  get pokemonType(): string {
    if (!this.pokemon || Object.keys(this.pokemon).length === 0) return '';

    return this.pokemon.types[0].type.name;
  }

  get bio(): string {
    if (!this.species || Object.keys(this.species).length === 0) return '';

    const itBios = this.species.flavor_text_entries.filter(
      (i) => i.language.name === 'it'
    );

    // Get the last gen italian bio
    return itBios[itBios.length - 1].flavor_text;
  }

  get maleRatio(): number {
    if (!this.gender) return 0;

    return (this.gender * 100) / 8;
  }
}
