/* Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

*/

const inputText = document.querySelector('.caja-texto');
const fig = document.querySelector("#fig");
const parrafo = document.querySelector(".contenedor-parrafo");
const copyButton = document.querySelector(".btn-copiar");
const resultado = document.querySelector(".contenedor-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const btn_encriptar = document.querySelector(".btn-encriptar");
const btn_desencriptar = document.querySelector(".btn-desencriptar");

btn_encriptar.addEventListener("click", () => {
    textoResultado.value = encriptar(inputText.value);
});

btn_desencriptar.addEventListener("click", () => {
    textoResultado.value = desencriptar(inputText.value);
});

copyButton.addEventListener('click', function() {
    const copia = document.querySelector(".texto-resultado").value;
    navigator.clipboard.writeText(copia)
        .then(() => {
            alert('Texto copiado!');
        }).catch((error) => {
            console.error('Error al copiar el Texto:', error);
        });
        limpiar();
});

function limpiar() {
    textoResultado.value = "";
    resultado.classList.add("ocultar")
}

function validaciones() {
    //Requisitos:
    //No debe estar vacio
    if (inputText.value === "") {
        alert("El campo de texto no puede estar vacio");
        return false;
    }

    // Debe funcionar solo con letras minúsculas (No debe contener mayusculas)
    if (/[A-Z]/.test(inputText.value)) {
        alert("El campo de texto no puede contener mayusculas");
        return false;
    }

    // No deben ser utilizados letras con acentos ni caracteres especiales
    if (/[!@#$%^&*(),.?":{}|<>]/.test(inputText.value)) {
        alert("El campo de texto no puede contener caracteres especiales");
        return false;
    }

    //No debe contener acentos
    if (/[áéíóú]/.test(inputText.value)) {
        alert("El campo de texto no puede contener acentos");
        return false;
    }
}

function encriptar(texto){
    if(validaciones() === false) {
        error();
        return "";
   }
   
   let  txtCifrado = texto;

        txtCifrado = txtCifrado.replace(/e/igm,"enter");
        txtCifrado = txtCifrado.replace(/i/igm,"imes");
        txtCifrado = txtCifrado.replace(/a/igm,"ai");
        txtCifrado = txtCifrado.replace(/o/igm,"ober");
        txtCifrado = txtCifrado.replace(/u/igm,"ufat");   
    iteracionElementos();
    return txtCifrado;

}

function desencriptar(texto){
    if(validaciones() === false) {
        error();
        return "";
   }
   
   let  txtCifrado = texto;

        txtCifrado = txtCifrado.replace(/ai/igm,"a");
        txtCifrado = txtCifrado.replace(/enter/igm,"e");
        txtCifrado = txtCifrado.replace(/imes/igm,"i");
        txtCifrado = txtCifrado.replace(/ober/igm,"o");
        txtCifrado = txtCifrado.replace(/ufat/igm,"u");  
    iteracionElementos();
    return txtCifrado;
}

function iteracionElementos(){
    fig.classList.add("ocultar");
    parrafo.classList.add("ocultar");    
    copyButton.classList.remove("ocultar");
    resultado.classList.remove("ocultar");
}

function error(){
    fig.classList.remove("ocultar");
    parrafo.classList.remove("ocultar");    
    copyButton.classList.add("ocultar");
    resultado.classList.add("ocultar");
}