import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  public listBread:Array<any> = [
    {
      name:'Home',
      slug:'home'
    },
    {
      name:"FAQ'S",
      slug:'faq'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
