let venta1 = 45
let venta2 = 60 
let venta3 = 30
let venta4 = 80

let ventaPromedio = (venta1 + venta2 + venta3 + venta4) / 4


let VentasPordia = []
let ventasTotales = 0
let promedioDeVentas = 0

VentasPordia.push({day: "Monday", sales: 15 })
VentasPordia.push({day: "Tuesday", sales: 95 })
VentasPordia.push({day: "Wednesday", sales: 52 })
VentasPordia.push({day: "Thursday", sales: 36 })
VentasPordia.push({day: "Friday", sales: 105 })
VentasPordia.push({day: "Saturday", sales: 82 })
VentasPordia.push({day: "Sunday", sales: 60})

for(i = 0; i <= VentasPordia.length; i++){
    if(i < VentasPordia.length ){
        ventasTotales = ventasTotales + VentasPordia[i].sales
    }else if(i == VentasPordia.length){
        promedioDeVentas = ventasTotales / VentasPordia.length
    }
}


////////////////////////////////////////taller de juan

function buscarElPromedio(arr){

    let totalSuma = 0
    let promedioDelArr;

    for(i = 0; i < arr.length; i++){
        totalSuma = totalSuma + arr[i]
    }
    
    promedioDelArr = totalSuma / arr.length
    
    console.log(promedioDelArr)
    console.log(totalSuma)
}