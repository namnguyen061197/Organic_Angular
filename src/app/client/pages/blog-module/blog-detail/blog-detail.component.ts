import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
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
  parmaSlug?: any;
  constructor(private routes :ActivatedRoute ) { }

  ngOnInit(): void {
    this.routes.paramMap.subscribe(slug => {
      this.parmaSlug = slug.get('idblog');
      this.listBread.push(
        {
          name: this.parmaSlug,
          slug: this.parmaSlug
        }
      )
    })
  }

}
