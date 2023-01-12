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





















