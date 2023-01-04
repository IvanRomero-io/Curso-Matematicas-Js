 function esPar(arr){
    return !(arr.length % 2 )
 }

 function esImPar(arr){
    return arr.length % 2 
 }

 function calcularMediana(arr){
    const listaEsPar = esPar(arr)

    if(listaEsPar){
        console.log('par')
    }
    else{
      const indexMitadListaImpar = Math.round(arr.length / 2) - 1
      const medianaListaImpar = arr[indexMitadListaImpar]
      console.log(indexMitadListaImpar + " <-- posicion del array meitad en la lista")
      console.log(medianaListaImpar + " <-- array el cual es la mitad")
      return medianaListaImpar
      
    }
 }

function buscarElPromedio(arr){
    let promedioDelArr;    

    const sumaLista = arr.reduce((valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor)

    promedioDelArr = sumaLista / arr.length
    
    console.log(promedioDelArr)
}



function esPar(lista){
    return !(lista.length % 2)
}





// function parOinpar(arr){
//     const impares = arr.filter( x => x%2 === 0).length
//     console.log(impares)
//     if(impares > 0){
//         console.log('Pares. Exactamente son ' + impares)
//         return true
//     }else if (impares == 0){
//         console.log('Todos Impares')
//         return false
//     }
// }

//math.floor() redonde al numero mas cercano hacia abajo
//math.ceil() Redondea al numero mas cercano hacia arriba
//math.round() redonde hasta el numero mas cercano, si es 0.5 va hacia 1 si es 0.49 va hacia abajo 