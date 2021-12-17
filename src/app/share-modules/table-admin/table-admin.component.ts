import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/admin/services/product.service';

@Component({
  selector: 'app-table-admin',
  templateUrl: './table-admin.component.html',
  styleUrls: ['./table-admin.component.css']
})
export class TableAdminComponent implements OnInit {

  @Input() listKey ?: Array<any> ;
  @Input() listValue ?: Array<any>;
  @Input() base_api ?: any;
  @Output() itemRow = new EventEmitter<any>() ;

  constructor(
    private productService : ProductService,
    private toastr : ToastrService,
  ) { }

  ngOnInit(): void {
  }

  handleDeleteItem(item : any):void {
    this.productService.deleteRowTable(item.id,this.base_api).subscribe(
      (respon) => {
        this.toastr.success('xóa thành công !');
        setTimeout(() => {
          this.productService.handleChangeListPrd.next([]);
        }, 1000);
      },
      (errors)=>{
        this.toastr.error('ERROR !');
      }
    )
  }

  handleEditItem(item : any):void {
    this.itemRow.emit(item);
  }

}
