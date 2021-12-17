import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myacount',
  templateUrl: './myacount.component.html',
  styleUrls: ['./myacount.component.css']
})
export class MyacountComponent implements OnInit {
  public listBread:Array<any> = [
    {
      name:'Home',
      slug:'home'
    },
    {
      name:'My Acount',
      slug:'myacount'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
