
document.addEventListener('deviceready', onDeviceReady, false);


function onDeviceReady() {
    /* document.getElementById('deviceready').classList.add('ready'); */
    //console.log('Cordova Listo!');
    // document.getElementById('button_enviar').addEventListener("click", onButtonEnviarClicked);
    $('#button_enviar').click(onButtonEnviarClicked);
}


function onButtonEnviarClicked() {
    let usuario = $('#username').val();
    let password = $('#password').val();

    const urlBase = 'http://lissar.iwan21.net/';

    const params = formToJSON();

    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: urlBase + "loginuser/nigol",
        dataType: "json",
        data: params,
        success: function (respuesta) {

            console.log(respuesta);
            /* var status = respuesta.status;
            var mensaje = respuesta.message;
            var recordar = false;
            if (document.getElementById('rememberme').checked) {
                recordar = true;
            }



            if (status == "ERROR") {
                boton_enviar.button('reset');
                document.getElementById("msj-error").innerHTML = "Identificaci贸n incorrecta";
                //buscaError(mensaje);
                console.log(mensaje);



            }



            if (status == "OK") {
                // boton_enviar.button('reset');
                var token = respuesta.token;
                var username = respuesta.username;
                var userid = respuesta.id;
                //Guardamos datos en la sesi贸n
                sessionStorage.token = token;
                sessionStorage.username = username;
                sessionStorage.userid = parseInt(userid);
                sessionStorage.language = "es";
                sessionStorage.recordar = recordar;
                //Guardamos datos de forma local
                localStorage.setItem("token", token);
                localStorage.setItem("tokenfcm", sessionStorage.tokenfcm);
                localStorage.setItem("username", username);
                localStorage.setItem("userid", parseInt(userid));
                localStorage.setItem("language", sessionStorage.language);
                localStorage.setItem("recordar", recordar);




                document.getElementById("msj-error").classList.remove("colorError");
                document.getElementById("msj-error").classList.add("colorCorrecto");
                document.getElementById("msj-error").innerHTML = "Correcto";



                location.href = "principal.html";
            } */
        },
        error: function (error) {
            console.log(error);
            /* boton_enviar.button('reset');
            document.getElementById("msj-error").innerHTML = "Error: " + jqXHR.status + "  Fallo en la conexi贸n con el servidor";
            //Errores debug
            /* $.each(jqXHR, function (key, element) {
                 alert('key: ' + key + '\n' + 'value: ' + element);
             }); */
        }
    })

    /*
    location.href ="/index2.html"; */
}

function formToJSON() {
    var usertype = "User";
    ///sessionStorage.tokenfcm = "dJgvwXiRkR8:APA91bHiWf_uekCuFxkHUH1yKw80ltdplcNewl1XWX04fg32-A5kAASGvRpqJ1JXk2eIGji7Mb-zZiBkchVHavA_7XkyhOkjbCmvJtxkHfQaMDk2udfzYRaC_MDgFh0sJ8mEOy4sTXTM";;
    return JSON.stringify({
        "username": $.trim($('#username').val()),
        "password": $.trim($('#password').val()),
        "language": "ES",
        "token": sessionStorage.token,
        "tokenfcm": sessionStorage.tokenfcm,
        "rememberme": sessionStorage.recordar,
    });
}