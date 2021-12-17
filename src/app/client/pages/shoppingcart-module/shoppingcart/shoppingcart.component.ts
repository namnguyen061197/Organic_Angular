import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/client/services/cart.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  public listBread:Array<any> = [
    {
      name:'Home',
      slug:'home'
    },
    {
      name:'Shopping Cart',
      slug:'shoppingcart'
    }
  ]

  public listCouponCode:Array<any> = [
    {
      id:1,
      code:'xuan',
      percent:20
    },
    {
      id:2,
      code:'ha',
      percent:30
    },
    {
      id:3,
      code:'thu',
      percent:25
    },
    {
      id:4,
      code:'dong',
      percent:27
    },
  ]

  listItemCart:Array<any> = []

  totalPricePrdInCart: number = 0;
  subtotalPricePrdInCart : number = 0;
  priceCouponCode ?: number;

  couponCode ?: string;

  constructor(
    private cartService : CartService,
    private _location : Location,
    private toastr : ToastrService,
    private route : Router
    ) { }

  ngOnInit(): void {
    this.cartService.updateCart.subscribe(data => {
      this.subtotalPricePrdInCart = this.cartService.subtotalPricePrdBill();
      this.totalPricePrdInCart = this.cartService.totalPricePrdBill();
      this.listItemCart = data;
      this.priceCouponCode = - (this.cartService.couponPercent/100 * this.subtotalPricePrdInCart);
    })
  }

  goBackUrl():void {
    this._location.back();
  }

  deletePrd(idPrd:any):void {
    this.toastr.success( `Xóa sản phẩm thành công !`);
    setTimeout(() => {
      this.cartService.deletePrdOnCart(idPrd);
    },1000);
  }

  clearCart():void {
    this.toastr.success( `Xóa toàn bộ giỏ hàng !`);
    setTimeout(() => {
      this.cartService.clearCart();
    },1000);
  }

  updateQuanlity(){
    this.cartService.updateCart.next(this.listItemCart);
    localStorage.setItem('carts',JSON.stringify(this.listItemCart));

  }

  applyCouponCode():void {
    if(this.listItemCart.length === 0){
      return;
    }
   let correctCode =  this.listCouponCode.find(item => item.code === this.couponCode);
   if(!correctCode){
      this.toastr.error( `Mã giảm giá không hợp lệ !`);
      this.couponCode = '';
    return;
   }
   this.cartService.applyCouponCode(correctCode.percent);
   this.toastr.success(`ÁP dụng mã '${correctCode.code.toUpperCase()}' thành công !`);
   this.couponCode = '';
  }

  navigateToDetail(slug : string){
    this.route.navigate(['vegetable',slug]);
  }
  navigateCheckOut(){
    this.route.navigate(['checkout']);
  }

}
