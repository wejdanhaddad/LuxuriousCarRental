import { Car} from "./Car";

export class CartItem{
    constructor(car:Car){
      this.car = car;  
    }
    car:Car;
    quantity:number = 1;

    get price():number{
        return this.car.prix * this.quantity;
    }
}
