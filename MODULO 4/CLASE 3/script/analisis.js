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
     console.log(salarios)
   
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

    return nuevoSalario
   
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
       console.log(porcetajesCrecimiento)
    
       const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcetajesCrecimiento)

       console.log(lisMedianaYears)

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
       console.log(salariosBajos)
       console.log(empresaYears)
    }

       let porcetajesCrecimiento = []

       for(let i = 1; i < salariosBajos.length ;i++){
        const salarioActual = salariosBajos[i]
        const salarioPasado = salariosBajos[i - 1 ]
        const crecimientoSalarial = salarioActual - salarioPasado
        
        const unPorcentajeCrecimiento = crecimientoSalarial / salarioPasado

        porcetajesCrecimiento.push(unPorcentajeCrecimiento)
       }

        console.log(porcetajesCrecimiento)

        const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcetajesCrecimiento)

       console.log(medianaPorcentajesCrecimiento)

       const ultimaMedianaBaja = salariosBajos[salariosBajos.length - 1]
       const aumento = ultimaMedianaBaja * medianaPorcentajesCrecimiento
       const nuevaMediana = ultimaMedianaBaja + aumento
    
    console.log({ultimaMedianaBaja, aumento, nuevaMediana})

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
       console.log(salariosAltos)
       console.log(empresaYears)
    }

    let porcetajesCrecimiento = []

       for(let i = 1; i < salariosAltos.length ;i++){
        const salarioActual = salariosAltos[i]
        const salarioPasado = salariosAltos[i - 1 ]
        const crecimientoSalarial = salarioActual - salarioPasado
        
        const unPorcentajeCrecimiento = crecimientoSalarial / salarioPasado

        porcetajesCrecimiento.push(unPorcentajeCrecimiento)
       }

    console.log(porcetajesCrecimiento)

    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcetajesCrecimiento)

    console.log(medianaPorcentajesCrecimiento)

    const ultimaMedianaAlta = salariosAltos[salariosAltos.length - 1]
    const aumento = ultimaMedianaAlta * medianaPorcentajesCrecimiento
    const nuevaMediana = ultimaMedianaAlta + aumento
    
    console.log({ultimaMedianaAlta, aumento, nuevaMediana})

    return parseFloat(nuevaMediana.toFixed(2))


}















