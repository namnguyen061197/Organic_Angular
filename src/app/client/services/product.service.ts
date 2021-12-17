import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {BASE_API, BASE_API2} from '../../common/baseAPI'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) {}

  public getListPrd():Observable<any>{
    return this.httpClient.get(BASE_API);
  }

  public getPrdById(namePrd: string):Observable<any>{
    return this.httpClient.get(`${BASE_API}?namePrd=${namePrd}`);
  }

  public sortByField(field : any):Observable<any> {
    let sort = field.split('_')[0];
    let order = field.split('_')[1];
    return this.httpClient.get(`${BASE_API}?_sort=${sort}&_order=${order}`);
  }

  public searchPrd(param : any):Observable<any> {
    return this.httpClient.get(`${BASE_API}?q=${param}`)
  }

  public fillterPrdByPrice(minPrice : number,maxPrice : number):Observable<any>{
    return this.httpClient.get(`${BASE_API}?price_gte=${minPrice}&price_lte=${maxPrice}`);
  }

  public getAllCategory():Observable<any>{
    return this.httpClient.get(BASE_API2);
  }




}
