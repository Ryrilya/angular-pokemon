import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetails } from 'src/app/models/PokemonDetails';
import { PokemonSpecies } from 'src/app/models/PokemonSpecies';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  pokemonId!: number;
  pokemonDetails!: PokemonDetails;
  pokemonSpecies!: PokemonSpecies;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => (this.pokemonId = parseInt(params['id']))
    );

    this.pokemonService
      .getPokemonDetailsFromId(this.pokemonId)
      .subscribe((details) => (this.pokemonDetails = details));

    this.pokemonService
      .getPokemonSpeciesById(this.pokemonId)
      .subscribe((species) => (this.pokemonSpecies = species));
  }
}
