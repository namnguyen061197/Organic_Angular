import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/client/services/cart.service';
import { ProductService } from 'src/app/client/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  listPrd = [
    {
      id : 1,
      name: "Home",
      slug:"home",
      child :[
        {
          id:1_1,
          name: "Home 1.1"
        },
        {
          id:1_2,
          name: "Home 1.2"
        },
        {
          id:1_3,
          name: "Home 1.3"
        },
      ]
    },
    {
      id : 2,
      name: "History",
      slug:"wishlist",
      child :[
        {
          id:2_1,
          name: "History 2.1"
        },
        {
          id:2_2,
          name: "History 2.2"
        },
        {
          id:2_3,
          name: "History 2.3"
        },
      ]
    },
    {
      id : 3,
      name: "Vegetables",
      slug:"vegetable",
      child :[
        {
          id:3_1,
          name: "Vegetables 3.1"
        },
        {
          id:3_2,
          name: "Vegetables 3.2"
        },
        {
          id:3_3,
          name: "Vegetables 3.3"
        },
      ]
    },
    {
      id : 4,
      name: "Fruits",
      child :[
        {
          id:4_1,
          name: "Fruits 4.1"
        },
        {
          id:4_2,
          name: "Fruits 4.2"
        },
        {
          id:4_3,
          name: "Fruits 4.3"
        },
      ]
    },
    {
      id : 5,
      name: "Organic Fruits",
      child :[
        {
          id:5_1,
          name: "Organic Fruits 5.1"
        },
        {
          id:5_2,
          name: "Organic Fruits 5.2"
        },
        {
          id:5_3,
          name: "Organic Fruits 5.3"
        },
      ]
    },
    {
      id : 6,
      name: "Sprouts",
      child :[
        {
          id:6_1,
          name: "Sprouts 6.1"
        },
        {
          id:6_2,
          name: "Sprouts 6.2"
        },
        {
          id:6_3,
          name: "Sprouts 6.3"
        },
      ]
    },
    {
      id : 7,
      name: "Custom",
      child :[
        {
          id:7_1,
          name: "Custom 7.1"
        },
        {
          id:7_2,
          name: "Custom 7.2"
        },
        {
          id:7_3,
          name: "Custom 7.3"
        },
      ]
    },
    {
      id : 8,
      name: "Blog",
      slug:"blog",
      child :[
        {
          id:8_1,
          name: "Blog 8.1"
        },
        {
          id:8_2,
          name: "Blog 8.2"
        },
        {
          id:8_3,
          name: "Blog 8.3"
        },
      ]
    },
    {
      id : 9,
      name: "Concact",
      slug:"concact",
      child :[
        {
          id:9_1,
          name: "Concact 9.1"
        },
        {
          id:9_2,
          name: "Concact 9.2"
        },
        {
          id:9_3,
          name: "Concact 9.3"
        },
      ]
    },
  ]
  cart: Array<any> = [];
  navbarfixed: boolean = false;
  totalPricePrdBill?: number ;
  popupSearh : any;
  listItemSearch : Array<any> = [];
  treeCategory : Array<any> = [];
  listProduct : Array<any> = [];

  constructor(
    private _router : Router,
    private toastr : ToastrService,
    private cartService : CartService,
    private productService : ProductService
   ) {}

  ngOnInit(): void {
    this.cartService.updateCart.subscribe(data => {
      this.cart = data;
      this.totalPricePrdBill = this.cartService.subtotalPricePrdBill();
    })

    this.productService.getAllCategory().subscribe(data => {
      console.log(data);
      this.treeMenu(data,0,this.treeCategory);
      console.log(this.treeCategory);
    })

    this.productService.getListPrd().subscribe(data => {
      this.listProduct = data;
      console.log(this.listProduct);

    })
  }

  treeMenu(menus : any, parentID : any, childs : Array<any>){
    menus.forEach((x : any) => {
      if(x.parent === parentID){
        let menu = {
          id : x.id,
          name : x.name,
          slug : x.slug,
          parent : x.parent,
          description : x.description,
          childs : []
        }
        childs.push(menu);
        this.treeMenu(menus,x.id,menu.childs);
      }
    });
  }

  navigateUrl(slug: any):void {
    this._router.navigate([slug])
  }

  sendValuePopupSearh():void {

  }

  changeValue(){
    console.log(this.popupSearh);

    this.productService.searchPrd(this.popupSearh).subscribe(data => {
      this.listItemSearch = data;
      console.log(data);

    })
  }

  deletePrd(idPrd:any):void {
    this.toastr.success( `Xóa sản phẩm thành công !`);
    setTimeout(() => {
      this.cartService.deletePrdOnCart(idPrd);
    }, 1000);
  }

  navigateToDetail(slug : string){
    this._router.navigate(['vegetable',slug]);
  }

  @HostListener('window:scroll', ['$event'])
  scrollFunction() {
    if (window.scrollY > 1000) {
        this.navbarfixed = true;
    } else {
        this.navbarfixed = false;
    }
}



}
