
document.addEventListener('deviceready', onDeviceReady, false);


function onDeviceReady() {
    /* document.getElementById('deviceready').classList.add('ready'); */
    console.log('Cordova Listo!');
    document.getElementById('button1').addEventListener("click", onButtonClicked);
}

var onSuccess = function(position){
    /* console.log('Hubicacion obtenida');
    console.log(position.coords); */
    alert('Tu posision es: \n'+
        'Latitud: '+position.coords.latitude + '\n' +
        'Longitud: '+position.coords.longitude);
}

var onError = function(error){
    // console.log('Ocurrio un error', error.code);
    
    if(error.code === GeolocationPositionError.PERMISSION_DENIED){

        alert('No tenemos acceso a tu ubicación, revisa los persmisos y vuelve a intentarlo');
    }
    
}


function onButtonClicked(){
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}