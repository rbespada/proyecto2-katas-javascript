"use strict";

// Ejercicio 14

function repeatCounter(list) {
  const counter = {};

  for (let i = 0; i < list.length; i++) {
    if (counter[list[i]]) {
      counter[list[i]]++;
    } else {
      counter[list[i]] = 1;
    }
  }

  return counter;
}

const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

console.log(repeatCounter(words));
