import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Food} from "../../models/food";
import {FoodService} from "../../services/food.service";

@Component({
  selector: 'add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddFoodComponent implements OnInit {

  public food: Food;
  public categories: string[];

  constructor(private foodService: FoodService) {
    this.food = new Food();
    this.categories = [
      'Miscellaneous',
      'Pulses and Legumes',
      'Leafy Vegetables',
      'Other Vegetables',
      'Nuts and Oilseeds',
      'Condiments and Spices',
      'Milk and Milk Products',
      'Fats and Edible Oils',
      'Sugars',
      'Poultry Products',
      'Meat Products',
      'Fishes/Seafood',
      'Bakery Products',
      'Beverages- Alcoholic',
      'Beverages- Non Alcoholic',
      'Cereals',
      'Fruits'
    ]
  }

  ngOnInit() {
  }

  addFood() {
    if(!this.food.isValid()) {
      alert('All fields are mandatory!');
      return;
    }

    this.foodService.addFood(this.food)
      .subscribe(
        () => {
          alert(this.food.name + ' added successfully! Add more items or click Cancel to go back');
          this.food = new Food()},
        err => {
          console.log(err);
        });
  }
}
