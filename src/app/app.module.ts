import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { InputComponent } from './components/common/input/input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DatalistComponent } from './components/common/datalist/datalist.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { PokemonCardComponent } from './components/pokemon/pokemon-card/pokemon-card.component';
import { PokemonGridComponent } from './components/pokemon/pokemon-grid/pokemon-grid.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputComponent,
    DatalistComponent,
    HeroComponent,
    PokemonCardComponent,
    PokemonGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
