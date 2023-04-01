let edades = [];
for (let i = 0; i < 20; i++) {
  edades.push(Math.floor(Math.random() * 11) + 10);
}

let codigos = [];
for (let i = 0; i < 20; i++) {
  codigos.push(Math.floor(Math.random() * 20) + 1);
}

console.log(`Edades: ${edades}`);
console.log(`Códigos: ${codigos}`);


let max = edades[0];
let count = 1;

for (let i = 1; i < edades.length; i++) {
  if (edades[i] > max) {
    max = edades[i];
    count = 1;
  } else if (edades[i] === max) {
    count++;
  }
}

console.log(`La edad máxima es ${max}`);

if (count > 1) {
  console.log(`La edad máxima se repite ${count} veces`);
}
