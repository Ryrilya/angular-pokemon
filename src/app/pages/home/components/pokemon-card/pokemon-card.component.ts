import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokemonDetails } from 'src/app/models/PokemonDetails';
import { PokemonListItem } from 'src/app/models/PokemonListItem';
import { PokemonService } from 'src/app/services/pokemon.service';
import { State } from '../../store/home.reducer';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon!: PokemonListItem;
  pokemonDetails!: PokemonDetails;
  name: string = '';

  constructor(
    private pokemonService: PokemonService,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.name = this.pokemon.name;

    this.pokemonService
      .getResourceFromUrl<PokemonDetails>(this.pokemon.url)
      .subscribe((result) => (this.pokemonDetails = result));
  }

  get detailsUrlPath(): string {
    if (!this.pokemonDetails || Object.keys(this.pokemonDetails).length === 0)
      return '';

    return `details/${this.pokemonDetails.id}`;
  }
}
