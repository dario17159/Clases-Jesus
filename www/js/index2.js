document.addEventListener("DOMContentLoaded", onDeviceReady, false);

var titleInput;
var titleOutput;

var btnInput;
var btnOutput;

var hourInput;
var dateInput;
var locationData;

var isInput;

function onDeviceReady() {

    titleInput = document.getElementById('titulo_entrada')
    titleOutput = document.getElementById('titulo_salida')

    btnInput = document.getElementById('btn_entrada')
    btnOutput = document.getElementById('btn_salida')

    hourInput = document.getElementById('hour_input')
    dateInput = document.getElementById('date_input');
    locationData = document.getElementById('location_data');


    titleOutput.style.display = 'none'
    btnOutput.style.display = 'none';
    hourInput.style.display = "none";
    dateInput.style.display = "none";
    locationData.style.display = "none";

    addListeners();
}

function addListeners() {
    btnInput.addEventListener('click', onBtnEntradaClicked)
    btnOutput.addEventListener('click', onBtnSalidaClicked)
}



function onBtnEntradaClicked() {

    isInput = true;
    getHorDateAndLocationData()

}

function onBtnSalidaClicked() {

    isInput = false;
    getHorDateAndLocationData()

}

function getHorDateAndLocationData() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);

}

var onSuccess = function (position) {
    /* console.log('Hubicacion obtenida');
    console.log(position.coords); */

    hourInput.style.display = "";
    dateInput.style.display = "";
    locationData.style.display = "";

    const date = new Date()
    // console.log(date.toLocaleDateString());

    if (!isInput) {
        btnInput.style.display = "";
        btnOutput.style.display = "none";

        titleInput.style.display = "";
        titleOutput.style.display = "none";


        hourInput.innerHTML = "Hora de salida: "+ date.toLocaleTimeString();
        dateInput.innerHTML = "Fecha de salida: "+ date.toLocaleDateString();
        locationData.innerHTML = `Ubicacion: lat ${position.coords.latitude} - lng ${position.coords.longitude}`

    } else {
        titleInput.style.display = 'none';
        titleOutput.style.display = '';

        btnInput.style.display = "none";
        btnOutput.style.display = "";

        hourInput.innerHTML = "Hora de entrada: "+ date.toLocaleTimeString();
        dateInput.innerHTML = "Fecha de entrada: "+ date.toLocaleDateString();
        locationData.innerHTML = `Ubicacion: lat ${position.coords.latitude} - lng ${position.coords.longitude}`
    }
    /*   alert('Tu posision es: \n'+
          'Latitud: '+position.coords.latitude + '\n' +
          'Longitud: '+position.coords.longitude); */
}

var onError = function (error) {

    if (error.code === GeolocationPositionError.PERMISSION_DENIED) {

        alert('No tenemos acceso a tu ubicación, revisa los persmisos y vuelve a intentarlo');
    }

}
