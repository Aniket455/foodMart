import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodServiceService } from 'src/app/services/food-service.service';
import { Food } from 'src/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food!:Food;
  constructor(activatedRoute:ActivatedRoute, foodService:FoodServiceService) {
    activatedRoute.params.subscribe((param)=>{
      if(param.id)
      this.food=foodService.getFoodById(param.id);
    });
   }

  ngOnInit(): void {
  }

}
