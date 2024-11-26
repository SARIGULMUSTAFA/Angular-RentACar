import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { Model } from 'src/app/models/model';
import { CartService } from 'src/app/sevices/cart.service';
@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  sepet:CartItem[]=[];
  constructor(private cartService:CartService,private toastrService:ToastrService) {
    

  }
  ngOnInit(): void {
   this.getCart();
   console.log(this.sepet)
   console.log(this.sepet.length)
  }
    
  getCart(){
    this.sepet=this.cartService.list();
   
  }

  removeFromCart(model:Model){

    this.cartService.removeToCart(model)
    this.toastrService.error("Silind",model.name+"Sepetten silindi.")
  }

}
