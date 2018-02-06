import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import {Recipe} from "../../models/recipe";
import {RecipeService} from "../../services/recipe.service";
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
  encapsulation: ViewEncapsulation.None
})

       

export class AddRecipeComponent implements OnInit {

  public recipe: Recipe;
  public categories: string[];
  @ViewChild('file') file: ElementRef;
 

  constructor(private recipeService: RecipeService) {
    this.recipe = new Recipe();
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
  
  
  


  addRecipe() {
    console.log(this.recipe);
           
    console.log(this.file);
    let fi = this.file.nativeElement;
    //if (fi.files && fi.files[0]) {
        let fileToUpload = fi.files[0];

        let formData = new FormData();
        formData.append('file', fileToUpload);
        formData.append('recipe',JSON.stringify(this.recipe));

        let headers = new Headers();
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        
    //}
    //console.log(fileToUpload);
    if(!this.recipe.isValid()) {
      alert('All fields are mandatory!');
      return;
    }

    this.recipeService.addRecipe(formData, options)
      .subscribe(
        () => {
          alert(this.recipe.name + ' added successfully! Add more items or click Cancel to go back');
          this.recipe = new Recipe()},
        err => {
          console.log(err);
        });
  }
}
