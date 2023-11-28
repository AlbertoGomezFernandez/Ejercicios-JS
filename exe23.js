const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];


const longMovies = [];
const standardMovies = [];
const shortMovies = [];

for (const movie of movies) {
  if (movie.durationInMinutes > 200) {
    longMovies.push(movie);
  } else if (movie.durationInMinutes < 100) {
    shortMovies.push(movie);
  } else {
    standardMovies.push(movie);
  }
}

const checkArrayLength = (array) => {
  if (array.length === 0) {
    array.push("There is no movies for this category");
  }
};

checkArrayLength(longMovies);
checkArrayLength(standardMovies);
checkArrayLength(shortMovies);

console.log(longMovies);
console.log(standardMovies);
console.log(shortMovies);