var valorA = 0;
var valorB = 0;
var valorC = 0;
var valorD = 0;
var valorE = 0;

function sumar(tipo) {
  if (tipo == 1) {
    valorA++;
    var valorElement = document.getElementById("valorA");
    valorElement.innerHTML = valorA;
  } else if (tipo == 2) {
    valorB++;
    var valorElement = document.getElementById("valorB");
    valorElement.innerHTML = valorB;
  } else if (tipo == 3) {
    valorC++;
    var valorElement = document.getElementById("valorC");
    valorElement.innerHTML = valorC;
  } else if (tipo == 4) {
    valorD++;
    var valorElement = document.getElementById("valorD");
    valorElement.innerHTML = valorD;
  } else if (tipo == 5) {
    valorE++;
    var valorElement = document.getElementById("valorE");
    valorElement.innerHTML = valorE;
  }
}

function restar(tipo) {
  if (tipo == 1 && valorA > 0) {
    valorA--;
    var valorElement = document.getElementById("valorA");
    valorElement.innerHTML = valorA;
  } else if (tipo == 2 && valorB > 0) {
    valorB--;
    var valorElement = document.getElementById("valorB");
    valorElement.innerHTML = valorB;
  } else if (tipo == 3 && valorC > 0) {
    valorC--;
    var valorElement = document.getElementById("valorC");
    valorElement.innerHTML = valorC;
  } else if (tipo == 4 && valorD > 0) {
    valorD--;
    var valorElement = document.getElementById("valorD");
    valorElement.innerHTML = valorD;
  } else if (tipo == 5 && valorE > 0) {
    valorE--;
    var valorElement = document.getElementById("valorE");
    valorElement.innerHTML = valorE;
  }
}