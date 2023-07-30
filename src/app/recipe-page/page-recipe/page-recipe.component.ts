import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/common/types';
import * as recipe from 'src/assets/recipe.json';

@Component({
  selector: 'app-page-recipe',
  templateUrl: './page-recipe.component.html',
  styleUrls: ['./page-recipe.component.scss'],
})
export class PageRecipeComponent implements OnInit {
  constructor() {}

  recipeData: Recipe = JSON.parse(JSON.stringify(recipe));
  isBoxChecked: boolean = false;
  ingredientsCheckboxStatus: any = [];

  ngOnInit(): void {
    this.recipeData.ingredients.forEach((ingredient) => {
      this.ingredientsCheckboxStatus.push({
        name: ingredient.name,
        isChecked: false,
      });
    });
  }

  getCheckboxValue(event: any) {
    this.isBoxChecked = event.target.checked;
    for (let i = 0; i < this.ingredientsCheckboxStatus.length; i++) {
      if (this.ingredientsCheckboxStatus[i].name === event.target.name) {
        this.ingredientsCheckboxStatus[i].isChecked =
          !this.ingredientsCheckboxStatus[i].isChecked;
      }
    }
  }

  isCheckboxChecked(ingredientName: string): boolean {
    for (let i = 0; i < this.ingredientsCheckboxStatus.length; i++) {
      if (
        this.ingredientsCheckboxStatus[i].name === ingredientName &&
        this.ingredientsCheckboxStatus[i].isChecked
      ) {
        return true;
      }
    }
    return false;
  }
}
