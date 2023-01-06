function esPar(arr){
    return !(arr.length % 2 )
 }

 function esImPar(arr){
    return arr.length % 2 
 }

 function calcularMediana(arrayDesordenado){
    const arr = ordenarLista(arrayDesordenado)
    console.log(arr)
    const listaEsPar = esPar(arr)

    if(listaEsPar){
        const posicion1  = arr[arr.length / 2 - 1]
        const posicion2 = arr[arr.length / 2]
        const mitadArray = [posicion1, posicion2]
        console.log(mitadArray)
        buscarElPromedio(mitadArray)
        
      }
    else{ 
      const indexMitadListaImpar = Math.round(arr.length / 2) - 1
      const medianaListaImpar = arr[indexMitadListaImpar]
      console.log(indexMitadListaImpar + " <-- posicion del array mitad en la lista")
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
//El metodo sort nos sirve para ordenar arrays
function ordenarLista(arr){
    // function ordenarListaSort(valorAcumulado, nuevoValor){
    //     if(valorAcumulado < nuevoValor){
    //         return -1
    //     }else if(valorAcumulado == nuevoValor){
    //         return 0
    //     }else if(valorAcumulado > nuevoValor){
    //         return 1
    //     }


    //     //EXPLICACION
    //     //EL metodo sort crea dos parametros uno para agarrar un valor y otro para compararlo, si el mayor o menor se hara un movimiento o si es igual puede quedarse alli.

    //     //Este metodo tiene sierto valores en los returns
    //     //Valor 1 el valor que ingreso hacia adelante
    //     //valor 0 no mueve el valor, los deja alli
    //     //valor -1 mueve el valor que se ingreso hacia atras 

    //     //EJEMPLO
    //     //Valorantiguo - valorNuevo -> resultado
    //     //return 5 - 10 => -5 (El valor nuevo va a la derecha)
    //     //return 5 -  5 => 0 (El valor nuevo se queda al lado)
    //     //return 10 - 5 => 5 (Nuetro nuevo valor se queda y el viejo se mueve a la derecha, intercambiando lugares)

    //     //a persar de todo hay una manera mas corta de hacerlo y es con una arrow funtion y la siguiente operacion (numeroAntiguo - numero de entrada)
    // }

    const lista = arr.sort((numeroAntiguo, nuevoValor) => numeroAntiguo - nuevoValor)

    return lista
}





