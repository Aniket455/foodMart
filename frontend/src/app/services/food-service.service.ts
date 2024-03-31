import { Injectable } from '@angular/core';
import { sample_foods } from 'src/data';
import { Food } from 'src/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  constructor() { }
  getAll():Food[]{
    return sample_foods;
  }
  getAllFoodBySearch(searchTerm:string){
    return this.getAll().filter(item=>item.name.toLowerCase().includes
    (searchTerm.toLowerCase()));
  }
}
