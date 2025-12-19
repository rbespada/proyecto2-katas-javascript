"use strict";







const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const ulCountries = document.createElement("ul");
for (const country of countries) {
  const li = document.createElement("li");
  li.textContent = country;
  ulCountries.appendChild(li);
}
document.body.appendChild(ulCountries);






const toRemove = document.querySelector(".fn-remove-me");
if (toRemove) toRemove.remove();






const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const printHereDiv = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement("ul");

for (const car of cars) {
  const li = document.createElement("li");
  li.textContent = car;
  ulCars.appendChild(li);
}

printHereDiv.appendChild(ulCars);






const countriesWithImages = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];






const cardsContainer = document.createElement("div");
document.body.appendChild(cardsContainer);

function createCountryCard(item) {
  const card = document.createElement("div");

  const h4 = document.createElement("h4");
  h4.textContent = item.title;

  const img = document.createElement("img");
  img.src = item.imgUrl;
  img.alt = item.title;

  



  
  const btnRemoveThis = document.createElement("button");
  btnRemoveThis.textContent = "Eliminar este";
  btnRemoveThis.addEventListener("click", () => {
    card.remove();
  });

  card.appendChild(h4);
  card.appendChild(img);
  card.appendChild(btnRemoveThis);

  return card;
}

for (const item of countriesWithImages) {
  const card = createCountryCard(item);
  cardsContainer.appendChild(card);
}






const btnRemoveLast = document.createElement("button");
btnRemoveLast.textContent = "Eliminar último";
btnRemoveLast.addEventListener("click", () => {
 




  const last = cardsContainer.lastElementChild;
  if (last) last.remove();
});

document.body.appendChild(btnRemoveLast);
