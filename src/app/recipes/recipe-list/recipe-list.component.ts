import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.models';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
  new Recipe('A Test Recipe','This is a real test','https://cdn.dribbble.com/users/2425253/screenshots/15276005/media/96f7e2bd3cc1089bcbf0eb26d74b4a08.jpg?compress=1&resize=768x576&vertical=top'),
  new Recipe('A Test Recipe','This is a real test','https://cdn.dribbble.com/users/2425253/screenshots/15276005/media/96f7e2bd3cc1089bcbf0eb26d74b4a08.jpg?compress=1&resize=768x576&vertical=top')
];

constructor(){}

ngOnInit(): void {
  
}


}
