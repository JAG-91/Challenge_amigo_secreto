const amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const lista = document.getElementById("listaAmigos");
    
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
    
    amigos.push(nombre);
    
    const item = document.createElement("li");
    item.textContent = nombre;
    lista.appendChild(item);
    
    input.value = "";
}

function sortearAmigo() {
    if (amigos.length === 1) {
        alert("Agregue al menos otro amigo antes de sortear.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];
    
    mostrarResultado(amigoSeleccionado);
}

function mostrarResultado(amigo) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    
    const item = document.createElement("li");
    item.textContent = `El amigo secreto sorteado es: ${amigo}`;
    resultadoLista.appendChild(item);
}
