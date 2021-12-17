import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-concact',
  templateUrl: './concact.component.html',
  styleUrls: ['./concact.component.css']
})
export class ConcactComponent implements OnInit {
  public listBread:Array<any> = [
    {
      name:'Home',
      slug:'home'
    },
    {
      name:'Concact',
      slug:'concact'
    }
  ]
  public listItemConcact:Array<any> = [
    {
      id:1,
      name:'ADDRESS',
      img:'localConcact.png',
      content:'238, hoang quoc viet'
    },
    {
      id:2,
      name:'PHONE',
      img:'phoneConcact.png',
      content:'(+84)888 8888'
    },
    {
      id:3,
      name:'EMAIL',
      img:'emailConcact.png',
      content:'BKAptech@gmail.com'
    },
  ]
  lat :number = 21.027763;
  lng :number = 105.834160;
  concactForm ?: any;
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.concactForm = this.fb.group({
      /* name có độ dài từ 6 đến 32 ký tự không có ký tự số và ký tự đặc biệt */
      name : ["",[Validators.required,Validators.pattern(/^[a-z]{6,32}$/i)]],
      email : ["",[Validators.required,Validators.pattern(/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}/)]],
      phone : ["",[Validators.required,Validators.pattern(/(84|0[3|5|7|8|9])+([0-9]{8})\b/)]],
      comment : ["",[Validators.required]]
    })
  }
  onSubmit(form: any):void {
    console.log(form.value);

  }

}
