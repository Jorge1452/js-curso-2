let titulo = document.querySelector(`h1`);
titulo.innerHTML = `Hora del Desafío`;

function console() {
    console.log (`El botón fue clicado`);
}

function alert() {
    alert ("Yo amo JS");
}

function brasil() {
    let ciudadBrasil = prompt ("Mencione una ciudad de Brasil");
    alert (`Estuve en ${ciudadBrasil} y me acordé de ti`);
}

function suma() {
    let numeroUno = parseInt(prompt ("Dime el primero número de la suma"));
    let numeroDos = parseInt(prompt ("Dime el segundo número de la suma"));
    let resultado = numeroUno + numeroDos;
    alert (`${numeroUno} + ${numeroDos} = ${resultado}`);
}