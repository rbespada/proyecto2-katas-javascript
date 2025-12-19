"use strict";

// 1.1 Botón con clase .showme

console.log(document.querySelector(".showme"));



// 1.2 h1 con id #pillado

console.log(document.querySelector("#pillado"));



// 1.3 Todos los <p>

console.log(document.querySelectorAll("p"));



// 1.4 Todos los elementos con clase .pokemon

console.log(document.querySelectorAll(".pokemon"));



// 1.5 Elementos con atributo data-function="testMe"

console.log(document.querySelectorAll('[data-function="testMe"]'));



// 1.6 Tercer elemento con data-function="testMe"

console.log(document.querySelectorAll('[data-function="testMe"]')[2]);
