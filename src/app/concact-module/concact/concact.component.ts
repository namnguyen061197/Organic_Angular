import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concact',
  templateUrl: './concact.component.html',
  styleUrls: ['./concact.component.css']
})
export class ConcactComponent implements OnInit {
  public listBread:Array<any> = [
    {
      name:'Home',
      slug:'home'
    },
    {
      name:'Concact',
      slug:'concact'
    }
  ]
  public listItemConcact:Array<any> = [
    {
      id:1,
      name:'ADDRESS',
      img:'localConcact.png',
      content:'238, hoang quoc viet'
    },
    {
      id:2,
      name:'PHONE',
      img:'phoneConcact.png',
      content:'(+84)888 8888'
    },
    {
      id:3,
      name:'EMAIL',
      img:'emailConcact.png',
      content:'BKAptech@gmail.com'
    },
  ]
  lat :number = 21.027763;
  lng :number = 105.834160;
  constructor() { }

  ngOnInit(): void {
  }

}
