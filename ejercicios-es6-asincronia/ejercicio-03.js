"use strict";



//Array con los nombres usando map
const users1 = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const names1 = users1.map((user) => user.name);
console.log(names1);

//Nombres, y si empieza por A => "Anacleto"
const users2 = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const names2 = users2.map((user) => {
  if (user.name.startsWith("A")) return "Anacleto";
  return user.name;
});
console.log(names2);

//Añadir " (Visitado)" si isVisited === true
const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const citiesVisited = cities.map((city) => {
  if (city.isVisited) return `${city.name} (Visitado)`;
  return city.name;
});
console.log(citiesVisited);
