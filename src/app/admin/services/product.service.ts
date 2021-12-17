import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, Subject } from 'rxjs';
import {BASE_API, BASE_API2, BASE_API3} from '../../common/baseAPI'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public handleChangeListPrd = new BehaviorSubject([]);
  constructor(private httpClient : HttpClient) { }

  public getListPrd():Observable<any>{
    return this.httpClient.get(BASE_API);
  }

  public  addPrdService(prd : object):Observable<any>{
    return this.httpClient.post(BASE_API,prd);
  }

  public putPrdService(idPrdEdit : any, prdEdit : any):Observable<any> {
    return this.httpClient.put(BASE_API + '/' + idPrdEdit,prdEdit);
  }

  public deletePrdService(idPrd : any):Observable<any> {
    return this.httpClient.delete(BASE_API+'/'+idPrd);
  }

  public getPrdByFiled(param: any,query:string):Observable<any>{
    return this.httpClient.get(`${BASE_API}?${query}=${param}`);
  }

  public addCategory(category : any):Observable<any> {
    return this.httpClient.post(BASE_API2,category)
  }

  public deleteRowTable(id : any,base_api :any):Observable<any> {
    return this.httpClient.delete(base_api+'/'+id);
  }

  public editRowTable(id : any,base_api :any, itemRow : any){
    return this.httpClient.put(base_api + '/' + id,itemRow);
  }

  public getCategoryByFiled(param: any,query:string):Observable<any>{
    return this.httpClient.get(`${BASE_API2}?${query}=${param}`);
  }

  public getAllCategory():Observable<any>{
    return this.httpClient.get(BASE_API2);
  }

  public getAllOrder():Observable<any> {
    return this.httpClient.get(BASE_API3);
  }


}
