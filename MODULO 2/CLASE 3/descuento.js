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
const cuponesObj = {
    'PlatziOportunidad': 30,
    'mx5445': 25,
    'arg5588': 15
}

function accionBoton(){
    precio = parseInt(precioInput.value)
    cupon = cuponInput.value
    
    if( precioInput.value == "" || cuponInput.value == "" || precio < 0 ){
        pResultado.innerHTML = "No Ingresaste Precio, usaste numeros negativos o no usaste un Cupon valido... intentalo denuevo"
        return
    }

    if(cuponesObj[cupon]){
        descuento = cuponesObj[cupon]

        compra = ((precio * (100 - descuento)) / 100)
        pResultado.innerHTML = "Cupon valido del " + descuento + "% de " + cupon + "<br>" + "El descuento es de: " + (precio - compra) + "$ <br> El monto total a pagar es de: " + compra + "$" 
    }else{
        pResultado.innerHTML = "Cupon no valido"
        return
    }


    console.log(precio, descuento, cupon)
}

function reiniciarPagina(){
    location. reload()
}


// let resultadoDescuento = parseInt(precioInput.value) + parseInt(descuentoInput.value)

// pResultado.innerHTML = "El descuento es de: " + resultadoDescuento + "$"

// let precio = 589
// let descuento = 75

// let compra = ((precio * (100 - descuento)) / 100)

// console.log(precio - compra + "$ Total Descontado")

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
    //     } 
   