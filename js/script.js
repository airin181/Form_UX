// DECLARAMOS VARIABLES

const formulario = document.getElementById("formulario")
const register = document.getElementById("register")
const nombre = document.getElementById("nombre")
const apellidos = document.getElementById("apellidos")

const pais = document.getElementById("pais")

const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordRepetir = document.getElementById("repeat_password")

const prefijo = document.getElementById("prefijo")
const numero = document.getElementById("numero")

const cookies = document.getElementById("cookies")
const registrarse = document.getElementById("registrarse")


// REGEX

const regexEmail = /[0-9a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+/
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.{8,})/ //8 o más caracteres + 1 mayuscula, 1 minuscula + 1 numero
const regexTel = /^[0-9]{9}$/;



//---------- INPUT EN ROJO POR ERROR --------//
function toRed (param){
    param.style.boxShadow = "0px 0px 4px rgba(235, 87, 87, 0.8)";
    param.style.border= "1px solid #EB5757";
}





let contador = 0;

/*--------- NOMBRE ----------*/

function rellenarNombre() {
    if(nombre.value == ""){
        toRed(nombre);
        console.log("nombre: falla");
    } else{
        contador++;
        console.log("nombre: OK");
    }
}

/*--------- APELLIDO ----------*/


function rellenarApellido() {
    if(apellidos.value == ""){
        toRed(apellidos);
        console.log("ape: falla");
    } else{
        contador++;
        console.log("ape: OK")
    }
}


/*--------- DATALIST PAISES ----------*/

function rellenarPais() {
    if(pais.value == ""){
        toRed(pais);
        console.log("pais: falla");
    } else {
        contador++;  
        console.log("pais: OK") 
    }
}


/*--------- EMAIL ----------*/

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



/*--------- CONTRASEÑA ----------*/


function rellenarPass(){
    if(regexPassword.test(password.value) == true && passwordRepetir.value == password.value){
        contador++;
        console.log("pass: OK");
    } else if(regexPassword.test(password.value) !== true){
        toRed(password);
        console.log("pass: falla1");
    } else if(passwordRepetir.value !== password.value){
        toRed(passwordRepetir);
        console.log("pass: falla2");
    }
}

/*-----------------NÚMERO TELÉFONO---------*/

function validarTelefono(){
    if(regexTel.test(numero.value) == true){
        contador ++;
        console.log("telf ok");
    }else{
        console.log("telf: falla");
    }
}

/*-----------------ACEPT COOKIES---------*/

function validarCookies(){
    if(cookies.checked == true){
        contador ++;
        console.log("cookies ok");
    }else{
        console.log("cookies falla");
    }
}

/*-----------------VOLVER INICIO---------*/

function volverInicio(){
    formulario.reset();
    formulario.style.display = "flex";
    register.style.display = "none";


}



/*--------- FUNCIÓN VALIDACIÓN ----------*/

formulario.addEventListener("submit", function validar(evento){

evento.preventDefault();

rellenarNombre();
rellenarApellido();
rellenarPais();
rellenarEmail();
rellenarPass();
validarTelefono();
validarCookies();
volverInicio();

if(contador === 0){
    console.log("Existen errores en el formulario");
    contador = 0;
}else{
    formulario.style.display = "none";
    register.style.display = "block";
}



console.log("contador:",contador)
})