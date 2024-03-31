import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodServiceService } from 'src/app/services/food-service.service';
import { Food } from 'src/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(private foodService: FoodServiceService, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params)=>
    {
      if(params.searchTerm)
      this.foods=this.foodService.getAllFoodBySearch(params.searchTerm);
    else if(params.tag)
    this.foods=this.foodService.getAllFoodByTag(params.tag)
      else{
        this.foods=foodService.getAll();
      }
    })
  }

  ngOnInit() {
  }
}