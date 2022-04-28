import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { DatalistComponent } from './components/datalist/datalist.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [InputComponent, DatalistComponent],
  imports: [CommonModule],
  exports: [InputComponent, DatalistComponent],
})
export class SharedModule {}
