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
    

    const lista = arr.sort((numeroAntiguo, nuevoValor) => numeroAntiguo - nuevoValor)

    return lista
}
//Esta funcion revisa cada elemento y cuenta cuantos hay 
//y los mete en un objeto
function calcularModa(arr){
    //creamos la lista de objetos que le vamos a añadir los elementos
    const listaCount = {}

    //ciclo que pasa por cada elemento del array
    for(let i = 0; i < arr.length; i++){
        //convierte a la variable "elemento", en el valor de la posicion del array con la letra "i" que es una variable, devolviendo el valor/elemento
        const elemento = arr[i]

        //aca hacemos la validacion, si el elemento ya existe en el objeto "listaCount", le suma uno, si no existe, lo crea
        if(listaCount[elemento]){
            listaCount[elemento] =  listaCount[elemento] + 1
        }else{
            listaCount[elemento] =  1
        }
        
        console.log(arr[i])
    }

    console.log(listaCount)
}




