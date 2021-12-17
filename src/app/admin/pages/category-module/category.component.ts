import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import {map } from "rxjs/operators";
import { Observable, of } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { BASE_API2 } from 'src/app/common/baseAPI';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  listCategoryFiled : Array<any> = ["id","name","slug","parent","description"];
  listCategory : any = [];
  addCategoryForm ?: any;
  apiCategory :any = BASE_API2;
  checkBtnEditDisplay : boolean = false;

  constructor(
     private prdService :  ProductService,
     private fb :FormBuilder,
     private toastr : ToastrService,
  ) { }

  ngOnInit(): void {

    this.addCategoryForm = this.fb.group({
      name : ["",[Validators.required],this.validateFromAPI.bind(this)],
      id   : ["",[Validators.required], this.validateFromAPI.bind(this)],
      slug : ["",[Validators.required],this.validateFromAPI.bind(this)],
      parent : ["",],
      description : ["",]
    })


    this.prdService.handleChangeListPrd.subscribe(() => {
      this.prdService.getAllCategory().subscribe(data => {
        this.listCategory = data;
      })
    })

  }

  handleEditCategory(itemRowEdit :any):void {
    this.checkBtnEditDisplay = itemRowEdit !== null ? true : false;

    this.addCategoryForm.patchValue({
      name : itemRowEdit.name,
      id   : itemRowEdit.id,
      slug : itemRowEdit.slug,
      parent : itemRowEdit.parent,
      description : itemRowEdit.description

    })

  }

   getNameFormControlByValue(control: AbstractControl): any | null {
    let group = <FormGroup>control.parent;

    if (!group) {
      return null;
    }
    let name : any;

    Object.keys(group.controls).forEach(key => {

      let childControl = group.get(key);

      if (childControl !== control) {
        return;
      }

      name = key;
    });

    return name;
  }

  validateFromAPI(control: AbstractControl): Observable<ValidationErrors | null> {
    if(this.checkBtnEditDisplay){
      return of(null);
    }
    let filed = this.getNameFormControlByValue(control);
    return this.prdService.getCategoryByFiled(control.value,filed).pipe(
      map(isValid => {

        if (isValid.length === 0) {
          return null;
        }
        return {
          FiledDuplicated: true
        };
      })
    );
  }

  onSubmit(form : any):void{
    if(this.checkBtnEditDisplay){
      this.prdService.editRowTable(form.value.id,BASE_API2,form.value).subscribe(
        (respon)=>{
          this.toastr.success("lưu category thành công !");
          setTimeout(() => {
            this.prdService.handleChangeListPrd.next([]);
            this.addCategoryForm.reset();
            this.checkBtnEditDisplay = false;
          }, 1000);
        },
        (error)=> {
          this.toastr.error("ERROR!");
        }
      )

    }
    else{
      this.prdService.addCategory(form.value).subscribe(
        (respon)=>{
          this.toastr.success('thêm danh mục thành công');
          setTimeout(() => {
            this.prdService.handleChangeListPrd.next([]);
            this.addCategoryForm.reset();
          }, 1000);
        },
        (errors)=>{
          setTimeout(() => {
            this.toastr.error('ERROR!');
          }, 1000);
        }
      )
    }

  }


}
