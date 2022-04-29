import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  faArrowLeft,
  faArrowRight,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() currentPage!: number;
  @Input() itemsPerPage!: number;
  @Input() prevDisabled!: boolean | ((...args: any[]) => boolean);
  @Input() nextDisabled!: boolean | ((...args: any[]) => boolean);
  @Output() onNext: EventEmitter<undefined> = new EventEmitter();
  @Output() onPrev: EventEmitter<undefined> = new EventEmitter();
  iconLeft = faArrowLeft;
  iconRight = faArrowRight;

  constructor() {}

  ngOnInit(): void {}

  next(): void {
    console.log('[Pagination] next()');

    this.onNext.emit();
  }

  prev(): void {
    this.onPrev.emit();
  }
}
