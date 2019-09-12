import { DrinkFinder, MealFinder, GifFinder } from './drinkfinder.js'; //CHANGE TO CURRENT PROJECT/FILE NAMES
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('.drinkButton').click(function(event){
    event.preventDefault();

      let drinkFinder = new DrinkFinder();
      let mealFinder = new MealFinder();
      let gifFinder = new GifFinder();
      let promiseRandomDrink = drinkFinder.randomDrink();
      let promiseRandomMeal = mealFinder.randomMeal();
      let promiseGif = gifFinder.randomGif();


      promiseRandomDrink.then(function(response) {
        const body = JSON.parse(response);
        $('.showDrink').text(`Here's a random drink: ${body.drinks[0].strDrink}!`);
        $('.showDrinkRecipe').text(`Recipe: ${body.drinks[0].strInstructions}`);
        $('#drinkImg').html('<img src = "'+body.drinks[0].strDrinkThumb+'"  ></img>');
        $('.card').show();
      }),promiseRandomMeal.then(function(response) {
        const body = JSON.parse(response);
        $('.showMeal').text(`Here's a random meal: ${body.meals[0].strMeal}!`);
        $('.showMealRecipe').text(`Recipe: ${body.meals[0].strInstructions}`);
        $('#mealImg').html('<img src = "'+body.meals[0].strMealThumb+'"  ></img>');
        $('.card').show();
      }),promiseGif.then(function(response) {
        const body = JSON.parse(response);
        $('#gifImg').html('<img src = "'+body.data.images.original.url+'"  ></img>');
        $('.card').show();
      }),
      function(error) {
        $('.showErrors').append(`There was an error processing your request: ${error.message}`);
      };
    });

});
