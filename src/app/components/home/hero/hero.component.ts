import { Component, OnInit } from '@angular/core';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'home-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  faCircleChevronDown = faCircleChevronDown;

  constructor() {}

  ngOnInit(): void {}
}
