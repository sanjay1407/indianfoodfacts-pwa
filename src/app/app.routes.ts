import {Routes} from '@angular/router';
import {AddFoodComponent} from "../components/add-food/add-food.component";
import {SearchFoodComponent} from "../components/search-food/search-food.component";

export const appRoutes: Routes = [
  {path: 'addfood', component: AddFoodComponent},
  {path: '', component: SearchFoodComponent}
];
