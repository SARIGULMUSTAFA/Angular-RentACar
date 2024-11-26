import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/sevices/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
 
  constructor(private formBuilder:FormBuilder,
              private authService:AuthService,
             private toastrService:ToastrService ) {        
    
  }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
 this.loginForm=this.formBuilder.group({
  email:["",Validators.required],
  password:["",Validators.required]
 })
  }

  login(){
    if(this.loginForm.valid){     
      let userLoginForm=Object.assign({},this.loginForm.value);
      this.authService.login(userLoginForm).subscribe(response=>{
      this.toastrService.info("Giriş Başarılı")
      localStorage.setItem("token",response.accessToken.token)
       
      },responseError=>{
        console.log(responseError);
        console.log(responseError.error);
        // this.toastrService.error("Hata",responseError.error)
      })
    }
  }

}
