import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Recipe } from 'src/app/common/types';

@Component({
  selector: 'app-main-recipe-page',
  templateUrl: './main-recipe-page.component.html',
  styleUrls: ['./main-recipe-page.component.scss'],
})
export class MainRecipePageComponent implements OnInit {
  constructor() {}

  recipesArray: Recipe[] = [];

  ngOnInit(): void {
    try {
      (async () => {
        const response = await axios.get(`http://localhost:3000/`);
        const data = await response.data;
        this.recipesArray = data;
      })();
    } catch (e) {
      `${e} data couldnt be retrieved`;
    }
  }

  test() {
    console.log(`test is successful`);
  }
}
