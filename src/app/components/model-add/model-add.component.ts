import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ModelService } from 'src/app/sevices/model.service';

@Component({
  selector: 'app-model-add',
  templateUrl: './model-add.component.html',
  styleUrls: ['./model-add.component.css']
})
export class ModelAddComponent implements OnInit {
 modelAddForm:FormGroup;
 
  constructor(private formBuilder:FormBuilder,
              private modelService:ModelService,
              private toastrService:ToastrService) {    
    
  }
  ngOnInit(): void {
    this.createModelAddForm();
  }

  createModelAddForm(){
    this.modelAddForm=this.formBuilder.group({
      brandId:["",Validators.required],
      // brandName:["",Validators.required],
      name:["",Validators.required],
      dailyPrice:["",Validators.required],
      imageUrl:["",Validators.required]     

    }) 

  }

  add(){
    if(this.modelAddForm.valid){
       let modelModel=Object.assign({},this.modelAddForm.value)
       this.modelService.add(modelModel).subscribe(data=>{
        console.log(data);
        this.toastrService.success(data.name +"Eklendi","Başarılı");
       },dataError=>{
        console.log(dataError.error);
        this.toastrService.error(dataError.error,"Hata")
       });
      
    }
    else{
      this.toastrService.error("formunuz eksik","Dikat")
    }
   

   
    
   

  }

}
