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

@NgModule({
  declarations: [
    DetailsComponent,
    ArtworkComponent,
    HeroComponent,
    BasicInfoComponent,
    StatsComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    FontAwesomeModule,
    StoreModule.forFeature('home', homeReducer),
  ],
})
export class DetailsModule {}
