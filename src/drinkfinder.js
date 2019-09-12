
export class DrinkFinder {
  randomDrink(){
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://www.thecocktaildb.com/api/json/v1/${process.env.API_KEY}/random.php`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
  searchDrink(drinkInput){
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://www.thecocktaildb.com/api/json/v1/${process.env.API_KEY}/search.php?s=${drinkInput}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

}

export class MealFinder {
  randomMeal(){
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://www.themealdb.com/api/json/v1/${process.env.API_KEY}/random.php`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}

export class GifFinder{
  randomGif(){
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIF_KEY}&tag=food, drink&rating=G`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
