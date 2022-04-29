import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() icon!: IconProp;
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled!: boolean | ((...args: any[]) => boolean);

  constructor() {}

  ngOnInit(): void {}
}
