
document.addEventListener('deviceready', onDeviceReady, false);


function onDeviceReady() {
    /* document.getElementById('deviceready').classList.add('ready'); */
    console.log('Cordova Listo!');
    document.getElementById('button_enviar').addEventListener("click", onButtonEnviarClicked);
}


function onButtonEnviarClicked(){
    console.log('Boton enviar clickeado');
    location.href ="/index2.html";
}