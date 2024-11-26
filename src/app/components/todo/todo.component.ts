import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/sevices/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  
  todos:Todo[];
  dataLoaded:boolean=false;

 
  constructor(private todoService:TodoService) {
    
    
  }
  
  ngOnInit(): void {
    this.getTodos();
  }


  getTodos(){

    this.todoService.getTodos().subscribe(response=>{

      this.todos =response;
      this.dataLoaded=true;
     
    })
  }

}
