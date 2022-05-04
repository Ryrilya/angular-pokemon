import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokemonDetails } from 'src/app/models/PokemonDetails';
import { PokemonService } from 'src/app/services/pokemon.service';
import { State } from '../../store/details.reducer';
import * as DetailsSelectors from '../../store/details.selectors';
import * as DetailsActions from '../../store/details.actions';
import { PokemonEvolutionChain } from 'src/app/models/PokemonEvolutionChain';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'evolution-chain',
  templateUrl: './evolution-chain.component.html',
  styleUrls: ['./evolution-chain.component.scss'],
})
export class EvolutionChainComponent implements OnInit {
  evolutionChain$!: Observable<PokemonEvolutionChain>;
  currentPokemon!: PokemonDetails;
  pokemonNames: string[] = [];
  evolutionChainRings!: PokemonDetails[];

  constructor(
    private pokemonService: PokemonService,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    console.log('[Evolution Chain] Component Mounted');

    this.store
      .select(DetailsSelectors.pokemonSelector)
      .subscribe((pokemon) => (this.currentPokemon = pokemon));

    // prettier-ignore
    this.evolutionChain$ = this.store.select(DetailsSelectors.evolutionChainSelector);
  }

  ngAfterViewInit(): void {
    console.log('[Evolution Chain] ngAfterViewInit()');

    this.evolutionChain$.subscribe((evolutionChain) => {
      // if it's not already saved in the store
      if (!evolutionChain || Object.keys(evolutionChain).length === 0) {
        // Get the pokemon species from store
        this.store
          .select(DetailsSelectors.speciesSelector)
          .subscribe((species) => {
            if (!species || Object.keys(species).length === 0) return;

            // Load evolution chain and, if success, save it into store
            this.store.dispatch(
              DetailsActions.loadEvolutionChain({
                url: species.evolution_chain.url,
              })
            );
          });
      }

      this.extractRing(evolutionChain.chain);

      let currentPokemonIndexInEvoChain = this.pokemonNames.indexOf(
        this.currentPokemon.name
      );
      this.pokemonNames = this.pokemonNames.filter(
        (name) => name !== this.currentPokemon.name
      );

      // TODO: cache the rings details in store
      // Wait for all of the api-call to be completed
      forkJoin(
        this.pokemonNames.map((name) => {
          return this.pokemonService.getPokemonDetailsFromName(name);
        })
      ).subscribe((results) => {
        this.evolutionChainRings = results;
        this.evolutionChainRings.splice(
          currentPokemonIndexInEvoChain,
          0,
          this.currentPokemon
        );
      });
    });
  }

  ngOnDestroy(): void {
    console.log('[Evolution Chain] Component Destroyed');
  }

  extractRing(chain: PokemonEvolutionChain['chain']) {
    if (!chain) return;
    else if (chain && chain.evolves_to.length === 0) {
      this.pokemonNames.push(chain.species.name);
      return;
    } else {
      this.pokemonNames.push(chain.species.name);
      this.extractRing(chain.evolves_to[0]);
    }
  }
}
