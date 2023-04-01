function asignarActividad(padawan) {
  let actividad;
  if (padawan.edad < 15) {
    actividad = "Manejo de la Fuerza";
  } else {
    actividad = "Manejo del Sable de Luz";
  }
  console.log(`${padawan.nombre} de ${padawan.planeta} con edad de ${padawan.edad} años y estatura de ${padawan.estatura}cm, realizará la actividad de ${actividad}`);
}

let carlos = {
  nombre: "Carlitos",
  planeta: "Neverland",
  edad: 14,
  estatura: 165
};
let miguel = {
  nombre: "Miguel",
  planeta: "Medayork",
  edad: 22,
  estatura: 178
};
let richard = {
  nombre: "Richard",
  planeta: "Kamek",
  edad: 30,
  estatura: 152
};

asignarActividad(carlos);
asignarActividad(miguel);
asignarActividad(richard);
