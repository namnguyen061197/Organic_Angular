import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit,OnChanges {

  @Input() limitNumber: number = 3;
  @Input() numItem?: any;
  @Output() selectPage = new EventEmitter<number>();


  listPage?: Array<any>;
  currentPage:number = 1;
  totalPage: any;

  constructor() { }

  ngOnChanges(changes : SimpleChanges):void {
    this.totalPage  = Math.ceil(this.numItem / this.limitNumber);
    this.currentPage = 1;
    this.listPage = this.pagination(this.currentPage, this.totalPage);
  }

  ngOnInit(): void {
  }

  getType(value: any){
    return typeof value;
  }

  pagination(c:number, m:number) {
    var current = c,
        last = m,
        delta = 2,
        left = current - delta,
        right = current + delta ,
        range = [],
        rangeWithDots = [],
        l;

    for (let i = 1; i <= last; i++) {
        if (i == 1 || i == last || i >= left && i < right) {
            range.push(i);
        }
    }

    for (let i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push('...');
            }
        }
        rangeWithDots.push(i);
        l = i;
    }

    return rangeWithDots;
}
  moveToPage(idxPage : number):void {
    this.currentPage = idxPage;
    this.listPage = this.pagination(this.currentPage, this.totalPage);
    this.selectPage.emit(this.currentPage);
  }
}
