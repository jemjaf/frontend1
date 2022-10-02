
async function cargarUrl(url) {
    let resultado = await fetch(url)
    return resultado.json();
}

async function cargarJson() {
    let json = await cargarUrl("https://jsonplaceholder.typicode.com/posts");
    let tbody = document.getElementById("tbody");
    let html = "";
    for (let i =0; i<json.length; i++) {
        html += `<tr><td>${json[i].userId}</td><td>${json[i].id}</td><td>${json[i].title}</td><td>${json[i].body}</td></tr>`
    }
    tbody.innerHTML = html;
}
cargarJson()