window.onload = iniciar();

function iniciar() {
    var btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click", clickBtnCalcular);
}

function clickBtnCalcular() {
    var txtAltura = document.getElementById("txtAltura");
    var altura = txtAltura.value;

    var txtPeso = document.getElementById("txtPeso");
    var peso = txtPeso.value;

    var IMC = Math.round(calcularImc(peso,altura));
    alert("Su IMC es: " + IMC);
}

function calcularImc(peso, altura) {
    var IMC = (10**4)*(peso/(altura**2));
    return IMC;
}