"use strict";

const div = document.createElement("div");
document.body.appendChild(div);




const div2 = document.createElement("div");
const p = document.createElement("p");

div2.appendChild(p);
document.body.appendChild(div2);





const div3 = document.createElement("div");

for (let i = 0; i < 6; i++) {
  const p = document.createElement("p");
  div3.appendChild(p);
}
document.body.appendChild(div3);





const pDynamic = document.createElement("p");
pDynamic.textContent = "Soy dinámico!";
document.body.appendChild(pDynamic);





const h2 = document.querySelector("h2.fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";



const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement("ul");

for (const app of apps) {
  const li = document.createElement("li");
  li.textContent = app;
  ul.appendChild(li);
}

document.body.appendChild(ul);








const elementsToRemove = document.querySelectorAll(".fn-remove-me");

for (const element of elementsToRemove) {
  element.remove();
}







const divs = document.querySelectorAll("div");





const middleP = document.createElement("p");
middleP.textContent = "Voy en medio!";





document.body.insertBefore(middleP, divs[1]);






const insertDivs = document.querySelectorAll(".fn-insert-here");

for (const div of insertDivs) {
  const p = document.createElement("p");
  p.textContent = "Voy dentro!";
  div.appendChild(p);
}


