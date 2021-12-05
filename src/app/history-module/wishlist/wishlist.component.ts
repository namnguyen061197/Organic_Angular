import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  public listBread:Array<any> = [
    {
      name:'Home',
      slug:'home'
    },
    {
      name:'Wishlist',
      slug:'wishlist'
    }
  ]
  public listItemCart:Array<any> = [
    {
      id:1,
      name:'qua 1',
      img:'prd5.jpg',
      status:'in Stack',
      price :'65',
      unit :'kg'
    },
    {
      id:2,
      name:'trung ga',
      img:'prd3.jpg',
      status:'in Stack',
      price :'80',
      unit :'qua'
    },
    {
      id:3,
      name:'qua 2',
      img:'prd2.jpg',
      status:'in Stack',
      price :'32',
      unit :'kg'
    },
    {
      id:4,
      name:'qua 7',
      img:'prd7.jpg',
      status:'in Stack',
      price :'90',
      unit :'kg'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
