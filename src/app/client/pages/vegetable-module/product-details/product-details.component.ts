import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/client/services/cart.service';
import { ProductService } from 'src/app/client/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
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
  reviewForm ?: any;

  constructor(
    private route: ActivatedRoute,
    private productService:ProductService,
    private cartService: CartService,
    private toastr : ToastrService,
    private fb : FormBuilder
    ) { }

  ngOnInit(): void {

    this.reviewForm = this.fb.group({
      summary : ["",Validators.required],
      name : ["",[Validators.required,Validators.pattern(/^[a-z]{6,32}$/i)]],
      email : ["",[Validators.required,Validators.pattern(/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}/)]],
    })

    this.route.paramMap.subscribe(param => {
      this.slugPrd = param.get("idVegetable");
      this.listBread[2] = {
        name : this.slugPrd,
        slug : this.slugPrd
      }

      this.productService.getPrdById(this.slugPrd).subscribe(data => {
        this.productGetByName = data[0];
        this.imgMainPrd = data[0].img[0];
      })
      this.productService.getListPrd().subscribe(data => this.listPrd2 = data.slice(0,7));
    })

  }

  onSubmit(form : FormBuilder):void{
    console.log(form);
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

  addPrdToCart(prd: any):void {
    this.toastr.success( `Thêm sản phẩm thành công !`);
    setTimeout(() => {
      this.cartService.addPrdToCart(prd,this.quanlity);
    }, 1000);
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
