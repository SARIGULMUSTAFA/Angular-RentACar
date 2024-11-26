import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Model } from 'src/app/models/model';
import { CartService } from 'src/app/sevices/cart.service';

import { ModelService } from 'src/app/sevices/model.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
 modeller:Model[]=[];
 dataLoaded:boolean=false;
 pageRequest = { pageIndex: 0, pageSize: 5}; 
 filterText="";
 modelText=""
 
 constructor(private modelService:ModelService,
             private activatedRoute:ActivatedRoute,
             private toastrService:ToastrService,
             private cartService:CartService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getModelByBrand(params["brandId"])
      }
      else{
        this.getModels();

      }
    })
   
  }


  getModels(){

    this.modelService.getModels(this.pageRequest).subscribe(response=>{     
      this.modeller=response.items;
      this.dataLoaded=true;     
    })  
  
   }

   getModelByBrand(brandId:string){

    this.modelService.getModelByBrand(brandId).subscribe(response=>{     
      this.modeller=response.items;
      this.dataLoaded=true;     
    })  
  
   }
   addToCart(model:Model){  
    if(model.id==="1"){
      this.toastrService.error("Hata","bu ürün sepete eklenemez")
    }
   this.toastrService.success("Sepete eklendi",model.name);
   this.cartService.addToCart(model);
  
   }

}
