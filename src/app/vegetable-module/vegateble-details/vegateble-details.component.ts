import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-vegateble-details',
  templateUrl: './vegateble-details.component.html',
  styleUrls: ['./vegateble-details.component.css']
})
export class VegatebleDetailsComponent implements OnInit {
  public quanlity:number = 1;
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
  public listPrd2:Array<any> = []
  public listImgExtra:Array<any> = []
  public listStar:Array<any> = Array(5).fill(false);

  imgMainPrd?: any;

  slugPrd?: any;

  productGetByName?: any;

  constructor(
    private route: ActivatedRoute,
    private productService:ProductService,
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.slugPrd = param.get("idVegetable");
      this.listBread[2] = {
        name : this.slugPrd,
        slug : this.slugPrd
      }
    })

    this.productService.getPrdById(this.slugPrd).subscribe(data => {
      console.log(data,this.slugPrd);

      this.productGetByName = data[0];
      this.imgMainPrd = data[0].imgPrd[0];

    })
    this.productService.getListPrd().subscribe(data => this.listPrd2 = data.slice(0,7));
  }

  handleChangeQuanlity(numb:number){
    this.quanlity += numb;
    if(this.quanlity === 0){
      this.quanlity = 1;
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

  customOptions_imgExtra:  OwlOptions = {
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    // autoplay:true,
      navText: [`<i class="fas fa-chevron-left"></i>`,`<i class="fas fa-chevron-right"></i>`],
    autoplayTimeout:3000,
    responsive:{
      0:{
          items:3
      },
      500:{
          items:3
      },
      600:{
          items:3
      },
      767:{
          items:3
      },
      768:{
          items:3
      },
      1000:{
          items:3
      }
  }
  }

  getImgPrdExtra(img : string){
    this.imgMainPrd = img;
  }

  handleRate(idx : number){
    for(var i = 0; i< 5; i++){
      if(i <= idx){
        this.listStar[i] = true
      }else {
        this.listStar[i] = false
      }
    }
  }
}
