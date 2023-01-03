//AGARRE LOS ELEMENTOS EN EL HTML
const precioInput = document.querySelector('.precio')
const cuponInput = document.querySelector('.Cupon')
const botonCalcular = document.querySelector('.boton-resultado') 
const pResultado = document.querySelector('.p-resultado')
const botonReinicio = document.querySelector('.boton-refrescar')
   
//LE DI LISTENER A ALGUNOS ELEMENTOS.
botonCalcular.addEventListener('click', accionBoton)
botonReinicio.addEventListener('click', reiniciarPagina)

//DECLARE VARIABLES 
let precio;
let cupon;
let compra;
let descuento;



const listaDeCupones =[]
listaDeCupones.push({
    serial:'giveMeChance2learn',
    name: 'Platzi Oportunidad',
    descuento: 30
})

listaDeCupones.push({
    serial: 'mx8889',
    name: 'Platzicon Mexico',
    descuento: 15
})

listaDeCupones.push({
    serial: 'arg9991',
    name: 'Platzicon Argentina',
    descuento: 20
})



function accionBoton(){
    precio = parseInt(precioInput.value)
    cupon = cuponInput.value
    
    //esto nos devuelve el mensaje que no hemos ingresado precio o descuento
    if( precioInput.value == "" || cuponInput.value == "" || precio < 0 ){
        pResultado.innerHTML = "No Ingresaste Precio, usaste numeros negativos o no usaste un Cupon valido... intentalo denuevo"
        return
    }

    //aca hacemos una validacion que si el serial del array es igual al nombre del cupon, devuelva el array compreto 
    function buscaCupon(cuponElement){
        return cuponElement.serial == cupon
    }
    //aca es donde inicializamos la duncion de .find()
    let cuponEnElArray = listaDeCupones.find(buscaCupon)

    //si el serial (o lo que sea que buscamos) es igual al cupon (que es el valor que obtuvimos del input), le devuelve el array.

    if(cuponEnElArray){
        descuento = cuponEnElArray.descuento
        compra = (precio * (100 - descuento)) / 100
        pResultado.innerHTML = "Cupon valido del " + descuento + "% de " + cuponEnElArray.name + " <br>" + "El descuento es de: " + (precio - compra) + "$ <br> El monto total a pagar es de: " + compra + "$" 

        botonCalcular.classList.add('inactive')
        botonReinicio.classList.remove('inactive')
        
    }else{
        pResultado.innerHTML = "Cupon no valido"
        console.log(cupon, descuento, cuponEnElArray)
        return
    }
    // arriba vemos si no devuelve el array, manda a else una opcion que diga que el cupon no es valido
    console.group('final')
    console.log(cupon, descuento, cuponEnElArray)
    console.groupEnd('final')
}

function reiniciarPagina(){
    location. reload()
}

 // switch(cupon){
    //     case "mx191515":
    //         descuento = 15
    //         compra = (precio * (100 - descuento)) / 100
            
    
    //         pResultado.innerHTML = "Cupon valido del " + descuento + "% de PlatziAwards <br>" + "El descuento es de: " + (precio - compra) + "$ <br> El monto total a pagar es de: " + compra + "$" 
    
    
    //         botonCalcular.classList.add('inactive')
    //         botonReinicio.classList.remove('inactive')
    //     break;
    //     case "giveMeChance2learn":
    //         descuento = 37
    //         compra = (precio * (100 - descuento)) / 100
            
    
    //         pResultado.innerHTML = "Cupon valido del " + descuento + "% de PlatziOportunities <br>" + "El descuento es de: " + (precio - compra) + "$ <br> El monto total a pagar es de: " + compra + "$" 
    
    
    //         botonCalcular.classList.add('inactive')
    //         botonReinicio.classList.remove('inactive')
    //     break;
    //     default:
    //         pResultado.innerHTML = "Cupon no valido"
    //         return
 
// }else if(cupon == "mx191515"){
//     descuento = 15
//     compra = (precio * (100 - descuento)) / 100
    

//     pResultado.innerHTML = "Cupon valido del " + descuento + "% de PlatziAwards <br>" + "El descuento es de: " + (precio - compra) + "$ <br> El monto total a pagar es de: " + compra + "$" 


//     botonCalcular.classList.add('inactive')
//     botonReinicio.classList.remove('inactive')
// }else if(cupon == "giveMeChance2learn"){
//     descuento = 37
//     compra = (precio * (100 - descuento)) / 100
    

//     pResultado.innerHTML = "Cupon valido del " + descuento + "% de PlatziOportunities <br>" + "El descuento es de: " + (precio - compra) + "$ <br> El monto total a pagar es de: " + compra + "$" 


//     botonCalcular.classList.add('inactive')
//     botonReinicio.classList.remove('inactive')
// }
// else{
//     pResultado.innerHTML = "Cupon no valido"
//     return
// }

// let resultadoDescuento = parseInt(precioInput.value) + parseInt(descuentoInput.value)

// pResultado.innerHTML = "El descuento es de: " + resultadoDescuento + "$"

// let precio = 589
// let descuento = 75

// let compra = ((precio * (100 - descuento)) / 100)

// console.log(precio - compra + "$ Total Descontado")