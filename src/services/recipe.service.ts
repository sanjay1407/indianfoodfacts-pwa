import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {Recipe} from "../models/recipe";

@Injectable()
export class RecipeService {

  private RecipeApi = 'https://indianfoodfacts-api.herokuapp.com';
  private lovedRecipes = [];

  constructor(private http: Http) {
  }

  private handleError(error: Response | any) {
    console.error('RecipeService::handleError', error);
    return Observable.throw(error);
  }

  public addRecipe(formData: FormData, options: RequestOptions) {
      return this.http
      .post(this.RecipeApi + '/api/recipe/', formData, options)
      .map((res) => res.json())
      .catch(this.handleError);
  }
}
