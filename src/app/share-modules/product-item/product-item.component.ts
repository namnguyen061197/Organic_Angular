import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() contentPrd?: any;
  @Input() checkDisplay: string = 'table';

  constructor(
    private route: Router,
    private cartService: CartService,
    private toastr : ToastrService,
    private productService : ProductService
  ) { }

  ngOnInit(): void {
    
  }

  navigateToDetail(slug : string){
    this.route.navigate(['vegetable',slug])
  }

  addPrdToCart(prd:any):void {
    this.toastr.success( `Thêm sản phẩm thành công !`);
    setTimeout(() => {
      this.cartService.addPrdToCart(prd);
    }, 1000);
  }

}
