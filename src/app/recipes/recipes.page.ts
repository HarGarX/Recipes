import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes : Recipe [] = [
    { id : 'r1',
    title : 'Schnitzial',
    imgeUrl : 'https://st2.depositphotos.com/1692343/8315/i/950/depositphotos_83154880-stock-photo-homemade-breaded-german-weiner-schnitzel.jpg',
    ingredients : ['French Fries' , 'Pork' , 'Salad ']},
    { 
      id : 'r2' ,
      title : 'Shaworma',
      imgeUrl : 'https://st2.depositphotos.com/3398631/8709/i/950/depositphotos_87097232-stock-photo-courgette-pancakes-served.jpg',
      ingredients : ['Meat','Frensh Fries','Floar']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
