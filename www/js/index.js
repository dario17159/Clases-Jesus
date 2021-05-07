
document.addEventListener('deviceready', onDeviceReady, false);


function onDeviceReady() {
    /* document.getElementById('deviceready').classList.add('ready'); */
    console.log('Cordova Listo!');
    // document.getElementById('button_enviar').addEventListener("click", onButtonEnviarClicked);
    $('#button_enviar').click(onButtonEnviarClicked);
}


function onButtonEnviarClicked(){
    let usuario = $('#username').val();
    let password = $('#password').val();
    
    $.ajax({
        type: 'GET',
        url: 'https://httpbin.org/get',
        success: function(response){
            console.log('Response -> ', response);
        },
        error: function(error){
            console.log('Error', error);
        }
    })

    /*
    location.href ="/index2.html"; */
}