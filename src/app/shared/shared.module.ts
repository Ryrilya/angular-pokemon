import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { DatalistComponent } from './components/datalist/datalist.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ButtonComponent } from './components/button/button.component';
import { PaginationSpriteComponent } from './components/pagination/pagination-sprite/pagination-sprite.component';

@NgModule({
  declarations: [
    InputComponent,
    DatalistComponent,
    PaginationComponent,
    ButtonComponent,
    PaginationSpriteComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    InputComponent,
    DatalistComponent,
    PaginationComponent,
    ButtonComponent,
  ],
})
export class SharedModule {}
