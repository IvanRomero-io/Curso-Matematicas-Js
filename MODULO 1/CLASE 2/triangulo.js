console.group('Medir Triangulo')

const ladoDerecho = 6
const ladoIzquierdo = 6
const baseTriangulo = 4
const alturaTriangulo = Math.pow(ladoDerecho, 2) - (Math.pow(baseTriangulo, 2) / 4 )

console.log(alturaTriangulo)

function calcularAlturaTriangulo(ladoEste, ladoOeste, base){
    if(ladoEste != ladoOeste || base == ladoEste || base == ladoOeste){
      return console.warn("ptm esto no es un triangulo isoceles, no puedo calcular")
    }
    return{
        altura: Math.sqrt(ladoEste * ladoOeste - (Math.pow(base, 2) / 4))
    }
}

console.groupEnd('Medir Triangulo')

console.group('triangulo escaleno')
// medir triangulos escalenos

const zonaDerecha = 6
const zonaIzquierda = 4
const baseEscaleno = 7

let semiPerimetro = (zonaDerecha + zonaIzquierda + baseEscaleno) / 2

const alturaEscaleno = (2 / baseEscaleno) * Math.sqrt(semiPerimetro * (semiPerimetro - baseEscaleno) * (semiPerimetro - zonaIzquierda) * (semiPerimetro - zonaDerecha))

console.log({
    zonaDerecha,
    zonaIzquierda,
    baseEscaleno,
    semiPerimetro,
    alturaEscaleno
})

function CalcularAlturaEscaleno(ladoDerecho, ladoIzquierdo, base){
    const semiPerimetro = (ladoDerecho + ladoIzquierdo + base) / 2

    return{
        Altura_Escaleno: (2 / base) * Math.sqrt(semiPerimetro * (semiPerimetro - base) * (semiPerimetro - ladoIzquierdo) * (semiPerimetro - ladoDerecho))
    }
}

console.groupEnd('triangulo escaleno')