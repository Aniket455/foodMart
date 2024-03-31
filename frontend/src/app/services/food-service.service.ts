import { Injectable } from '@angular/core';
import { sample_foods ,sample_tags} from 'src/data';
import { Food } from 'src/models/Food';
import { Tag } from 'src/models/Tag';

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
  getAllTags():Tag[]{
    return sample_tags
  }
  getAllFoodByTag(tag:string):Food[] {
    return tag=="All"?this.getAll():this.getAll( ).filter( food =>food.tags?.includes( tag ));
  }
  getFoodById(foodId:string):Food{
    return this.getAll().find( item => item.id == foodId)?? new Food();
  }
}
