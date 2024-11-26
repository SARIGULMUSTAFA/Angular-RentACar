import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { ModelComponent } from './components/model/model.component';

import { ModelAddComponent } from './components/model-add/model-add.component';
import { LoginComponent } from './components/login/login.component';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ModelComponent},
  {path:"brand",component:ModelComponent},
  {path:"brand/model/:brandId",component:ModelComponent},
  {path:"models/add",component:ModelAddComponent,canActivate:[loginGuard]},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
