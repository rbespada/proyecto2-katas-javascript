"use strict";

// Ejercicio 5

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ul = document.querySelector(".album-list");

for (const album of albums) {
  const li = document.createElement("li");
  li.textContent = album;
  ul.appendChild(li);
}
