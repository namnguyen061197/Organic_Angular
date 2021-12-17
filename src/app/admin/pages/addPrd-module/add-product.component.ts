import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { ProductService } from '../../services/product.service';
import {map } from "rxjs/operators";
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {

  addProductForm ?: any;
  selectedFiles ?: any;
  listImg ?: any  = [];
  imgMainPrd?: any;
  slug ?: any = '';
  productEdit ?: any;

  constructor(
    private fb : FormBuilder,
    private prdService :  ProductService,
    private toastr : ToastrService,
    private route: ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.addProductForm = this.fb.group({
      namePrd : ["",[Validators.required],this.validateFromAPI.bind(this)],
      description : ["",[Validators.required]],
      id : ["",[Validators.required],this.validateFromAPI.bind(this)],
      price : ["",[Validators.required]],
      rate : ["",[Validators.required,Validators.max(80)]],
      unti : ["",Validators.required],
      status : [null, [Validators.required]],
      img :[[],[Validators.required]],
      category : [null,[Validators.required]],
      subcategory : [null],
    })

    this.slug = this.route.snapshot.paramMap?.get('idPrd');
    if(this.slug?.length > 0){
      this.prdService.getPrdByFiled(this.slug,"id").subscribe(prd => {
        /* gán giá trị cho listimg để hiển thị */
        this.listImg = prd[0]?.img;
        this.imgMainPrd = prd[0]?.img[0];

        /* gán giá trị prd cho form để edit  */
        this.addProductForm.patchValue({
          namePrd : prd[0]?.namePrd,
          description : prd[0]?.description ,
          id : prd[0]?.id,
          price : prd[0]?.price,
          rate : prd[0]?.rate,
          unti : prd[0]?.unti,
          status : prd[0]?.status,
          category : prd[0]?.category,
          img : prd[0]?.img,
          subcategory : null,
        });
      })
    }
  }

  onSubmit(form : any):void {
    form.value.img = this.listImg;
    console.log(form.value);

    if(this.slug?.length > 0){
      this.prdService.putPrdService(this.slug,form.value).subscribe(
        (respon)=> {
          this.toastr.success('Lưu sản phẩm thành công!')
        },
        (error) => {
          this.toastr.error('Errors!')
        }
      )
    }
    else{
      this.prdService.addPrdService(form.value).subscribe(
        (respon)=> {
          this.toastr.success('thêm sản phẩm thành công!')
        },
        (error) => {
          this.toastr.error('Errors!')
        }
      )
    }
  }

  navigateAddPrd():void {
    this.router.navigate(['admin/addproduct']);
  }

  private getNameFormControlByValue(control: AbstractControl): any | null {
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
    let filed = this.getNameFormControlByValue(control);
    if(this.slug?.length > 0){
      return of(null);
    }
    return this.prdService.getPrdByFiled(control.value,filed).pipe(
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

  resetForm():void {
    this.toastr.success('Clear Input Form!')
    this.addProductForm.reset();
  }

  onFileSelected(event:any) {
    this.selectedFiles = event.target.files;
    this.listImg = [];
    for (let i = 0; i < event.target.files; i++) {
      this.selectedFiles.push(event.target.files[i]);
    }
    for(let j = 0 ; j < this.selectedFiles.length ; j++){
      this.listImg.push(this.selectedFiles[j].name);
    }

    this.imgMainPrd = this.listImg[0];
  }

  getImgPrdExtra(img : string){
    this.imgMainPrd = img;
  }

  customOptions_imgExtra: OwlOptions = {
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    autoplay:true,
      navText: [`<i class="fas fa-chevron-left"></i>`,`<i class="fas fa-chevron-right"></i>`],
    autoplayTimeout:2000,
    responsive:{
      0:{
          items:3
      },
      1000:{
          items:3
      }
  }
  }
}
