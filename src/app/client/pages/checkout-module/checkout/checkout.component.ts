import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CartService } from 'src/app/client/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public listBread:Array<any> = [
    {
      name:'Home',
      slug:'home'
    },
    {
      name:'Check Out',
      slug:'checkout'
    }
  ]

  loginForm ?:any;
  receiverForm ?: any;
  listCartItem : Array<any> = [];
  totalPricePrdInCart: number = 0;
  subtotalPricePrdInCart : number = 0;
  priceCouponCode ?: number;

  constructor(
    private fb : FormBuilder,
    private cartService : CartService,
  ) { }

  ngOnInit(): void {
   this.loginForm = this.fb.group({
     useroremail : ["",[Validators.required]],
     password : ["",[Validators.required,Validators.pattern(/^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/)]]
   })
   this.cartService.updateCart.subscribe(data => {
    this.listCartItem = data;
    this.subtotalPricePrdInCart = this.cartService.subtotalPricePrdBill();
      this.totalPricePrdInCart = this.cartService.totalPricePrdBill();
      this.priceCouponCode = - (this.cartService.couponPercent/100 * this.subtotalPricePrdInCart);

   })

   this.receiverForm = this.fb.group({
     firstname : [""],
     lastname : ["",Validators.required],
     companyname : [""],
     address  : ["",Validators.required],
     atp : [""],
     zip : [""],
     phone : ["",[Validators.required,Validators.pattern(/(84|0[3|5|7|8|9])+([0-9]{8})\b/)]],
     email: ["",[Validators.required,Validators.pattern(/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}/)]],
     note : [""],
     cardnumber : ["",[Validators.required]],
     expiry : ["",[Validators.required]],
     cardcode : ["",[Validators.required]],
     saveInfo : (false),
     aDifferentAddress : (false),
   })
  }

}
