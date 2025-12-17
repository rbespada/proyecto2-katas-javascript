"use strict";

// Ejercicio 41

function rollDice(faces) {
  return Math.floor(Math.random() * faces) + 1;
}

console.log(rollDice(6));
