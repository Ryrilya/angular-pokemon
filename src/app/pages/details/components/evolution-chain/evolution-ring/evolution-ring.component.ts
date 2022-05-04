import { Component, Input, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { PokemonDetails } from 'src/app/models/PokemonDetails';

@Component({
  selector: 'evolution-ring',
  templateUrl: './evolution-ring.component.html',
  styleUrls: ['./evolution-ring.component.scss'],
})
export class EvolutionRingComponent implements OnInit {
  @Input() index!: number;
  @Input() ringsNum!: number;
  @Input() pokemon!: PokemonDetails;

  faArrowRight = faArrowRight;

  constructor() {}

  ngOnInit(): void {}
}
