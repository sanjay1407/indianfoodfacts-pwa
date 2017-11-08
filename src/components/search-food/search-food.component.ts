import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Food} from "../../models/food";
import {FoodService} from "../../services/food.service";

@Component({
  selector: 'search-food',
  templateUrl: './search-food.component.html',
  styleUrls: ['./search-food.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchFoodComponent implements OnInit {
  public foods: Food[];
  public searchText: string;

  private pageSize: number;


  constructor(private foodService: FoodService) {
    this.searchText = '';
    this.pageSize = 20;

    foodService.getAllFood(this.pageSize)
      .subscribe(
        foods => this.foods = foods,
        err => {
          console.log(err);
        });

  }

  ngOnInit() {
  }

  search() {
    this.foodService.searchFood(this.searchText, this.pageSize)
      .subscribe(
        foods => this.foods = foods,
        err => {
          console.log(err);
        });

  }
}
