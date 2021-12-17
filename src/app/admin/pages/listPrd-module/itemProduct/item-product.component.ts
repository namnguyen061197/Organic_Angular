import { Component, Input, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/admin/services/product.service';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.css']
})
export class ItemProductComponent implements OnInit {
  @Input() product ?: any;

  constructor(
    private route : Router,
    private prdService :  ProductService,
    private toastr : ToastrService,
    ) { }

  ngOnInit(): void {}

  navigateEditPrd(idPrd : any):void{
    this.route.navigate(['admin/addproduct',idPrd])
  }

  handleDeletePrd(idPrd : any):void{
    this.prdService.deletePrdService(idPrd).subscribe(
      (respon) => {
        this.toastr.success('sản phẩm đã được xóa');
        setTimeout(() => {
          this.prdService.handleChangeListPrd.next([]);
        },1000);
      },
      (error) => {
        this.toastr.error('Errors!')
      }
    )
  }

}
