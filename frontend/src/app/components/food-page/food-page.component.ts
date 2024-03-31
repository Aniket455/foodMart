import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodServiceService } from 'src/app/services/food-service.service';
import { Food } from 'src/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food!:Food;
  constructor(activatedRoute:ActivatedRoute, foodService:FoodServiceService
    ,private cartService:CartService, private router: Router) {
    activatedRoute.params.subscribe((param)=>{
      if(param.id)
      this.food=foodService.getFoodById(param.id);
    });
   }
   addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

  ngOnInit(): void {
  }

}
