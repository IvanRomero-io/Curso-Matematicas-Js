//AGARRE LOS ELEMENTOS EN EL HTML
const precioInput = document.querySelector('.precio')
const descuentoInput = document.querySelector('.descuento')
const botonCalcular = document.querySelector('.boton-resultado') 
const pResultado = document.querySelector('.p-resultado')
const botonReinicio = document.querySelector('.boton-refrescar')

//LE DI LISTENER A ALGUNOS ELEMENTOS.
botonCalcular.addEventListener('click', accionBoton)
botonReinicio.addEventListener('click', reiniciarPagina)

//DECLARE VARIABLES 
let precio;
let descuento;
let compra;

function accionBoton(){
    precio = parseInt(precioInput.value)
    descuento = parseInt(descuentoInput.value)
    console.log(precio, descuento)

    compra = (precio * (100 - descuento)) / 100

    if( precioInput.value == "" || descuentoInput.value == "" || precio < 0 || descuento < 0 || descuento > 100){
        pResultado.innerHTML = "No Ingresaste numeros, usaste numeros negativos o usaste mas de 100% de descuento... intentalo denuevo"
    } else {
        console.log(compra)
        pResultado.innerHTML = "El descuento es de: " + (precio - compra) + "$ <br> El monto total a pagar es de: " + compra + "$" 
        
        botonCalcular.classList.add('inactive')
        botonReinicio.classList.remove('inactive')
    }
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