import { PokemonService } from 'src/app/services/pokemon.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as HomeActions from 'src/app/pages/home/store/home.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class HomeEffects {
  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService
  ) {}

  loadPokemonList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomeActions.loadPokemonList),
      mergeMap(({ limit, offset }) =>
        this.pokemonService.getPokemonList(limit, offset).pipe(
          map((pokemonList) =>
            HomeActions.loadPokemonListSuccess({ list: pokemonList.results })
          ),
          catchError((error) =>
            of(HomeActions.loadPokemonListFailure({ error }))
          )
        )
      )
    );
  });
}
