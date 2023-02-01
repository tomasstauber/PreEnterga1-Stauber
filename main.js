let monto = (prompt("Ingrese el monto que desea recibir:"));
let intereses = 2.94

if(monto < 100){
    alert("El monto minimo que podes pedir es de 100");
} else if(monto > 100){
    alert("El monto solicitado es de: " + monto + " y el total a pagar es de: " + (monto * intereses));
} 

for(let i = 0; i <= 100; i = i+=2) {
    console.log(i);
}

let valorUno = parseInt(prompt("Ingrese un valor"));
let calcular = prompt("Ingrese la operación que desea realizar (+|-|/|*)");
let valorDos = parseInt(prompt("Ingrese un valor"));

function calculadora (valorUno, valorDos, calcular) {
    switch (calcular){
        case "*":
            return valorUno * valorDos;
            break;
        case "/":
            return valorUno / valorDos;
            break;
        case "+":
            return valorUno + valorDos;
            break;
        case "-":
            return valorUno - valorDos;
            break;
        }   
}

let resultado = calculadora(valorUno, valorDos, calcular);
alert("El resultado es: " + resultado);
