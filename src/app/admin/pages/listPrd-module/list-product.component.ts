import { Component, OnInit} from '@angular/core';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  listPrd ?: any = [];

  idxFisrt ?: any;
  idxLast?: number;

  limitBlogOnPage = 5;
  constructor(private productService : ProductService) { }

  ngOnInit(): void {

    this.idxFisrt = 0;
    this.idxLast = this.limitBlogOnPage;

    this.productService.handleChangeListPrd.subscribe(() => {
      this.productService.getListPrd().subscribe(data => {
        this.listPrd = data;
      })
    })
  }

  handleSelectPage(idxPage : number):void {
    this.idxFisrt = (idxPage - 1) * this.limitBlogOnPage;
    this.idxLast = this.idxFisrt + this.limitBlogOnPage;
  }
}
