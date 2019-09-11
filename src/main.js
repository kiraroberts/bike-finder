import { DrinkFinder, MealFinder } from './drinkfinder.js'; //CHANGE TO CURRENT PROJECT/FILE NAMES
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('.drinkButton').click(function(event){
    event.preventDefault();

      let drinkFinder = new DrinkFinder();
      let mealFinder = new MealFinder
      let promiseRandomDrink = drinkFinder.randomDrink();
      let promiseRandomMeal = mealFinder.randomMeal();


      promiseRandomDrink.then(function(response) {
        const body = JSON.parse(response);
        console.log(body)
        $('.showDrink').text(`Here's a random drink: ${body.drinks[0].strDrink}!`);
        $('.showDrinkRecipe').text(`Recipe: ${body.drinks[0].strInstructions}`);
        document.getElementById("drinkImg").innerHTML = '<img src = "'+body.drinks[0].strDrinkThumb+'"  ></img>';

      }),promiseRandomMeal.then(function(response) {
        const body = JSON.parse(response);
        console.log(body)
        $('.showMeal').text(`Here's a random meal: ${body.meals[0].strMeal}!`);
        $('.showMealRecipe').text(`Recipe: ${body.meals[0].strInstructions}`);
        document.getElementById("mealImg").innerHTML = '<img src = "'+body.meals[0].strMealThumb+'"  ></img>';
      }),function(error) {
        $('.showErrors').append(`There was an error processing your request: ${error.message}`);
      };





    });

});
