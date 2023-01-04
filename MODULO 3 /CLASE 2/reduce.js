
function buscarElPromedio(arr){
    //declaramos la variable que va a dividir el promedio
    let promedioDelArr;    

    //aca con la funcion de reduce creada, crea un valor con e primer parametro de la funcion para que se añada el valor de cada array y el segundo parametro se dedica a traerles los montos y sumarlos al primer parametro
    // function sumarTodosElementos(valorAcumulado, nuevoValor){
    //     return valorAcumulado + nuevoValor
    // }

    // aca creamos la funcion reduce para el array 
    const sumaLista = arr.reduce((valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor)
    //aca podemos ver que le hice una "arrow funcion" y ahora la funcion se ejecuta en la misma linea dandole una parametro que se convierte en una especie de variable que se va sumando cada entrada para hacer la operacion y otro parametro que es la que se los trae.
    
    //aca ya tenemos los valores de la suma del array y se va a dividir por la cantidad de productos en e auro
    promedioDelArr = sumaLista / arr.length
    
    console.log(promedioDelArr)
}

// let totalSuma = 0
// for(i = 0; i < arr.length; i++){
    //     totalSuma = totalSuma + arr[i]
    // }




    //En resumen el metodo reduce agarra dos parametros, uno para hacer como una especie de "pote" vulgarmente dicho, para almacenar valores y otro que se los trae. 