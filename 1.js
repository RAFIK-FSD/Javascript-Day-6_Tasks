// Class - Movie
// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

// -----------------------------------------------------------------------------------------------------------------------------------

class movie {
    constructor (title, studio, rating) {
        this.title = title;
        this.studio = studio;
        // this.rating = rating
        if (rating==null) {
            return this.rating = 'PG';
        }else {
            return this.rating = rating;
        }
    }
       getPG(array) {
             var res = array.filter((element) => element.rating == 'PG');
             return res
    }
}

let movie1 = new movie('Casino royale', 'Eon Productions','PG13')
let movie2 = new movie('jai bhim', '2D Entertainment', 'PG12');
let movie3 = new movie('Doctor', 'KJR Studios');

let movies = [movie1, movie2, movie3];
console.log(movie1.getPG(movies));




























