$(document).ready(function () {
    $("body").css("background-image", "url('images/" + Math.floor((Math.random() * 8) + 1) + ".jpg')");

    $("button").click(function () {
        let url = $(this).attr("data-url");
        location.replace(url);
    });

    /*if (navigator.languages.includes("es")) {
        $("#header").text("ACCESO DENEGADO"); // Access Denied
        $("#message1").text("El dispositivo que está utilizando se ha colocado en la caja de bloqueo. Sólo puede acceder a sitios web aprobados."); // Message above button
        $("button").html('<i class="fas fa-th mr-2"></i> De vuelta a Clever'); // Button text 
        $("#message2").text("Si sientes que esto es incorrecto por favor contacta a la bibliotecaria de tu escuela."); // Message below button
    }*/
});