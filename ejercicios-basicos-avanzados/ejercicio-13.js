"use strict";

// Ejercicio 13

function nameFinder(nameList, name) {
  for (let i = 0; i < nameList.length; i++) {
    if (nameList[i] === name) {
      return { found: true, position: i };
    }
  }
  return { found: false };
}

const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

console.log(nameFinder(names, 'Natasha'));
