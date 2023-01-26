// console.log(salarios)


// Analisis personal para Buscar a alguien
function encontrarPersona(personaEnBusqueda){
    const persona = salarios.find((persona) => {return persona.name == personaEnBusqueda })

    return persona
}

function medianaPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos
    
    //El elemento map
    const salarios = trabajos.map((elemento) => {return elemento.salario})
    // console.log(salarios)
   
     const medianaSalarios = PlatziMath.calcularMediana(salarios)

     return medianaSalarios
    

    //Mi solucion :(     OJO SI FUNCIONA
    // const trabajos = encontrarPersona(nombrePersona).trabajos
    // let salarioArr = []

    // for(let i = 0; i < trabajos.length; i++){
    //     salarioArr.push(trabajos[i].salario)
    // }

    // console.log(trabajos)
    // console.log(salarioArr)
    // console.log(PlatziMath.calcularMediana(salarioArr))
}

function proyeccionPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos

    let porcetajesCrecimiento = []

    for(let i = 1; i < trabajos.length ;i++){
        const salarioActual = trabajos[i].salario
        const salarioPasado = trabajos[i - 1 ].salario
        const crecimientoSalarial = salarioActual - salarioPasado
        
        const unPorcentajeCrecimiento = crecimientoSalarial / salarioPasado
        porcetajesCrecimiento.push(unPorcentajeCrecimiento)
    }
    
    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcetajesCrecimiento)

    console.log({porcetajesCrecimiento, medianaPorcentajesCrecimiento})

    const ultimoSalario = trabajos[trabajos.length - 1].salario
    const aumento = ultimoSalario * medianaPorcentajesCrecimiento
    const nuevoSalario = ultimoSalario + aumento

    return nuevoSalario.toFixed(2)
   
}


// Analisis empresarial
const empresas = {}
for(persona of salarios){
    for(trabajo of persona.trabajos){
        if(!empresas[trabajo.empresa]){
            empresas[trabajo.empresa] = {}
        }

        if(!empresas[trabajo.empresa][trabajo.year]){
             empresas[trabajo.empresa][trabajo.year] = []
         }
         
        // console.group("trabajos")
        // console.log(trabajo)
        // console.groupEnd("trabajos")

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario)
    }
    // console.log(persona)
}

function medianaEmpresaYear(nombre, year){
    if(!empresas[nombre]){
        console.warn("La empresa no existe")
        return
    }else if(!empresas[nombre][year]){
        console.warn("El año de esa empresa no esta en el sistema")
        return
    }else {
        return PlatziMath.calcularMediana(empresas[nombre][year])
    }
} 

function proyeccionPorEmpresa(nombre){
    if(!empresas[nombre]){
        console.warn("La empresa no existe")
        return
    }else{
       const empresaYears =  Object.keys(empresas[nombre])
       const lisMedianaYears = empresaYears.map((year) => {
        return medianaEmpresaYear(nombre, year)
       })

       let porcetajesCrecimiento = []

        for(let i = 1; i < lisMedianaYears.length ;i++){
        const salarioActual = lisMedianaYears[i]
        const salarioPasado = lisMedianaYears[i - 1 ]
        const crecimientoSalarial = salarioActual - salarioPasado
        
        const unPorcentajeCrecimiento = crecimientoSalarial / salarioPasado

        porcetajesCrecimiento.push(unPorcentajeCrecimiento)
       }
    //    console.log(porcetajesCrecimiento)
    
       const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcetajesCrecimiento)

    //    console.log(lisMedianaYears)

       const ultimaMedianaEmpresa = lisMedianaYears[lisMedianaYears.length - 1]
       const aumento = ultimaMedianaEmpresa * medianaPorcentajesCrecimiento
       const nuevaMediana = ultimaMedianaEmpresa + aumento



       return nuevaMediana
    }

}


function proyeccionSalarioMasBajoEmpresa(nombre){
    let salariosBajos = []
    if(!empresas[nombre]){
        console.warn("La empresa no existe")
        return
    }else{
       const empresaYears =  Object.keys(empresas[nombre])
    
       for(let i = 0; i < empresaYears.length ;i++){
        let bajo = PlatziMath.ordenarLista(empresas[nombre][empresaYears[i]])
        
        salariosBajos.push(bajo[0])
       }
    //    console.log(salariosBajos)
    //    console.log(empresaYears)
    }

       let porcetajesCrecimiento = []

       for(let i = 1; i < salariosBajos.length ;i++){
        const salarioActual = salariosBajos[i]
        const salarioPasado = salariosBajos[i - 1 ]
        const crecimientoSalarial = salarioActual - salarioPasado
        
        const unPorcentajeCrecimiento = crecimientoSalarial / salarioPasado

        porcetajesCrecimiento.push(unPorcentajeCrecimiento)
       }

        // console.log(porcetajesCrecimiento)

        const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcetajesCrecimiento)

    //    console.log(medianaPorcentajesCrecimiento)

       const ultimaMedianaBaja = salariosBajos[salariosBajos.length - 1]
       const aumento = ultimaMedianaBaja * medianaPorcentajesCrecimiento
       const nuevaMediana = ultimaMedianaBaja + aumento
    
    // console.log({ultimaMedianaBaja, aumento, nuevaMediana})

    return parseFloat(nuevaMediana.toFixed(2))
    
}


function proyeccionSalarioMasAlto(nombre){
    let salariosAltos = []

    if(!empresas[nombre]){
        console.warn("La empresa no existe")
        return
    }else{
       const empresaYears =  Object.keys(empresas[nombre])
    
       for(let i = 0; i < empresaYears.length ;i++){
        let alto = PlatziMath.ordenarLista(empresas[nombre][empresaYears[i]])
        
        salariosAltos.push(alto[alto.length - 1])
       }
    //    console.log(salariosAltos)
    //    console.log(empresaYears)
    }

    let porcetajesCrecimiento = []

       for(let i = 1; i < salariosAltos.length ;i++){
        const salarioActual = salariosAltos[i]
        const salarioPasado = salariosAltos[i - 1 ]
        const crecimientoSalarial = salarioActual - salarioPasado
        
        const unPorcentajeCrecimiento = crecimientoSalarial / salarioPasado

        porcetajesCrecimiento.push(unPorcentajeCrecimiento)
       }

    // console.log(porcetajesCrecimiento)

    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcetajesCrecimiento)

    // console.log(medianaPorcentajesCrecimiento)

    const ultimaMedianaAlta = salariosAltos[salariosAltos.length - 1]
    const aumento = ultimaMedianaAlta * medianaPorcentajesCrecimiento
    const nuevaMediana = ultimaMedianaAlta + aumento
    
    // console.log({ultimaMedianaAlta, aumento, nuevaMediana})

    return parseFloat(nuevaMediana.toFixed(2))


}


//Analisis General

function mediaGeneral(){
    const nombres = salarios.map(persona => persona.name)
    console.log(nombres)

    const medianaPerHabitante = nombres.map(nombre => medianaPorPersona(nombre))

    const mediaGeneralPublica = PlatziMath.calcularMediana(medianaPerHabitante)

    console.log(medianaPerHabitante)

    return mediaGeneralPublica
}


function medianaTop10PerCent(){
    const nombres = salarios.map(persona => persona.name)
    console.log(nombres)

    const medianaPerHabitante = nombres.map(nombre => medianaPorPersona(nombre) )
    const sueldosOrdenados = PlatziMath.ordenarLista(medianaPerHabitante)

    console.log ({medianaPerHabitante, sueldosOrdenados})

    const numeroIntegrantesDiezPercent = Math.ceil(sueldosOrdenados.length / 10)

    console.log("Integrantes al top10%: " + numeroIntegrantesDiezPercent)

    let topTenPerCentArray = []

    for(let i = 1; i <= numeroIntegrantesDiezPercent ;i++){
        let integranteTopTenPercent = sueldosOrdenados[sueldosOrdenados.length - i]

       topTenPerCentArray.push(integranteTopTenPercent)
    }

    console.log(topTenPerCentArray)

    const medianaTopTenPercent = PlatziMath.calcularMediana(topTenPerCentArray)

    return medianaTopTenPercent
}

///ACA HICE UNA MEDIA TOP PERO INTERACTIVO, SOLAMENTE TIENES QUE PASAR DE PARAMETRO UN NUMERO DEL 1 AL 100/////
function medianaTopExperimentPerCent(porcentaje){
    if(porcentaje > 100 || porcentaje <= 0){
        return console.log("Escala del 1 al 100, un numero mayor obviamente no va a funcionar")
    }
    const nombres = salarios.map(persona => persona.name)
    console.log(nombres)

    const medianaPerHabitante = nombres.map(nombre => medianaPorPersona(nombre) )
    const sueldosOrdenados = PlatziMath.ordenarLista(medianaPerHabitante)

    console.log ({medianaPerHabitante, sueldosOrdenados})

    const numeroIntegrantesDiezPercent = Math.ceil((sueldosOrdenados.length * porcentaje) / 100)

    console.log("Integrantes al top" + porcentaje + "% Ingresos altos: " + numeroIntegrantesDiezPercent)

    let topTenPerCentArray = []

    for(let i = 1; i <= numeroIntegrantesDiezPercent ;i++){
        let integranteTopTenPercent = sueldosOrdenados[sueldosOrdenados.length - i]

       topTenPerCentArray.push(integranteTopTenPercent)
    }

    console.log(topTenPerCentArray)

    const medianaTopInteractivePercent = PlatziMath.calcularMediana(topTenPerCentArray)

    return medianaTopInteractivePercent
}


function medianaTopLowExperimentPerCent(porcentaje){
    if(porcentaje > 100 || porcentaje <= 0){
        return console.log("Escala del 1 al 100, un numero mayor obviamente no va a funcionar")
    }
    const nombres = salarios.map(persona => persona.name)
    console.log(nombres)

    const medianaPerHabitante = nombres.map(nombre => medianaPorPersona(nombre) )
    const sueldosOrdenados = PlatziMath.ordenarLista(medianaPerHabitante)

    console.log ({medianaPerHabitante, sueldosOrdenados})

    const numeroIntegrantesDiezPercent = Math.ceil((sueldosOrdenados.length * porcentaje) / 100)

    console.log("Integrantes al top" + porcentaje + "% Ingresos bajos: " + numeroIntegrantesDiezPercent)

    let topTenPerCentArray = []

    for(let i = 0; i < numeroIntegrantesDiezPercent ;i++){
        let integranteTopTenPercent = sueldosOrdenados[i]

       topTenPerCentArray.push(integranteTopTenPercent)
    }

    console.log(topTenPerCentArray)

    const medianaTopTenPercent = PlatziMath.calcularMediana(topTenPerCentArray)

    return medianaTopTenPercent
}


function encontrarUltimoEmpleo(nombrePersona){
    let buscarUltimoEmpleo = []
    for(persona of salarios){
        if(persona.name == nombrePersona){
            console.log(persona)
            let arrayBuscado = Object.entries(persona.trabajos)
            buscarUltimoEmpleo.push(arrayBuscado)
        }
    }
    let posicionUltimoEmpleo = buscarUltimoEmpleo[0].length - 1
    let ultimoEmpleo =  buscarUltimoEmpleo[0][posicionUltimoEmpleo][1].empresa

    return ultimoEmpleo
    // return buscarUltimoEmpleo[0].trabajos
}







