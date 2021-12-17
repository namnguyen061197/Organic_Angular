import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-col-right-blog',
  templateUrl: './col-right-blog.component.html',
  styleUrls: ['./col-right-blog.component.css']
})
export class ColRightBlogComponent implements OnInit {
  public listRecentPost:Array<any> = [
    {
      id:1,
      img:'blog7.jpg',
      time:'thang 11, 2020',
      quatitlyComment:3,
      name:'cach trong rau trong nha kinh',
    },
    {
      id:2,
      img:'blog4.jpg',
      time:'thang 12, 2021',
      quatitlyComment:7,
      name:'cach cho bo nghe nhac',
    },
    {
      id:3,
      img:'blog10.jpg',
      time:'thang 10, 2020',
      quatitlyComment:5,
      name:'cach nuoi tam lay to nang suat cao',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
