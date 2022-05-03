import { Component, Input, OnInit, Type } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/pages/details/store/details.reducer';
import * as DetailsSelectors from 'src/app/pages/details/store/details.selectors';

export interface Tab {
  id: number;
  label: string;
  component: Type<any>;
  icon?: IconDefinition;
}
@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  @Input() tabs!: Tab[];
  selectedTabId!: number;
  pokemonColor!: string;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store
      .select(DetailsSelectors.colorSelector)
      .subscribe((color) => (this.pokemonColor = color));

    this.selectedTabId = this.tabs[0].id;
  }

  onTabClicked(tab: number): void {
    this.selectedTabId = tab;
  }
}
