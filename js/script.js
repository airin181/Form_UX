// DECLARAMOS VARIABLES

const formulario = document.getElementById("formulario")

const nombre = document.getElementById("nombre")
const apellidos = document.getElementById("apellidos")

const pais = document.getElementById("pais")

const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordRepeat = document.getElementById("repeat_password")

const prefijo = document.getElementById("prefijo")
const numero = document.getElementById("numero")

const cookies = document.getElementById("cookies")
const registrarse = document.getElementById("registrarse")


// REGEX

const regexEmail = /[0-9a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+/
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.{8,})/ //9 caracteres + 1 mayuscula, 1 minuscula + 1 numero
const regexTel = /^[0-9]+$/;



//---------- INPUT EN ROJO POR ERROR --------//
function toRed (param){
    param.style.boxShadow = "0px 0px 4px rgba(235, 87, 87, 0.8)";
    param.style.border= "1px solid #EB5757";
}





let contador = 0;

/*---------NOMBRE----------*/

function rellenarNombre() {
    if(nombre.value == ""){
        toRed(nombre);
        console.log("nombre: falla");
    } else{
        contador++;
        console.log("nombre: OK");
    }
}

/*---------APELLIDO----------*/


function rellenarApellido() {
    if(apellidos.value == ""){
        toRed(apellidos);
        console.log("ape: falla");
    } else{
        contador++;
        console.log("ape: OK")
    }
}


/*---------DATALIST PAISES----------*/

function rellenarPais() {
    if(pais.value == ""){
        toRed(pais);
        console.log("pais: falla");
    } else {
        contador++;  
        console.log("pais: OK") 
    }
}


/*---------EMAIL----------*/

//sintaxis: regex.test(address)

function rellenarEmail(){
    if(regexEmail.test(email.value) == true){
        contador++;
        console.log("email: OK")
    } else {
        toRed(email);
        console.log("email: falla");
    }
}












/*--------- FUNCIÓN VALIDACIÓN ----------*/

formulario.addEventListener("submit", function validar(evento){
evento.preventDefault();
rellenarNombre();
rellenarApellido();
rellenarPais();
rellenarEmail();
console.log("contador:",contador)


})