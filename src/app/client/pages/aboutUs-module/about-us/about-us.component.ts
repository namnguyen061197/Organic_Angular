import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  public listBread:Array<any> = [
    {
      name:'Home',
      slug:'home'
    },
    {
      name:'About Us',
      slug:'aboutus'
    }
  ]
  public listaward:Array<any> = [
    {
      id:1,
      title:"HAND PLANTED",
      numAward:"01",
      content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam repudiandae suscipit incidunt error accusamus facilis sequi iste debitis doloremque quidem.",
    },
    {
      id:2,
      title:"WELL WATERED",
      numAward:"02",
      content:"is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum ",
    },
    {
      id:3,
      title:"NATURAL SUNLIGHT",
      numAward:"03",
      content:"Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justotuio, rhoncus ut loret, imperdiet a, venenatis",
    },
    {
      id:4,
      title:"PERFECT",
      numAward:"04",
      content:"Aenean massa. Cumtipsu sociis natoque penatibus et magnis dis parturient montesti, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eutu,",
    },
  ]
  public listInForFarmer:Array<any> = [
    {
      id:1,
      name:"PAUL MNAKEN",
      img:"farmer01.jpg",
      position :"Farm manager"
    },
    {
      id:2,
      name:"JULIE POTTER",
      img:"farmer3.jpg",
      position :"Milk Farmer"
    },
    {
      id:3,
      name:"BARRY RIGHT",
      img:"farmer02.jpg",
      position :"Farm manager"
    }
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
  indexMidleListAward = Math.floor(this.listaward.length / 2);
  constructor() { }

  ngOnInit(): void {
  }

  customOptionsFarmer: OwlOptions = {
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    // autoplay:true,
      navText: [`<i class="fas fa-chevron-left"></i>`,`<i class="fas fa-chevron-right"></i>`],
    autoplayTimeout:3000,
    responsive:{
      0:{
          items:1
      },
      360:{
        items:2
      },
      500:{
          items:2
      },
      540:{
        items:3
      },
      650:{
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

}
