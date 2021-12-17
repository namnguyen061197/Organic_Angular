import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmer-item',
  templateUrl: './farmer-item.component.html',
  styleUrls: ['./farmer-item.component.css']
})
export class FarmerItemComponent implements OnInit {
  @Input() itemFarmer?: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.itemFarmer);
  }

}
