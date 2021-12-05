import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  public listBread:Array<any> = [
    {
      name:'Home',
      slug:'home'
    },
    {
      name:'Blog',
      slug:'blog'
    }
  ]

  public listBlog:Array<any> = [
    {
      id:1,
      img:'blog1.jpg',
      time:'thang 11, 2020',
      quatitlyComment:3,
      name:'cach trong rau trong nha kinh',
    },
    {
      id:2,
      img:'blog2.jpg',
      time:'thang 12, 2021',
      quatitlyComment:7,
      name:'cach cho bo nghe nhac',
    },
    {
      id:3,
      img:'blog3.jpg',
      time:'thang 10, 2020',
      quatitlyComment:5,
      name:'cach nuoi tam lay to nang suat cao',
    },
    {
      id:4,
      img:'blog4.jpg',
      time:'thang 11, 2021',
      quatitlyComment:45,
      name:'trong lua nuoc nang suat cao ',
    },
    {
      id:5,
      img:'blog5.jpg',
      time:'thang 09, 2020',
      quatitlyComment:34,
      name:'9 cach chon hoa qua sach',
    },
    {
      id:6,
      img:'blog6.jpg',
      time:'thang 11, 2021',
      quatitlyComment:37,
      name:'5 cach co mot cuoc song xanh sach',
    },
    {
      id:7,
      img:'blog7.jpg',
      time:'thang 05, 2020',
      quatitlyComment:24,
      name:'phan loai rach thai dung cach',
    },
    {
      id:8,
      img:'blog10.jpg',
      time:'thang 12, 2020',
      quatitlyComment:87,
      name:'6 cach chon lon giong khoe',
    },
    {
      id:9,
      img:'blog9.jpg',
      time:'thang 02, 2021',
      quatitlyComment:56,
      name:'khong lam dung qua nhieu thuoc tru sau',
    },
  ]

  idxFisrt?: number;
  idxLast?: number;
  limitBlogOnPage = 3;

  constructor() { }

  ngOnInit(): void {
    this.idxFisrt = 0;
    this.idxLast = this.limitBlogOnPage;
  }

  handleSelectPage(idxPage : number):void {
    this.idxFisrt = (idxPage - 1) * this.limitBlogOnPage;
    this.idxLast = this.idxFisrt + this.limitBlogOnPage;
  }

}
