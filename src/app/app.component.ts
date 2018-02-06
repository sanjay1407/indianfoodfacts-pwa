import {Component} from '@angular/core';

import {Food} from "../models/food";
import {FoodService} from "../services/food.service";

import {Recipe} from "../models/recipe";
import {RecipeService} from "../services/recipe.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
  }
}
