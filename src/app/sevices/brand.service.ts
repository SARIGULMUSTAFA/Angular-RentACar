import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl='http://localhost:60805/api/';
  constructor(private httpClinent:HttpClient) { }

  getBrands(pageRequest:{pageIndex:number,pageSize:number}):Observable<ListResponseModel<Brand>>{
    let newPath=this.apiUrl+'Brands'
    
    const params = new HttpParams()
    .set('pageIndex', pageRequest.pageIndex.toString())
    .set('pageSize', pageRequest.pageSize.toString());
    
    return this.httpClinent.get<ListResponseModel<Brand>>(newPath,{params});
  }

 
}
