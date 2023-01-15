const PlatziMath = {}

PlatziMath.esPar = function esPar(arr){
    return !(arr.length % 2 )
 }

PlatziMath.esImPar =  function esImPar(arr){
    return arr.length % 2 
 }

PlatziMath.calcularMediana =  function calcularMediana(arrayDesordenado){
    const arr = PlatziMath.ordenarLista(arrayDesordenado)
    // console.group("array ordenado de menor a mayor")
    // console.log(arr)
    // console.groupEnd("array ordenado de menor a mayor")

    const listaEsPar = PlatziMath.esPar(arr)

    if(listaEsPar){
        const posicion1  = arr[arr.length / 2 - 1]
        const posicion2 = arr[arr.length / 2]
        const mitadArray = [posicion1, posicion2]
        // console.group("Medio de los dos elementos mas cercanos al centro en el array")
        // console.log(mitadArray)
        // console.groupEnd("Medio de los dos elementos mas cercanos al centro en el array")
        return PlatziMath.buscarElPromedio(mitadArray)
        

      }
    else{ 
      const indexMitadListaImpar = Math.round(arr.length / 2) - 1
      const medianaListaImpar = arr[indexMitadListaImpar]
     
    
    //   console.group("MedianaMath")
    //   console.log(indexMitadListaImpar + " <-- posicion del array mitad en la lista")
    //   console.log(medianaListaImpar + " es la Media de los elementos en el array")
    //   console.groupEnd("MedianaMath")

      return medianaListaImpar
   
      
    }
 }

PlatziMath.buscarElPromedio =  function buscarElPromedio(arr){
    let promedioDelArr;    

    const sumaLista = arr.reduce((valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor)

    promedioDelArr = sumaLista / arr.length
    
    return promedioDelArr
}
//El metodo sort nos sirve para ordenar arrays
PlatziMath.ordenarLista = function ordenarLista(arr){
    

    const lista = arr.sort((numeroAntiguo, nuevoValor) => numeroAntiguo - nuevoValor)

    return lista
}
//Esta funcion revisa cada elemento y cuenta cuantos hay 
//y los mete en un objeto
PlatziMath.calcularModa = function calcularModa(arr){
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
        
        // console.log(arr[i])
    }

    

    const listaArray = Object.entries(listaCount)
    const listaOrdenada = PlatziMath.ordenarListaBidimencional(listaArray, 1)
    const ListaOrdenadaMaxNumber = listaOrdenada[listaOrdenada.length - 1]
    console.group("Analisis de cual tiene mas repeticiones")
    console.log(listaCount)
    console.groupEnd("Analisis de cual tiene mas repeticiones")

    console.group("Agarrando los resultados y se separan cada uno en un array diferente")
    console.log(listaArray)
    console.groupEnd("Agarrando los resultados y se separan cada uno en un array diferente")

    console.group("ordena la lista de arrays y las devuelve de menor a mayor")
    console.log(listaOrdenada) 
    console.groupEnd("ordena la lista de arrays y las devuelve de menor a mayor")

    console.group("Numero mas repetido")
    console.log(ListaOrdenadaMaxNumber)
    console.groupEnd("Numero mas repetido")

    const moda = "El Elemento que mas se repite (la moda) es " + ListaOrdenadaMaxNumber[0] + ", Llegandose a repetir " + ListaOrdenadaMaxNumber[1] + " veces"
    return moda
}

//Esta funcion ordena los elementos de una lista bidimensional (arrays dentro de otros arrays), y los devulve ordenados, esta lista nos va a servir para los resultados de la moda, ordenando cual se repite mas en mayor hasta el que menos se repite, agarra cada array adentro y lo compara con el elemento que diga cuantas veces se repite
PlatziMath.ordenarListaBidimencional = function ordenarListaBidimencional(arrayDesordenado, i){
    //esta funcion de sort busca el elemento los compara y los ordena, como se puede ver tiene una especie de indentificador de index, esto es para ver la posicion en la que sabesmos que se coloca el elemento (que vendria siendo la segunda posicion del array, que obviamente se expresa [1], y lo compara con el siguiente)
    function ordenarListaSort(valorAcumulado, nuevoValor){
        return valorAcumulado[i] - nuevoValor[i]
    }

    // aca se llamo y se devuelve a una variable y la retorna
    const lista = arrayDesordenado.sort(ordenarListaSort)
    return lista
}
