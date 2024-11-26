import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { HttpClient } from '@angular/common/http';
import { LoginResponseModel } from '../models/loginResponseModel';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl='http://localhost:60805/api/Auth/';
  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel){
    return this.httpClient.post<LoginResponseModel>(this.apiUrl+"Login",loginModel)

  }

  isAuthenticated(){
    if(localStorage.getItem("token")){return true;}
    else{return false;}
  }
}
