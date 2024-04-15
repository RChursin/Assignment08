// Step 1
// let favoriteMovies = ["Iron Man", "Spider Man", "Transformers", "James Bond", "Transporter", "Terminator", "The Matrix"];
// console.log(favoriteMovies[1]);

// Step 2
// let movies = new Array(5);
// movies[0] = "Iron Man";
// movies[1] = "Spider Man";
// movies[2] = "Transformers";
// movies[3] = "James Bond";
// movies[4] = "Transporter";
// movies[5] = "Terminator";
// movies[6] = "The Matrix";
// console.log(movies[0]);

// Step 3
// movies[2] = "Transporter";
// console.log(movies.length);

// Step 4
// let movies = ["Iron Man", "Spider Man", "Transformers", "James Bond", "Transporter", "Terminator", "The Matrix"];
// delete movies[0];
// console.log(movies);

// Step 5
// let movies = ["Iron Man", "Spider Man", "Transformers", "James Bond", "Transporter", "Terminator", "The Matrix"];
// for (let index in movies) {
//   console.log(movies[index]);
// }

// Step 6
// for (let movie of movies) {
//   console.log(movie);
// }

// Step 7
// for (let movie of movies) {
//   console.log(movie);
// }
// console.log(movies.sort());

// Step 8
// let movies = ["Iron Man", "Spider Man", "Transformers", "James Bond", "Transporter", "Terminator", "The Matrix"];
// let leastFavMovies = ["Movie 1", "Movie 2", "Movie 3"];

// console.log("Movies I like:");
// console.log("");
// for (let movie of movies) {
//   console.log(movie);
// }

// console.log("");
// console.log("Movies I regret watching:");
// console.log("");
// for (let movie of leastFavMovies) {
//   console.log(movie);
// }

// Step 9
// let mergedMovies = movies.concat(leastFavMovies);
// console.log(mergedMovies.reverse());

// Step 10
// console.log(mergedMovies[mergedMovies.length - 1]);

// Step 11
// console.log(mergedMovies[0]);

// Step 12
// let dislikedMoviesIndices = leastFavMovies.map(movie => mergedMovies.indexOf(movie));
// console.log(dislikedMoviesIndices);

// dislikedMoviesIndices.forEach(index => {
//   mergedMovies[index] = "Movie I like";
// });
// console.log(mergedMovies);

// Step 13
// let movies = [
//   ["Iron Man", 1],
//   ["Spider Man", 2],
//   ["Transformers", 3],
//   ["James Bond", 4],
//   ["Transporter", 5]
//   ["Terminator", 6],
//   ["The Matrix", 7]
// ];

// let movieNames = movies.filter(movie => typeof movie[0] === "string").map(movie => movie[0]);
// console.log(movieNames);

// Step 14
// let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

// let showEmployee = function(employeeArray) {
//   console.log("Employees:");
//   console.log("");
//   for (let employee of employeeArray) {
//     console.log(employee);
//   }
// };

// showEmployee(employees);

// Step 15
// function filterValues(array) {
//   return array.filter(value => value);
// }

// console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

// Step 16
// function getRandomItem(array) {
//   let randomIndex = Math.floor(Math.random() * array.length);
//   return array[randomIndex];
// }

// let numbersRandom = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(getRandomItem(numbers));

// Step 17
// function getLargestNumber(array) {
//   return Math.max(...array);
// }

// let numbersLargest = [10, 5, 8, 2, 15, 3];
// console.log(getLargestNumber(numbers));