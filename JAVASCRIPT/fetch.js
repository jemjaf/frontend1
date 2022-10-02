
function cargarJson1() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(jsonCargado);
}

async function cargarJson2() {
    let respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let json = await respuesta.json();
    alert(json.title)
}

function jsonCargado(json) {
    let txtNombre = document.getElementById("txtNombre");
    let txtPregunta = document.getElementById("txtPregunta");

    txtNombre.innerHTML = json.title;
    txtPregunta.innerHTML = json.completed? "Está completo":"Está incompleto";
}

cargarJson2();
