window.onload = iniciar();

/**
 * It adds an event listener to the button.
 */
function iniciar() {
    var btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click", ciclos);
}

function ciclos() {
    var txtNumero = document.getElementById("txtNumero");
    var numero = txtNumero.value;

    var txtNumero2 = document.getElementById("txtNumero2");
    var numero2 = txtNumero2.value;

    var potencias = potenciasDelNumero(numero);
    var sumatoria = sumaNPrimerosNumeros(numero2);

    alert(potencias);
    alert("La suma de los "+numero2+" primeros números naturales es: "+sumatoria);
}

/**
 * It gets the values of the textboxes, calculates the IMC and shows it in an alert.
 */
function clickBtnCalcular() {
    var txtAltura = document.getElementById("txtAltura");
    var altura = txtAltura.value;

    var txtPeso = document.getElementById("txtPeso");
    var peso = txtPeso.value;

    var IMC = Math.round(calcularImc(peso,altura));
    alert("Su IMC es: " + IMC);
}


/**
 * It takes two arguments, `peso` and `altura`, and returns the result of the calculation
 * `peso/(altura**2)`.
 * @param peso - weight in kilograms
 * @param altura - height in centimeters
 * @returns The IMC value.
 */
function calcularImc(peso, altura) {
    //Debemos pasar la altura a metros para que el calculo del IMC se más fácil de expresar
    altura/=100
    var IMC = (peso/(altura**2));
    return IMC;
}

/**
 * It returns a string with the first 10 powers of a given number
 * @param numero - The number you want to calculate the powers of.
 * @returns a string with the powers of the number.
 */
function potenciasDelNumero(numero) {
    var mensaje = "";
    for (let i = 0; i < 10; i++) {
        mensaje+="La potencia "+(i+1)+" del número "+numero+" es: "+(numero**(i+1))+"\n";
    }
    return mensaje;
}

/**
 * It sums the first n numbers.
 * @param numero - The number of numbers you want to add up.
 * @returns The sum of the first n numbers.
 */
function sumaNPrimerosNumeros(numero){
    var suma = numero*(numero+1)/2;
    return suma;
}

/**
 * It takes an array of numbers and returns the average of those numbers.
 * @param arreglo - The array of numbers to be averaged.
 * @returns The average of the numbers in the array.
 */
function Promedio(arreglo) {
    var promedio=0;
    for (var numero of arreglo) {
        promedio+=numero;
    }
    promedio/=arreglo.length;
    return promedio;
}
