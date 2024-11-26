import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; //sonradan
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ModelComponent } from './components/model/model.component';
import { NaviComponent } from './components/navi/navi.component';
import { TodoComponent } from './components/todo/todo.component';
import { VatAdedPipe } from './pipes/vat-aded.pipe'; import { FilterPipe } from './pipes/filter-pipe';
import { ModeleGorePipe } from './pipes/modele-gore.pipe';

import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ModelAddComponent } from './components/model-add/model-add.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ModelComponent,
    NaviComponent,
    TodoComponent,
    VatAdedPipe,
    FilterPipe,
    ModeleGorePipe,
    CartSummaryComponent,
    ModelAddComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,//sonradan eklendi
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }) //npm install ngx-toastr ve npm install @angular/animations
   
 

  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true //interceptor için
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
