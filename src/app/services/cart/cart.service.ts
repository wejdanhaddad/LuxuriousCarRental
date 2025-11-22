import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Car } from 'src/app/shared/models/Car';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  
  addToCart(car: Car):void{
    let cartItem = this.cart.items.find(item => item.car.id === car.id);
    if(cartItem){
      this.changeQuantity(car.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(car));
  }

  removeFromCart(carId:number): void{
    this.cart.items = 
    this.cart.items.filter(item => item.car.id != carId);
  }

  changeQuantity(carId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.car.id === carId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}