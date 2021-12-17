import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/admin/services/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  listKeyOrder : Array<any> = ["id","email","name","total","status","date"];
  listValueOrder : Array<any> = [];

  constructor(private prdService :  ProductService) { }

  ngOnInit(): void {
    this.prdService.getAllOrder().subscribe(data => {
      this.listValueOrder = data;
    })
  }

}
