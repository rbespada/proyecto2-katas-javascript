"use strict";

// Ejercicio 08

function findLongestWord(stringList) {
  let longestWord = stringList[0];

  for (let i = 1; i < stringList.length; i++) {
    if (stringList[i].length > longestWord.length) {
      longestWord = stringList[i];
    }
  }

  return longestWord;
}

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

console.log(findLongestWord(avengers));
