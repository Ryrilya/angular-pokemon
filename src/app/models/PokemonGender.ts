import { NamedAPIResource } from './NamedAPIResource';

export interface PokemonGender {
  id: number;
  name: 'male' | 'female';
  pokemon_species_details: PokemonSpeciesGender[];
  required_for_evolution: NamedAPIResource[];
}

interface PokemonSpeciesGender {
  rate: number;
  pokemon_species: NamedAPIResource;
}
