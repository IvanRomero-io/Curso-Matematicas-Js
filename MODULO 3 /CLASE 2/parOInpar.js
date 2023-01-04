const numeros = [ 80, 60, 40, 20, 100]
//Uso filter (que es un filtro en arreglo) para obtener solo los números que 
// tengan residuo 0.

function parOinpar(arr){
    const impares = arr.filter( x => x%2 === 0).length
    // el operador % muestra el resultado de dividendo cuando es dividio por divisor, en este caso el dividento es el elemento del array que traemos y el divisor podemos pedir que divida la mitad hasta que no se pueda mas, si el residuo es mas que 0, no es un numero par.

    console.log(impares)
    if(impares > 0){
        console.log('Pares. Exactamente son ' + impares)
        return true
    }else if (impares == 0){
        console.log('Todos Impares')
        return false
    }
}