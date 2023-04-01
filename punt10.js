let listaAlimentos = [
    {
      nombre: "Lechuga",
      tipo: "vegetal",
      nivelEnergia: 150,
    },
    {
      nombre: "Carne",
      tipo: "animal",
      nivelEnergia: 400,
    },
    {
      nombre: "Zanahoria",
      tipo: "vegetal",
      nivelEnergia: 250,
    },
    {
      nombre: "Bocadillo",
      tipo: "postre",
      nivelEnergia: 100,
    },
  ];
  
  function obtenerAlimentosVegetales() {
    setTimeout(() => {
      let alimentosVegetales = listaAlimentos.filter(
        (alimento) => alimento.tipo === "vegetal" && alimento.nivelEnergia > 200
      );
      console.log("Alimentos vegetales con más de 200 unidades de energía:");
      console.log(alimentosVegetales);
  
      let sumatoriaEnergiaVegetal = alimentosVegetales.reduce(
        (acumulador, alimento) => acumulador + alimento.nivelEnergia,
        0
      );
      console.log(`Sumatoria de niveles de energía entregados por los alimentos vegetales: ${sumatoriaEnergiaVegetal}`);
    }, 5000);
  }
  
  obtenerAlimentosVegetales();
  