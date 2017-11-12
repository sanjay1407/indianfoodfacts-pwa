import {Component, Input, OnInit} from '@angular/core';
import {Food} from "../../models/food";
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
  public isMarkedIncorrect: boolean;
  public changeFactor: number;

  @Input()
  public food: Food;

  constructor(private foodService: FoodService) {
  }

  ngOnInit() {
    this.food.fatInGm = Number(this.food.fatInGm.toString().replace('-',''));
    this.food.carbInGm = Number(this.food.carbInGm.toString().replace('-',''));
    this.food.fiberInGm = Number(this.food.fiberInGm.toString().replace('-',''));
    this.food.netCarbsInGm = Number(this.food.netCarbsInGm.toString().replace('-',''));
    this.food.proteinInGm = Number(this.food.proteinInGm.toString().replace('-',''));
    this.food.alcoholInGm = Number(this.food.alcoholInGm.toString().replace('-',''));
    this.food.calories = Number(this.food.calories.toString().replace('-',''));
    this.changeFactor = 1;
    this.isMarkedIncorrect = false;
  }

  onQuantityChange(newQuantity) {
    this.changeFactor = newQuantity / this.food.quantity;
  }

  reportIncorrect() {
    if(!this.isMarkedIncorrect) {
      this.foodService.reportIncorrect(this.food)
        .subscribe(
            res => {
              this.isMarkedIncorrect = true;
              alert('Thanks for your feedback. We will take a look into this food item to remove')
            },
            err => {
              console.log(err);
            });
    }
  }
}
