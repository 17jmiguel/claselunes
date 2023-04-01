let listaPlanetas = [
    {
      nombrePlaneta: "Neverland",
      latitud: 20,
      longitud: 30,
      nivelOxigeno: 100,
      volumenAgua: 0
    },
    {
      nombrePlaneta: "Death Word",
      latitud: 50,
      longitud: -30,
      nivelOxigeno: 200,
      volumenAgua: 1000
    },
    {
      nombrePlaneta: "Arturia",
      latitud: -40,
      longitud: 10,
      nivelOxigeno: -50,
      volumenAgua: 500
    },
 
  ];
  

  let totalAgua = listaPlanetas.reduce((acumulador, planeta) => {
    return acumulador + planeta.volumenAgua;
  }, 0);
  
  console.log(`La cantidad total de agua de los 15 planetas es: ${totalAgua}`);
  
  let totalOxigeno = listaPlanetas.reduce((acumulador, planeta) => {
    return acumulador + planeta.nivelOxigeno;
  }, 0);
  
  console.log(`El total de oxigeno de los 15 planetas multiplicado por 100 es: ${totalOxigeno * 100}`);
  
  let planetaOxigenoNegativo = listaPlanetas.find(planeta => planeta.nivelOxigeno < 0);
  
  if (planetaOxigenoNegativo) {
    console.log(`El planeta ${planetaOxigenoNegativo.nombrePlaneta} tiene un nivel de oxígeno negativo`);
    console.log(planetaOxigenoNegativo);
  } else {
    console.log("Ningún planeta tiene un nivel de oxígeno negativo");
  }
  
  let planetaSinAgua = listaPlanetas.find(planeta => planeta.volumenAgua === 0);
  
  if (planetaSinAgua) {
    console.log(`El planeta ${planetaSinAgua.nombrePlaneta} no tiene agua`);
    console.log(planetaSinAgua);
  } else {
    console.log("Todos los planetas tienen agua");
  }
  