import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart: Array<any> = [];
  public updateCart = new BehaviorSubject(this.cart);
  public couponPercent = 0;

  constructor() { }

  addPrdToCart(prd:any):void {
    let index = this.cart.findIndex(item => item.id == prd.id);
    if(index === -1){
      this.cart.push({...prd,quanlity:1})
    }
    else {
      this.cart[index].quanlity++;
    }
    this.updateCart.next(this.cart);
  }

  deletePrdOnCart(id: number){
   this.cart =  this.cart.filter(prd => prd.id !== id);
   this.updateCart.next(this.cart);
  }

  clearCart():void {
    this.cart = [];
    this.updateCart.next(this.cart);
  }

  totalPricePrdBill():number{
    let totalPrdBill = 0;
    this.cart.map(item => totalPrdBill += (item.quanlity * item.priceNow))
    return totalPrdBill *  (100 -  this.couponPercent) / 100;
  }

  applyCouponCode(codePercent : number):void {
    this.couponPercent = codePercent;
    this.updateCart.next(this.cart);
  }

}
