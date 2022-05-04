import { PokemonService } from 'src/app/services/pokemon.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as DetailsActions from 'src/app/pages/details/store/details.actions';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import { PokemonDetails } from 'src/app/models/PokemonDetails';

@Injectable()
export class DetailsEffect {
  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService
  ) {}

  loadPokemonEvolutionChain$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DetailsActions.loadEvolutionChain),
      mergeMap(({ url }) =>
        this.pokemonService.getPokemonEvolutionChain(url).pipe(
          map((evolutionChain) =>
            DetailsActions.loadEvolutionChainSuccess({ evolutionChain })
          ),
          catchError((error) =>
            of(DetailsActions.loadEvolutionChainFailure({ error }))
          )
        )
      )
    );
  });
}
