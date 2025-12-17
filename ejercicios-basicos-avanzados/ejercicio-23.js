"use strict";

// Ejercicio 23

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

const small = [];
const medium = [];
const large = [];

for (const movie of movies) {
  if (movie.durationInMinutes < 100) small.push(movie);
  else if (movie.durationInMinutes < 200) medium.push(movie);
  else large.push(movie);
}

console.log("Pequeñas:", small);
console.log("Medianas:", medium);
console.log("Grandes:", large);
