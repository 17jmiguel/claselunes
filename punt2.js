function obtenerNombresPilotos(codigosAcceso) {
    let lineas = codigosAcceso.split('\n'); 
    let nombres = lineas.map((linea) => linea.split(': ')[1]);
    return nombres;
  }

  let codigosAcceso = 'ARQ2555: Sara Bel-Sun\nARQ2556: Nodin Chavdri\nARQ2557: Finn';
    let nombresPilotos = obtenerNombresPilotos(codigosAcceso);
    console.log(nombresPilotos);
