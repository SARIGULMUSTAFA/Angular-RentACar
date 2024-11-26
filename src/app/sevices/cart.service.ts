import { Injectable } from '@angular/core';
import { Model } from '../models/model';
import { CartItems } from '../models/cartItems';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(model:Model){
    let item=CartItems.find(m=>m.model.id==model.id);
    if(item){
      item.quantity+=1;
    }
    else
    {
      let eleman= new  CartItem();
      eleman.model=model;
      eleman.quantity=1;
      CartItems.push(eleman);
    }
  }

  removeToCart(model:Model){
    let item=CartItems.find(m=>m.model.id==model.id);
    CartItems.splice(CartItems.indexOf(item),1);//silinecek elemanın index ini bul ve oradan sil.
    


  }

  list(){
    return CartItems;
  }
}
