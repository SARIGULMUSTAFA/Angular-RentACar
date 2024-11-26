import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Model } from '../models/model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  apiUrl='http://localhost:60805/api/';
  constructor(private httpClient:HttpClient) { }
 
   //bütün modeller
  getModels(pageRequest:{pageIndex:number,pageSize:number}):Observable<ListResponseModel<Model>>
  {
    let newPath=this.apiUrl+'Models'
    const params = new HttpParams()
    .set('pageIndex', pageRequest.pageIndex.toString())
    .set('pageSize', pageRequest.pageSize.toString());  
    return this.httpClient.get<ListResponseModel<Model>>(newPath,{params})

   }
   //markasına göre model
   getModelByBrand(brandId:string):Observable<ListResponseModel<Model>>{
     let newPath=this.apiUrl+"Models/GetListModelByBandId?PageIndex=0&PageSize=10&BrandId="+brandId;
    return this.httpClient.get<ListResponseModel<Model>>(newPath);
  }

  add(model:Model):Observable<Model>{

    return this.httpClient.post<Model>(this.apiUrl+"Models",model)
  }

  

}



