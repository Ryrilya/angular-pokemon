import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() id!: string;
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() name!: string;
  @Input() list!: string;

  constructor() {}

  ngOnInit(): void {}
}
