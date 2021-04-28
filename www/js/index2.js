document.addEventListener("DOMContentLoaded", onDeviceReady, false);

var titleInput;
var titleOutput;

var btnInput;
var btnOutput;

function onDeviceReady() {

    titleInput = document.getElementById('titulo_entrada')
    titleOutput = document.getElementById('titulo_salida')

    btnInput = document.getElementById('btn_entrada')
    btnOutput = document.getElementById('btn_salida')

    titleOutput.style.display = 'none'

    btnOutput.style.display = 'none';

    addListeners();
}

function addListeners() {
    btnInput.addEventListener('click', onBtnEntradaClicked)
    btnOutput.addEventListener('click', onBtnSalidaClicked)
}



function onBtnEntradaClicked() {
    console.log('Boton Entrada clicked');
    titleInput.style.display = 'none';
    titleOutput.style.display = '';

    btnInput.style.display = "none";
    btnOutput.style.display = "";
}

function onBtnSalidaClicked() {
    console.log('Boton Entrada clicked');
    btnInput.style.display = "";
    btnOutput.style.display = "none";

    titleInput.style.display = "";
    titleOutput.style.display = "none";
}