import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart: Array<any> = [];
  public couponPercent = JSON.parse(localStorage.getItem("couponCode") || '{}');
  public  cartItemLocal  = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem("carts") || '{}') : [];
  public updateCart = new BehaviorSubject(this.cartItemLocal);

  constructor() { }

  addPrdToCart(prd:any,quan?:any):void {
    let index = this.cartItemLocal.findIndex((item :any) => item.id == prd.id);
    let prdPriceOld = prd.price;
    prd.price = prdPriceOld * (100 - prd.rate)/100;
    if(index === -1){
      this.cartItemLocal.push({...prd,quanlity:quan});
    }
    else {
      this.cartItemLocal[index].quanlity += quan;
    }
    prd.price = prdPriceOld;
    localStorage.setItem('carts',JSON.stringify(this.cartItemLocal));
    this.updateCart.next(this.cartItemLocal);
  }

  deletePrdOnCart(id: number){
   this.cartItemLocal =  this.cartItemLocal.filter((prd:any) => prd.id !== id);
   localStorage.setItem('carts',JSON.stringify(this.cartItemLocal));
   if(this.cartItemLocal.length === 0){
    this.couponPercent = 0;
    localStorage.setItem('couponCode',JSON.stringify(this.couponPercent));
   }
   this.updateCart.next(this.cartItemLocal);
  }

  clearCart():void {
    this.cartItemLocal = [];
    this.couponPercent = 0;
    localStorage.setItem('carts',JSON.stringify(this.cartItemLocal));
    localStorage.setItem('couponCode',JSON.stringify(this.couponPercent));
    this.updateCart.next(this.cartItemLocal);
  }

  totalPricePrdBill():number {
    return this.subtotalPricePrdBill() *  (100 -  this.couponPercent) / 100;
  }

  subtotalPricePrdBill():number {
    let totalPrdBill = 0;
    this.cartItemLocal.map((item:any) => totalPrdBill += (item.quanlity * item.price));
    return totalPrdBill;
  }

  applyCouponCode(codePercent : number):void {
    this.couponPercent = codePercent;
    localStorage.setItem('couponCode',JSON.stringify(codePercent));
    this.updateCart.next(this.cartItemLocal);
  }

}
