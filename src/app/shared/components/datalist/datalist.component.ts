import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.scss'],
})
export class DatalistComponent implements OnInit {
  @Input() name!: string;
  @Input() placeholder!: string;
  @Input() inputId!: string;
  @Input() list!: string;
  @Input() items!: any[];

  constructor() {}

  ngOnInit(): void {}
}
