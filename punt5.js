function SueldoTrabajador (ns){
    let comision = 1500000*ns;
    let total = (3500000 + comision)*0.95;
    console.log("El salario mensual de Miguel es de $"+total)
}

let sueldoTrabajadorFLE = (ns) => (1500000*ns + 3500000)*0.95;
let SV = 3
let imprimirST = sueldoTrabajadorFLE(SV);


SueldoTrabajador(3);
console.log("Funcion flecha: Miguel vendio un total de "+SV+" licencias de sofware, por lo tanto su sueldo este mes es de $"+ imprimirST)