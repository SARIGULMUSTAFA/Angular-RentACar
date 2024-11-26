import { Component, OnInit } from '@angular/core';

import { Brand } from 'src/app/models/brand';

import { BrandService } from 'src/app/sevices/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})

export class BrandComponent implements OnInit {    
  brands:Brand[];
  currentBrand:Brand=null;
  
  
  dataLoaded:boolean=false;
  pageRequest = { pageIndex: 0, pageSize: 5};  
  constructor(private brandService:BrandService) { 
      }
  
  ngOnInit(): void {
    console.log("current brand",this.currentBrand);
    this.getBrands();
    
  }

  getBrands(){
    this.brandService.getBrands(this.pageRequest).subscribe(response=>{
    console.log('API Yanıtı:',response); 
    this.brands=response.items  
    this.dataLoaded=true;   
   
    });
  }
  
  setCurrentBrand(brand:Brand){ 
    this.currentBrand=brand; 
  
  }

  getCurrentCategoryClass(brand:Brand)
  {
    if(brand==this.currentBrand){
      return "table-primary"
    }
    else{
       return "table-default"
    }
  }

  getAllCategoryClass(){
    if(this.currentBrand==null){
      return "table-primary"
    }
    else
    {
      return "table-default"
    }
  }
  setDeleteCurrentBrand(){ 
 
   this.currentBrand=null;
   
  }
 
 
}

