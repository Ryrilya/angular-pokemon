import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtworkComponent } from 'src/app/pages/details/components/artwork/artwork.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { homeReducer } from '../home/store/home.reducer';
import { HeroComponent } from './components/hero/hero.component';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { DetailsComponent } from './details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StatsComponent } from './components/stats/stats.component';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { detailsReducer } from './store/details.reducer';
import { EvolutionChainComponent } from './components/evolution-chain/evolution-chain.component';
import { MovesComponent } from './components/moves/moves.component';
import { EvolutionRingComponent } from './components/evolution-chain/evolution-ring/evolution-ring.component';
import { EffectsModule } from '@ngrx/effects';
import { DetailsEffect } from './store/details.effects';
import { LevelUpMovesComponent } from './components/moves/level-up-moves/level-up-moves.component';
import { MachineMovesComponent } from './components/moves/machine-moves/machine-moves.component';

@NgModule({
  declarations: [
    DetailsComponent,
    ArtworkComponent,
    HeroComponent,
    BasicInfoComponent,
    StatsComponent,
    StatCardComponent,
    EvolutionChainComponent,
    MovesComponent,
    EvolutionRingComponent,
    LevelUpMovesComponent,
    MachineMovesComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    FontAwesomeModule,
    StoreModule.forFeature('home', homeReducer),
    StoreModule.forFeature('details', detailsReducer),
    EffectsModule.forFeature([DetailsEffect]),
  ],
})
export class DetailsModule {}
