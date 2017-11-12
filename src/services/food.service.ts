import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {Food} from "../models/food";

@Injectable()
export class FoodService {

  private foodApi = 'https://indianfoodfacts-api.herokuapp.com';
  private lovedFoods = [];

  constructor(private http: Http) {
  }

  private handleError(error: Response | any) {
    console.error('FoodService::handleError', error);
    return Observable.throw(error);
  }

  public getAllFood(pageSize: number): Observable<Food[]> {
    return this.http
      .get(this.foodApi + '/api/food/rice?limit=' + pageSize)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  public searchFood(searchText: string, pageSize: number): Observable<Food[]> {
    return this.http
      .get(this.foodApi + '/api/food/' + searchText + '?limit=' + pageSize)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  public addFood(food: Food) {
    return this.http
      .post(this.foodApi + '/api/food/', {food: food})
      .map((res) => res.json())
      .catch(this.handleError);
  }

  public reportIncorrect(food: Food) {
    return this.http
      .delete(this.foodApi + '/api/food/' + food._id)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  public markFoodAsLoved(food: Food) {
    this.lovedFoods.push(food._id);
  }

  public markFoodAsNotLoved(food: Food) {
    let index = this.lovedFoods.indexOf(food._id);
    this.lovedFoods.splice(index, 1);
  }

  public getLovedFoods() {
    return this.lovedFoods;
  }
}
