"use strict";

// Ejercicio 11

function averageWord(list) {
  let total = 0;

  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "number") {
      total = total + list[i];
    } else if (typeof list[i] === "string") {
      total = total + list[i].length;
    }
  }

  return total / list.length;
}

const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

console.log(averageWord(mixedElements));
