import { Component, Input, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  bgImg?: string = "../../../assets/imgHomePage/bannerPrd.png"
  @Input() listBread?:Array<any>

  constructor(private router:Router) { }

  ngOnInit(): void {

  }
  navigateRoute(slug : string):void {
    this.router.navigateByUrl(`${slug}`)
  }

}
