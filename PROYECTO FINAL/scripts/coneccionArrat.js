const divListaNombres = document.querySelector(".opciones")
const divListaEmpresas = document.querySelector(".opcionesEmpresas")

let nombresPersonas = []

function renderElegirPersona(array){
    
    
    for(product of array){
        const createOptionList = document.createElement("option")
        // console.log(product.name)
        createOptionList.value = product.name
        // console.log(createOptionList)
        // const productDescription = document.createElement('p')
        // productDescription.innerHTML = product.name
        // divListaNombres.appendChild(productDescription)
        divListaNombres.appendChild(createOptionList)

       nombresPersonas.push(product.name)
   } 

}

let empresasNombres = []

function renderElegirEmpresa(arr){

    let array = Object.keys(arr)

    for(nombreEmpresa of array){
        // console.log(nombreEmpresa)
        const createOptionList = document.createElement("option")
        createOptionList.value = nombreEmpresa
        divListaEmpresas.appendChild(createOptionList)

        empresasNombres.push(nombreEmpresa)
    }

}



renderElegirPersona(salarios)
renderElegirEmpresa(empresas)


////Div Nombre selecto////
//personas
const nombreBoton = document.querySelector(".nameButton")
const companiesBoton = document.querySelector(".nameButtonCompanies")
const barInput = document.querySelector(".inputNombresPersonas")
const barInputEmpresas = document.querySelector(".inputNombresEmpresas")
const pElementPersonaSel = document.querySelector(".personaSelectaP")
const pElementEmpresaSel = document.querySelector(".EmpresaSelectaP")
const pElementLastSalary = document.querySelector(".ultimoEmpleoP")
const pElementCompaniesPerYear = document.querySelector(".empresas-por-año")
const pElementSalariosPerYear = document.querySelector(".salarios-por-año")
const pElementMedianaAños = document.querySelector(".mediana-por-años")
const pElementProyection = document.querySelector(".proyeccion")
const pElementDifSalarios = document.querySelector(".dif-salarios")
//Empresas
const pElementEmpresasSalariosAños = document.querySelector(".salariosPerYear")
const pElementMedianaEmpresa = document.querySelector(".medianaEmpresa")
const pElementProyeccionEmpresa = document.querySelector(".proyectionEmpresa")
const pElementProyecSalarioBajo = document.querySelector(".proyeccion-salarios-mas-bajo")
const pElementProyecSalarioAlto = document.querySelector(".proyeccion-salarios-mas-altos")
const pElementDiffProyecSueldos = document.querySelector(".diffProyecciones")
//ciudades
const citiesButon = document.querySelector(".buttoncalcularPerCent")
const inputLowTop = document.querySelector(".input-porcentaje-bajo")
const inputHighTop = document.querySelector(".input-porcentaje-alto")
const pElementMediaGeneral = document.querySelector(".media-General-P")
const pElementMediaTopLow = document.querySelector(".media-top-bajo")
const pElementIntegrantesTopLow = document.querySelector(".cantidad-de-integrantes-top-bajo")
const pElementMediaTopHigh = document.querySelector(".media-top-alto")
const pElementIntegrantesTopHigh = document.querySelector(".cantidad-de-integrantes-top-alto")
const pElementBrechaSalCiudad = document.querySelector(".brecha")
const pElementDiffProporcionSalCiudad = document.querySelector(".diferencia-en-proporcion")
//Analisis industria
const pElementRankingMediasEmoresas = document.querySelector(".p-ranking")

//botones
nombreBoton.addEventListener("click", barNameInteractions)
companiesBoton.addEventListener("click", barCompaniesInteractions)
citiesButon.addEventListener("click", barsPercentageInteractions)



//////////Funciones de la barra Personas/////////

function barNameInteractions(){
    let nombreIncorrecto = "Esta persona no esta en el sistema o ingresa un nombre correcto"
    if(!barInput.value){
        console.log("Por favor introduce un nombre")
    }else if(barInput){
        for(buscarNombre of nombresPersonas){
            if(buscarNombre == barInput.value){
                selectedPerson(buscarNombre)
               return console.log(buscarNombre)
            }
        }
    }
    selectedPerson(nombreIncorrecto)
    return console.log(nombreIncorrecto)


}

function selectedPerson(persona){
    if(persona == "Esta persona no esta en el sistema o ingresa un nombre correcto"){ 
        console.log(persona)

      return  pElementPersonaSel.innerHTML = persona  
    }else{
        console.log(persona)

        pElementPersonaSel.innerHTML = persona
        pElementLastSalary.innerHTML = "Ultimo lugar de trabajo: " + encontrarUltimoEmpleo(persona)

        trabajosPorAño(persona)
        salariosPorAño(persona)
        pElementMedianaAños.innerHTML = "Mediana de salarios: " + medianaPorPersona(persona)
        pElementProyection.innerHTML = "Proyeccion de salario para el siguiente año: " +  proyeccionPorPersona(persona)
        primerVSultimoSalario(persona)
    }

    
}

function trabajosPorAño(name){

    let companiesPerYear = []

    for(product of salarios){
        if(product.name == name){
            for(let i = 0; i < product.trabajos.length ;i++){

                let elementYearCompany = product.trabajos[i].year + ": " + product.trabajos[i].empresa

                companiesPerYear.push(elementYearCompany)

                console.log(product.trabajos[i].year, product.trabajos[i].empresa)
            }
          
        }else{
          
        }
        
    }

    console.log(companiesPerYear)
   
    let trabajosYaños = " "

    for(let i = 0; i <= companiesPerYear.length ; i++){
        console.log(companiesPerYear[i])

        if(i < (companiesPerYear.length - 1)){
            trabajosYaños = trabajosYaños + companiesPerYear[i] + ".<br> "
        }
        else if(i == (companiesPerYear.length - 1)){
            trabajosYaños = trabajosYaños + companiesPerYear[i] + ". "
        }
    }


    console.log(trabajosYaños)

    pElementCompaniesPerYear.innerHTML = "Empleos por Año: <br> <br> " + trabajosYaños
}

function salariosPorAño(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos
    
    //El elemento map
    const salarios = trabajos.map((elemento) => {return elemento.salario})
    const años = trabajos.map((elemento) => {return elemento.year})


    console.log(salarios)
    console.log(años)

    let salariosPorAño = []

    for(let i = 0; i < trabajos.length ; i++){
        let elementYearCompany = años[i] + ": " + salarios[i]

        salariosPorAño.push(elementYearCompany)
    }
    
    console.log(salariosPorAño)

    let salariosYaños = " "

    for(let i = 0; i <= salariosPorAño.length ; i++){
        console.log(salariosPorAño[i])

        if(i < (salariosPorAño.length - 1)){
            salariosYaños = salariosYaños + salariosPorAño[i] + ".<br>"
        }
        else if(i == (salariosPorAño.length - 1)){
            salariosYaños = salariosYaños + salariosPorAño[i] + ". "
        }
    }

    console.log(salariosYaños)

    pElementSalariosPerYear.innerHTML = "Salarios por cada año: <br> <br>" + salariosYaños
}

function primerVSultimoSalario(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos
    
    //El elemento map
    const salarios = trabajos.map((elemento) => {return elemento.salario})

    const primerSalario = salarios[0]
    const ultimoSalario = salarios[salarios.length - 1]

    console.log({salarios, primerSalario, ultimoSalario})

    const difSalarios = ultimoSalario - primerSalario

    pElementDifSalarios.innerHTML = "Diferencia del Primer salario al Ultimo: " + difSalarios
}



/////Funciones de la barra Empresas /////

function barCompaniesInteractions(){


    let nombreIncorrecto = "Esta Empresa no esta en el sistema o ingresa un nombre correcto"
    
     if(!barInputEmpresas.value){
         console.log("Por favor introduce un nombre")
     }else if(barInputEmpresas){
       for(buscarEmpresa of empresasNombres){
             if(buscarEmpresa == barInputEmpresas.value){
                 selectedCompany(buscarEmpresa)
                return console.log(buscarEmpresa)
             }
         }
     }
    selectedCompany(nombreIncorrecto)
}

function selectedCompany(company){
    if(company == "Esta Empresa no esta en el sistema o ingresa un nombre correcto"){ 
       console.log(company) 
       return pElementEmpresaSel.innerHTML = company  
    } else{
    //  console.log(company)
       pElementEmpresaSel.innerHTML = company
       
       pElementEmpresasSalariosAños.innerHTML = "Salarios por año: <br>" + empresaSalariosPorAño(company)
       pElementMedianaEmpresa.innerHTML = "Mediana de Sueldos en la empresa: <br>" + medianaDeCadaAño(company)
       pElementProyeccionEmpresa.innerHTML = "Proyeccion de la empresa: " + proyeccionPorEmpresa(company).toFixed(2)
       pElementProyecSalarioBajo.innerHTML = "Proyeccion salario mas bajo proximo Año: " + proyeccionSalarioMasBajoEmpresa(company)
       pElementProyecSalarioAlto.innerHTML = "Proyeccion salario mas alto proximo Año: " + proyeccionSalarioMasAlto(company)
       pElementDiffProyecSueldos.innerHTML = "Brecha salarial, salario alto vs salario bajo: " + ( proyeccionSalarioMasBajoEmpresa(company) - proyeccionSalarioMasAlto(company)).toFixed(2)
     }

    
}

function empresaSalariosPorAño(nombreEmpresa){

    let temp = Object.entries(empresas[nombreEmpresa])

    let salariosDeEmpresaPorAños = ""

    for(añoEmpresa of temp){
        for(let i = 0; i  < añoEmpresa.length ; i ++ ){
            if(i == 0){
                // console.log(añoEmpresa[i])
                salariosDeEmpresaPorAños = salariosDeEmpresaPorAños + añoEmpresa[i] + ": "
            }
            else if(i == 1){
                // console.log(añoEmpresa[i])
                salariosDeEmpresaPorAños = salariosDeEmpresaPorAños + añoEmpresa[i] + "<br>"
            }
        }
    }
    // console.log(salariosDeEmpresaPorAños)
    return salariosDeEmpresaPorAños
}

function medianaDeCadaAño(nombreEmpresa){
    const arrayTemporalAños = Object.entries(empresas[nombreEmpresa])

    // console.log(arrayTemporalAños)
    // console.log(arrayTemporalAños[0])
    // console.log(arrayTemporalAños[0][0])

    const años = arrayTemporalAños.map((añoEnBusqueda) => {return añoEnBusqueda[0]})

    // console.log(años)

    let MedianasPorAños = ""

    for(let i = 0 ;i < años.length; i++ ){
        MedianasPorAños = MedianasPorAños + años[i] + ": "  + medianaEmpresaYear(nombreEmpresa, años[i]) + "<br> "
        
    }
    // console.log(MedianasPorAños)
    return MedianasPorAños
}

///////// Funciones de las ciudades /////////
function barsPercentageInteractions(){
    
    if(!inputLowTop.value || !inputHighTop.value){
       return pElementMediaGeneral.innerHTML = "Por favor introduce los porcentajes"
    }else if(inputLowTop.value > 100 || inputHighTop.value > 100 ){
        let moreThan100orlessThan0 = "La escala es del 1 al 100, un numero mayor obviamente no va a funcionar"
       return pElementMediaGeneral.innerHTML = moreThan100orlessThan0
    }else if(inputLowTop.value <= 0 || inputHighTop.value <= 0 ){
        let moreThan100orlessThan0 = "La escala es del 1 al 100, un numero menor obviamente no va a funcionar"
        return pElementMediaGeneral.innerHTML = moreThan100orlessThan0
    }

    selectedPercentage(inputLowTop.value, inputHighTop.value)
}

function selectedPercentage(lowTop, highTop){
    pElementMediaGeneral.innerHTML = "Media general de salario en la ciudad: " + mediaGeneral().toFixed(2)

    pElementMediaTopLow.innerHTML = "Media de salarios del Top" + lowTop + "% con menos ingresos: " + medianaTopLowExperimentPerCent(lowTop).toFixed(2)
    pElementIntegrantesTopLow.innerHTML = "Cantidad de integrantes del Top" + lowTop + "% con menos ingresos: " + medirIntegrantes(lowTop) + " Personas"


    pElementMediaTopHigh.innerHTML = "Media de salarios del Top" + highTop + "% con mas ingresos: " + medianaTopExperimentPerCent(highTop).toFixed(2)
    pElementIntegrantesTopHigh.innerHTML = "Cantidad de integrantes del Top" + highTop + "% con mas ingresos: " + medirIntegrantes(highTop) + " Personas"

    pElementBrechaSalCiudad.innerHTML = "Brecha salarial: " + (medianaTopLowExperimentPerCent(lowTop).toFixed(2) - medianaTopExperimentPerCent(highTop).toFixed(2)).toFixed(2)

    pElementDiffProporcionSalCiudad.innerHTML = "El Top" + highTop + "% mas alto, puede ganar " + (medianaTopExperimentPerCent(highTop).toFixed(2) / medianaTopLowExperimentPerCent(lowTop).toFixed(2)).toFixed(1) + " Veces mas que el Top" + lowTop + "% mas bajo"
}

function medirIntegrantes(number){
    const integrantes = Math.ceil((salarios.length * number) / 100)
    return integrantes
}


/////////Funciones industrias////////////////

//Experimento Ranking Empresas
function rankearEmpresasSueldos(){

    //Primera parte, busca la empresa con todos sus sueldos, les voy a sacar la media y los voy a volver a añadir a su empresa en una array
    let registroEmpresas = Object.entries(empresas)
    // console.log(registroEmpresas)
    let registroEmpresaYaños = []
    for(let cadaEmpresa of registroEmpresas){
        let nombreEmpresa = []
        // let añosEmpresa = []
        // console.log(cadaEmpresa)
        // let arrayAños = Object.entries(cadaEmpresa[1])
        // // console.log(arrayAños)
        // for(let empresaAñoYsueldo of arrayAños){
        //     // console.log(empresaAñoYsueldo[0])
        //     añosEmpresa.push(empresaAñoYsueldo[0])
        // }
        let arrayAñosprueba = Object.keys(cadaEmpresa[1])
        // console.log(arrayAñosprueba)
        // for(let añoArray of arrayAños){
        //      console.log(añoArray)
        // }
        // nombresEmpresas.push(cadaEmpresa[0])
        // añosEmpresas.push()
        nombreEmpresa.push(cadaEmpresa[0])
        registroEmpresaYaños.push([nombreEmpresa[0], arrayAñosprueba])
    }

    let registroEmpresaYmedianaGeneral = []
    let medianasEmpresas = []
    for(let registro of registroEmpresaYaños){
        // console.log(registro)
        let medianasPorEmpresa = []
         for(let i = 0; i < registro[1].length ; i++){
            // console.log(registro[0] ,registro[1][i])
            medianasPorEmpresa.push(medianaEmpresaYear(registro[0], registro[1][i]))
        }
        // console.log(medianasPorEmpresa)
        medianasEmpresas.push(medianasPorEmpresa)
    }

    // console.log(medianasEmpresas)

    for(let i = 0; i < medianasEmpresas.length ; i++){
        registroEmpresaYmedianaGeneral.push([registroEmpresaYaños[i][0], PlatziMath.calcularMediana(medianasEmpresas[i])])
    }
   
    // console.log(registroEmpresaYmedianaGeneral)

    ///Parte dos, ya tenemos el array de cada empresa con sus mediasGenerales, ahora a ordenar de mayor a menor

    let agarraMedianas = registroEmpresaYmedianaGeneral.map((empresa) => {return empresa[1]})
    // console.log(agarraMedianas)

    let ordenarMedianas = PlatziMath.ordenarLista(agarraMedianas)
    // console.log(ordenarMedianas)

    let compañiasConSalariosAlrevez = []

    for(let salario of ordenarMedianas){
        // console.log(salario)
        for(let i = 0; i < registroEmpresaYmedianaGeneral.length ;i++){
            // console.log(salario, registroEmpresaYmedianaGeneral[i][1])
            if(salario == registroEmpresaYmedianaGeneral[i][1]){
                compañiasConSalariosAlrevez.push([registroEmpresaYmedianaGeneral[i][0], salario])
            }
        }
    }
    // console.log(compañiasConSalariosAlrevez)

    let compañiasConSalariosFinal = compañiasConSalariosAlrevez.reverse()
    console.log(compañiasConSalariosFinal)

    //Parte 3, imprimirlo en el html
    let rankingHtml = ""

    for(let i = 0; i < compañiasConSalariosFinal.length ;i++){
        rankingHtml = rankingHtml + (i + 1 ) + ".- " + compañiasConSalariosFinal[i][0] + ": " + (compañiasConSalariosFinal[i][1]).toFixed(2) + " <br><br>" 

    }

    console.log(rankingHtml)

    pElementRankingMediasEmoresas.innerHTML = rankingHtml
}

rankearEmpresasSueldos()

//////EXPERIMENTOS/////

// let objetosConArraysDeSalarios = {Seguros: 800, ItSolutions: 1200, Freelance: 450, Panaderos: 300, Abogados: 550, Taxistas: 200, Estudiantes: 150}

// // console.log(objetosConArraysDeSalarios)

// let agarraYlosVuelveArry = Object.entries(objetosConArraysDeSalarios)

// // console.log(agarraYlosVuelveArry)

// let AgarraSueldos = agarraYlosVuelveArry.map((empresa) => {return empresa[1]})

// let ordenaSueldos = PlatziMath.ordenarLista(AgarraSueldos)

// let compañiasConSalariosAlreves = []


// for(let sueldo of ordenaSueldos){
//     // console.log(sueldo)
//     for(i = 0; i < agarraYlosVuelveArry.length ; i++){
//         if(sueldo == agarraYlosVuelveArry[i][1]){
//             compañiasConSalariosAlreves.push([agarraYlosVuelveArry[i][0], sueldo])
//         }
//     }
// }

// let compañiasConSalarios = compañiasConSalariosAlreves.reverse()