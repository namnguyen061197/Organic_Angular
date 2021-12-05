import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {BASE_API} from '../common/baseAPI'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public listPrd ?: Array<any>;

  constructor(private httpClient:HttpClient) {}

  public getListPrd():Observable<any>{
    return this.httpClient.get(BASE_API);
  }

  public getPrdById(namePrd: string):Observable<any>{
    return this.httpClient.get(`${BASE_API}?namePrd=${namePrd}`);
  }

  public sortByField(field : any):Observable<any> {
    console.log(field.value, field.order);

    return this.httpClient.get(`${BASE_API}?sort=${field?.value}&_order=${field.order}`)
  }

}
