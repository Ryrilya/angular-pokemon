import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetails } from 'src/app/models/PokemonDetails';
import { PokemonListItem } from 'src/app/models/PokemonListItem';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon!: PokemonListItem;
  pokemonDetails!: PokemonDetails;
  name: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.name = this.pokemon.name;

    this.pokemonService
      .getPokemonDetailsFromUrl(this.pokemon.url)
      .subscribe((result) => (this.pokemonDetails = result));
  }
}
