window.onload = iniciar();
var tareas =[];
/**
 * It adds an event listener to the button.
 */
function iniciar() {
    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", clickBtnAgregar);
}

function clickBtnAgregar() {
    var txtTarea = document.getElementById("txtTarea");
    var tarea = txtTarea.value;

    tareas.push(tarea);
    listarTareas();
    
}

function listarTareas() {
    var divListado = document.getElementById("listado");
    var html="";
    for (var tarea of tareas) {
        html+=tarea+"<br/>";
    }
    divListado.innerHTML = html;
}