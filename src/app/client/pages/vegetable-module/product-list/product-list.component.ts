import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Options } from 'ng5-slider';
import { Ng5SliderModule } from 'ng5-slider';
import { PaginationService } from 'src/app/client/services/pagination.service';
import { ProductService } from 'src/app/client/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public listBread:Array<any> = [
    {
      name:'Home',
      slug:'home'
    },
    {
      name:'Vegetable',
      slug:'vegetable'
    }
  ]

  public listPrd = [
    {
      id : 3,
      name: "Vegetables",
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
  ]

  public listPrd1:Array<any> = []

  public listPrdTopSeller:Array<any> = [
    {
      id:1,
      namePrd:'qua tao',
      imgPrd: 'prdSeller02.jpg',
      priceNow: 54.00,
      priceOld: 164.00,
    },
    {
      id:2,
      namePrd:'qua dau',
      imgPrd: 'prdSeller02.jpg',
      priceNow: 40.00,
      priceOld: 190.00,
    },
    {
      id:3,
      namePrd:'qua nho',
      imgPrd: 'prdSeller05.jpg',
      priceNow: 30.00,
      priceOld: 100.00,
    }
  ]

  // lọc giá sản phẩm //
  minValue: number = 50;
  maxValue: number = 10000;
  options: Options = {
    floor: 0,
    ceil: 15000,
  };
  checkSpinner = false;

  // panigation
  numPagePagination?: number ;
  idxFirst?: any;
  idxLast?:number;

  // list option select
  listPrdOnPage = [3,6,9,12];
  numberPerPage = this.listPrdOnPage[0];

  // list sortby field //
  listSortByField = [
    {
      name:'A - Z',
      value:'namePrd_asc',
    },
    {
      name:'Z - A',
      value:'namePrd_desc',
    },
    {
      name:'Price, high to low',
      value:'priceNow_desc',
    },
    {
      name:'Price, low to hight',
      value:'priceNow_asc',
    },
    {
      name:'Rate, high to low',
      value:'rate_desc',
    },
    {
      name:'Rate, low to high',
      value:'rate_asc',
    }
  ]
   sortField = this.listSortByField[0].value;

  checkDisplay = 'table';

  constructor(private productService:ProductService) {
  }

  fillerPrdByPrice():void {
    this.checkSpinner = true;
    this.productService.fillterPrdByPrice(this.minValue,this.maxValue).subscribe(data => {

      setTimeout(() => {
        this.checkSpinner = false;
        this.listPrd1 = data;
        this.numPagePagination = this.listPrd1.length;
      }, 1000);

    })

  }

  ngOnInit( ): void {
    this.handleSelectPage(1);
    this.productService.getListPrd().subscribe(data => {
      this.listPrd1 = data;
      this.numPagePagination = this.listPrd1.length;
    })
  }


  handleSelectPage(idxPage : number):void {
    this.idxFirst = (idxPage - 1)* this.numberPerPage;
    this.idxLast = this.idxFirst + +this.numberPerPage;
  }

  // change display product
  changeDisplay(val : string):void {
    this.checkDisplay = val;
  }

  handleSortPrd():void {
    console.log(this.sortField);

    this.productService.sortByField(this.sortField).subscribe(data => {
      this.listPrd1 = data;
    })

  }

}
