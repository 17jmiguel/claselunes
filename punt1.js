function operacionLarga (){
    let x1 = 25
    let x2 = 10
    let y1 = 25
    let y2 = 10

    let restaX = x1-x2
    let resultadoX = restaX * restaX

    let restaY = y1-y2
    let resultadoY = restaY * restaY

    let total = resultadoX+resultadoY

    let raizTotal = Math.sqrt(total);

    console.log(raizTotal)

}
function operacionCorta(){
    let raizTotal = Math.sqrt((25-10)**2 + (25-10)**2);
    console.log(raizTotal)
}

let operacionFlecha = (x1,y1,x2,y2) => Math.sqrt((x1-x2)**2 + (y1-y2)**2);
let calculOperacion = operacionFlecha(25,25,10,10)


operacionLarga();
operacionCorta();
console.log(calculOperacion)