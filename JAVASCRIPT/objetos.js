var personas = [];
window.onload = iniciar();
function iniciar() {
    personas = JSON.parse(localStorage.personas);
    mostrarPersonas();
    setTimeout(Bienvenido, 3000);
    var btnCrearObjeto = document.getElementById("btnCrearObjeto");
    btnCrearObjeto.addEventListener("click", clickBtnAgregar);
}

function Bienvenido(){
    alert("Espero la estés pasando bien!!!");
}

function clickBtnAgregar() {
    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;
    var edad = document.getElementById("txtEdad").value;

    crearPersona(nombre, apellido, edad);
    mostrarPersonas();
}

function crearPersona(nombre, apellido, edad){
    var id = (personas.length + 1);
    var persona = {
        "ID"        : id,
        "Nombre"    : nombre,
        "Apellido"  : apellido,
        "Edad"      : edad
    }
    personas.push(persona);
    mostrarPersonas();
    localStorage.personas = JSON.stringify(personas);
}

function mostrarPersonas() {
    var html = "";

    for (var persona of personas) {
        html += "<tr><td>"+persona.ID+"</td><td>"+persona.Nombre+"</td><td>"+persona.Apellido+"</td><td>"+persona.Edad+"</td></tr>";
    }
    var body = document.getElementById("tBody");
    body.innerHTML = html;
}