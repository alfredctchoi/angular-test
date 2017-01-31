import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core'

@Component({
  selector: 'paging',
  templateUrl: 'paging.component.html'
})
export class Paging implements OnInit {

  @Input()
  currentPage: number;

  @Input()
  totalPages: number;

  @Output()
  onPage: EventEmitter<any> = new EventEmitter();

  pagesArray: any[];

  ngOnInit(): void {
    this.pagesArray = new Array(this.totalPages);
  }

  onPageClick(event: MouseEvent, page: number): void {
    event.preventDefault();

    if (page === this.currentPage){
      return;
    }

    this.onPage.emit(page);
  }
}
