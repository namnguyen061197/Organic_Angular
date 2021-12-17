import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/client/services/cart.service';
import { ProductService } from 'src/app/client/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public listPrd:Array<any> = []
  public showPopup : boolean = false;
  public listPrd2:Array<any> = []
  public leftListPrd2 :any ;

   public listOragnicNew:Array<any> = [
     {
       id: 1,
       dateNew : "MARCH 04,2021",
       content : "QUICK DINNERS, HEALTHY RECIPES, AND MORE. ",
       bgImg : "../../../assets/imgHomePage/oganicnew01.jpg"
     },
     {
      id: 2,
      dateNew : "JUN 05,2021",
      content : "5 REASONS WHY ORAPES ARE GOOD FOR YOU ",
      bgImg : "../../../assets/imgHomePage/oganicnew2.jpg"

    },
    {
      id: 3,
      dateNew : "BAY 07,2021",
      content : "CHICKEN & SPRING VEGETABLE LASAGNA RECIPE ",
      bgImg : "../../../assets/imgHomePage/organicnew03.jpg"

    },
    {
      id: 4,
      dateNew : "MATH 08,2021",
      content : "QUICK DINNERS, HEALTHY RECIPES, AND MORE. ",
      bgImg : "../../../assets/imgHomePage/organicnew4.jpg"
    },
   ]
   public listSingleService:Array<any> =[
     {
       id:1,
       img: "bgg.webp",
       title:"FRESH FRUITS "
     },
     {
      id:2,
      img: "bgg5.jpg",
      title:"FRESH VEGETABLES "
    },
    {
      id:3,
      img: "bgg4.jpg",
      title:"ORGANIC FOODS "
    },

   ]
   public listBrand:Array<any> = [
     {
       id:1,
       imgBrand: "logo01.jpg"
     },
     {
      id:2,
      imgBrand: "logo05.gif"
    },
    {
      id:3,
      imgBrand: "logo03.gif"
    },
    {
      id:4,
      imgBrand: "logo04.gif"
    },
    {
      id:5,
      imgBrand: "logo05.gif"
    },
   ]
   emailUser : any;
  constructor(
    private cartService : CartService,
    private toastr : ToastrService,
    private productService : ProductService,
    private fb : FormBuilder
  ){}

  ngOnInit(): void {
    this.emailUser = new FormControl('',[Validators.pattern(/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}/)]);

    setTimeout(() => {
      this.showPopup = true;
    }, 2000);

    this.productService.getListPrd().subscribe(data => {
      this.listPrd = data,
      this.listPrd2 = data.slice(0,7);
      this.leftListPrd2 =  Math.floor(this.listPrd2.length / 2);
    })

  }
  
  sendEmail():void {
    console.log(this.emailUser?.value);
  }


  customOptionsBanner: OwlOptions = {
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay:true,
         navText: [`<i class="fas fa-chevron-left"></i>`,`<i class="fas fa-chevron-right"></i>`],
        autoplayTimeout:3000,
        responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
    }
  }

  customOptionsNew_Arrivals:  OwlOptions = {
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    autoplay:true,
      navText: [`<i class="fas fa-chevron-left"></i>`,`<i class="fas fa-chevron-right"></i>`],
    autoplayTimeout:3000,
    responsive:{
      0:{
          items:2
      },
      500:{
          items:2
      },
      600:{
          items:3
      },
      767:{
          items:3
      },
      768:{
          items:4
      },
      1000:{
          items:4
      }
  }
  }

  customOptionsBrand: OwlOptions = {
    loop:true,
    margin:0,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
      0:{
        items:2
    },
    500:{
        items:3
    },
    600:{
        items:4
    },
    767:{
        items:4
    },
    768:{
        items:5
    },
    1000:{
        items:5
    }
}
  }

  addPrdToCart(prd:any):void {
    this.toastr.success( `Thêm sản phẩm thành công !`);
    setTimeout(() => {
      this.cartService.addPrdToCart(prd,1);
    }, 1000);
  }



}
