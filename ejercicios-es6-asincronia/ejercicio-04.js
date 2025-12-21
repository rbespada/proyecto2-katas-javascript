"use strict";



//Filtrar > 18
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const adults = ages1.filter((age) => age > 18);
console.log(adults);

//Filtrar pares
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const evens = ages2.filter((age) => age % 2 === 0);
console.log(evens);

//Streamers con gameMorePlayed = 'League of Legends'
const streamers1 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const lolStreamers = streamers1.filter(
  (s) => s.gameMorePlayed === "League of Legends"
);
console.log(lolStreamers);

//Streamers cuyo nombre incluye 'u'
const streamers2 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const nameIncludesU = streamers2.filter((s) => s.name.includes("u"));
console.log(nameIncludesU);

//Streamers con 'Legends' en gameMorePlayed + poner gameMorePlayed a MAYÚSCULAS si age > 35
const streamers3 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const legendsStreamers = streamers3
  .filter((s) => s.gameMorePlayed.includes("Legends"))
  .map((s) => {
    if (s.age > 35) {
      return { ...s, gameMorePlayed: s.gameMorePlayed.toUpperCase() };
    }
    return s;
  });

console.log(legendsStreamers);
