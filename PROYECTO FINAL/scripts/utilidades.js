//--->BOTONES NAV<---//
const inicioButton = document.querySelector('.__Inicio')
const ayudaButton = document.querySelector('.__ayuda')

const divInicio = document.querySelector('.home')
const divAyuda = document.querySelector('.Ayuda')

//--->ASIDE<---//
const DaPorPersonaBotton = document.querySelector('.boton1')
const DaPorEmpresaBotton = document.querySelector('.boton2')
const DaPorCiudadBotton = document.querySelector('.boton3')
const DaPorIndustriaBotton = document.querySelector('.boton4')

const divPersonas = document.querySelector('.analisis-personas')
const divEmpresa = document.querySelector('.analisis-empresa')
const divCiudad = document.querySelector('.analisis-ciudad')
const divIndustria = document.querySelector('.analisis-industrias')

//--->CUERPO CENTRAL<--//



//////////////////////FUNCIONALIDADES//////////////////

//BOTONES NAV//
inicioButton.addEventListener('click', botonDeInicio)
ayudaButton.addEventListener('click', botonDeAyuda)

function botonDeInicio(){
    divInicio.classList.remove('inactive')
    divAyuda.classList.add('inactive')
    divPersonas.classList.add('inactive')
    divEmpresa.classList.add('inactive')
    divCiudad.classList.add('inactive')
    divIndustria.classList.add('inactive')
}

function botonDeAyuda(){
    divAyuda.classList.remove('inactive')
    divInicio.classList.add('inactive')
    divPersonas.classList.add('inactive')
    divEmpresa.classList.add('inactive')
    divCiudad.classList.add('inactive')
    divIndustria.classList.add('inactive')
}

//ASIDE//

DaPorPersonaBotton.addEventListener('click', botonDePersona)
DaPorEmpresaBotton.addEventListener('click', botonDeEmpresa)
DaPorCiudadBotton.addEventListener('click', botonDeCiudades)
DaPorIndustriaBotton.addEventListener('click', botonDeIndustria)


function botonDePersona(){
    divPersonas.classList.remove('inactive')
    divInicio.classList.add('inactive')
    divAyuda.classList.add('inactive')
    divEmpresa.classList.add('inactive')
    divCiudad.classList.add('inactive')
    divIndustria.classList.add('inactive')
}

function botonDeEmpresa(){
    divEmpresa.classList.remove('inactive')
    divPersonas.classList.add('inactive')
    divInicio.classList.add('inactive')
    divAyuda.classList.add('inactive')
    divCiudad.classList.add('inactive')
    divIndustria.classList.add('inactive')
}

function botonDeCiudades(){
    divCiudad.classList.remove('inactive')
    divEmpresa.classList.add('inactive')
    divPersonas.classList.add('inactive')
    divInicio.classList.add('inactive')
    divAyuda.classList.add('inactive')
    divIndustria.classList.add('inactive')
}

function botonDeIndustria(){
    divIndustria.classList.remove('inactive')
    divCiudad.classList.add('inactive')
    divEmpresa.classList.add('inactive')
    divPersonas.classList.add('inactive')
    divInicio.classList.add('inactive')
    divAyuda.classList.add('inactive')
}