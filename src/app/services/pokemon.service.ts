import { PaginationResponse } from '../models/PaginationRespose';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonListItem } from '../models/PokemonListItem';
import { PokemonDetails } from '../models/PokemonDetails';
import { PokemonSpecies } from '../models/PokemonSpecies';
import { PokemonGender } from '../models/PokemonGender';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemonList(
    limit?: number,
    offset?: number
  ): Observable<PaginationResponse<PokemonListItem>> {
    return this.http.get<PaginationResponse<PokemonListItem>>(
      `${this.apiUrl}/pokemon${limit ? `?limit=${limit}` : ''}${
        offset ? `&offset=${offset}` : ''
      }`
    );
  }

  // Details
  getPokemonDetailsFromName(name: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(`${this.apiUrl}/pokemon/${name}`);
  }

  getPokemonDetailsFromUrl(url: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(url);
  }

  getPokemonDetailsFromId(id: number): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(`${this.apiUrl}/pokemon/${id}`);
  }

  // Species
  getPokemonSpeciesByName(name: string): Observable<PokemonSpecies> {
    return this.http.get<PokemonSpecies>(
      `${this.apiUrl}/pokemon-species/${name}`
    );
  }

  getPokemonSpeciesById(id: number): Observable<PokemonSpecies> {
    return this.http.get<PokemonSpecies>(
      `${this.apiUrl}/pokemon-species/${id}`
    );
  }

  // Gender
  getPokemonGenderByName(name: string): Observable<PokemonGender> {
    return this.http.get<PokemonGender>(`${this.apiUrl}/gender/${name}`);
  }

  getPokemonGenderById(id: number): Observable<PokemonGender> {
    return this.http.get<PokemonGender>(`${this.apiUrl}/gender/${id}`);
  }
}
