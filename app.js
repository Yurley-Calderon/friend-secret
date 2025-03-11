//1. Traer la variable "amigo"
const inputAmigos = document.getElementById("amigo");
//2.Añadir amigos en la entrada
const listaAmigos = [];
//3. "listaAmigos" está en HTML se trae para hacer uso de la estructura que ya está y visualizarlos.
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

//4.Se extrajo la función para que así sea util el botón correspondiente
function agregarAmigo() { 
    if (!inputAmigos.value) {
        alert("Debes de ingresar y nombre")
    }
    
    //5.Agregando el lista todo lo que se escriba 
    listaAmigos.push(inputAmigos.value);

    //6.innerHTML espera que tu le agregues codigo HTML y se ingrese lo que tú quieras.
    //String (``) son necesarias para concatenar los datos, pero sin mezclarlos
    ulListaAmigos.innerHTML += `<li>${inputAmigos.value}</li>`;

};

//7. Sortear los nombres ingresados
function sortearAmigo() {
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}

