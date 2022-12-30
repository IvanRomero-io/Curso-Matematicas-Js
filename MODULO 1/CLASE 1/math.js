console.group('Cuadrado')

const ladoCuadrado = 5
const perimetroCuadrado = ladoCuadrado * 4
const areaCuadrado = ladoCuadrado * ladoCuadrado

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
})

function calcularCuadrado(lado){
    return {
        perimetroCuadrado: lado * 4,
        areaCuadrado: lado * lado  
    }
}

console.groupEnd('Cuadrado')

console.group('Triangulo')

const ladoTrianguloOriente = 6
const ladoTrianguloOccidente = 6
const ladoTrianguloBase = 6
const alturaTriangulo = 5.5

const perimetroTriangulo = ladoTrianguloOriente + ladoTrianguloOccidente + ladoTrianguloBase

const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2   

function calcularTriangulo(ladoDerecho, ladoIzquierdo, base, altura){
    return {
        perimetro: ladoDerecho + ladoIzquierdo + base,
        area: (base * altura) / 2
    }
}

console.log({
    ladoTrianguloOriente,
    ladoTrianguloOccidente,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo
})

console.groupEnd('Triangulo')

console.group('Circulo')

const radioCirculo = 3
const diametroCirculo = radioCirculo * 2
const elPi = Math.PI

const circunferencia = diametroCirculo * elPi
const areaCirculo = (radioCirculo ** 2) * elPi

console.log({
    radioCirculo,
    diametroCirculo,
    elPi,
    circunferencia,
    areaCirculo
})

function calcularCirculo(radio){
    const diametro = radio * 2
    const miPI = Math.PI
    const radioAlCuadrado = Math.pow(radio, 2)
    return {
      circunferencia:  diametro * miPI,
      area: radioAlCuadrado * miPI 
    }
}

console.groupEnd('Circulo')

