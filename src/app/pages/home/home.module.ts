import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonGridComponent } from './components/pokemon-grid/pokemon-grid.component';
import { HeroComponent } from './components/hero/hero.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { homeReducer } from './store/home.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './store/home.effects';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    PokemonCardComponent,
    PokemonGridComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects]),
    AppRoutingModule,
  ],
  exports: [HeroComponent],
})
export class HomeModule {}
