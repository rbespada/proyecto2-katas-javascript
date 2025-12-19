"use strict";


const btn = document.querySelector("#btnToClick");
btn.addEventListener("click", (event) => {
  console.log(event);
});


const inputFocus = document.querySelector(".focus");
inputFocus.addEventListener("focus", (event) => {
  console.log(event.target.value);
});



const inputValue = document.querySelector(".value");
inputValue.addEventListener("input", (event) => {
  console.log(event.target.value);
});
