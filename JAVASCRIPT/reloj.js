

setInterval(() => {
    var reloj24 = document.getElementById("relojid24")
    var reloj12 = document.getElementById("relojid12")
    var tiempoActual = new Date();
    var hora24 = tiempoActual.getHours();
    var hora12 = hora24
    if (hora12>12) {
        hora12 -= 12;
    }
    var minuto = tiempoActual.getMinutes();
    if (minuto<10) {
        minuto = "0"+minuto;
    }
    var segundo = tiempoActual.getSeconds();
    if (segundo<10) {
        segundo = "0"+segundo;
    }
    reloj24.innerHTML = `${hora24}:${minuto}:${segundo}`;
    reloj12.innerHTML = `${hora12}:${minuto}:${segundo}`;
}, 1000
);