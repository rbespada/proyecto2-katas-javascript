"use strict";



//Copia de array con spread
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsListCopy = [...pointsList];
console.log(pointsListCopy);

//Copia de objeto con spread
const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyCopy = { ...toy };
console.log(toyCopy);

//Unir arrays con spread
const pointsLis2 = [54, 87, 99, 65, 32];
const mergedPoints = [...pointsList, ...pointsLis2];
console.log(mergedPoints);

//Fusionar objetos con spread
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };
const mergedToy = { ...toy, ...toyUpdate };
console.log(mergedToy);

//Copia del array eliminando la posición 2 (sin mutar el original)
const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];
const colorsWithoutIndex2 = [...colors.slice(0, 2), ...colors.slice(3)];
console.log(colorsWithoutIndex2);
console.log(colors); // comprobación: el original sigue igual
