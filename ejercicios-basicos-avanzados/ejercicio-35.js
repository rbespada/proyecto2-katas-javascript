"use strict";

// Ejercicio 35

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(list, power) {
  const found = [];

  for (const m of list) {
    if (m.power === power) {
      found.push(m.name);
    }
  }

  if (found.length > 0) {
    return `Mutantes encontrados: ${found.join(", ")}`;
  }
  return "No se encontró ningún mutante con ese poder";
}

console.log(findMutantByPower(mutants, "telepathy"));
