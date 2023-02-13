let monto = (prompt("SIMULADOR DE PRÉSTAMOS - Ingrese el monto que desea recibir:"));
let intereses = 2.94

if(monto < 100){
    alert("El monto minimo que podes pedir es de 100");
} else if(monto > 100){
    alert("El monto solicitado es de: " + monto + " y el total a pagar es de: " + (monto * intereses));
} 

for(let i = 0; i <= 100; i = i+=2) {
    console.log(i);
}

let valorUno = parseInt(prompt("CALCULADORA - Ingrese un valor"));
let calcular = prompt("Ingrese la operación que desea realizar (+,-,/,*)");
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

class Reserva {
    constructor(mesa, precio){
        this.mesa = mesa,
        this.precio = precio
    }
}

const carrito = [];
let totalCompra = "";
let eleccion = "";

const opciones = [
    {mesa: "Mesa 1 persona", precio: 1000},
    {mesa: "Mesa 2 personas", precio: 2000},
    {mesa: "Mesa 4 personas", precio: 4000},
    {mesa: "Mesa 6 o más personas", precio: 5000}
];

while (eleccion !== "salir") {
    eleccion = prompt("Bienvenido a Borneo, estas son nuestras opciones de reservas, tenga en cuenta que se aplicará un cargo de $500 por el servicio \n" + opciones.map((Reserva, index) => index + 1 + ". " + Reserva.mesa).join("\n") + "\n Ingrese el número de la opción o -salir- para cancelar");

    if (eleccion <= opciones.length) {
        const reservaElegida = opciones[eleccion - 1];
        carrito.push(reservaElegida);

        alert("Usted ha elegido: " + reservaElegida.mesa + " , el importe a pagar es de $: " + reservaElegida.precio);

        eleccion = prompt("Desea confirmar la reserva? Ingrese -si- para confirmar o -no- para cancelar ").toLowerCase();  


        while (eleccion !== "si" && eleccion !== "no") {
            alert("Por favor ingrese 'si' para continuar o 'no' para salir ");
            eleccion = prompt("Desea confirmar la reserva? Ingrese -si- para confirmar o -no- para cancelar ").toLowerCase();  
        } 

        if (eleccion === "no"){
            alert("La reserva ha sido cancelada");
            carrito.pop(reservaElegida);
        }

        if (eleccion === "si") {
            eleccion = "salir";
            totalCompra = carrito.reduce((acumulador, reservaElegida) => acumulador + reservaElegida.precio, 500);    
            alert("Usted está reservando \n" + carrito.map((Reserva, index) => index + 1 + ". " + Reserva.mesa + "$ " + Reserva.precio).join("\n") + " \n" + " y el total es de $: " + totalCompra);

        }   
    }
}

class Pedido {
    constructor(nombre, telefono, fecha){
        this.nombre = nombre,
        this.telefono = telefono,
        this.fecha = fecha;
    }
}

const nombre = prompt("Ingrese su nombre para registrar la reserva: ");
const telefono = prompt("Nos dejas un número de teléfono en caso de tener que contactarnos?");
const fecha = prompt("Indique la fecha de la reserva (dd/mm/yy)");
const pedidoConfirmado = new Pedido (nombre, telefono, fecha);

alert(pedidoConfirmado.nombre + " , su reserva ha sido registrada exitosamente para el día: " + pedidoConfirmado.fecha + " y en necesidad de comunicarnos lo haremos al número: " + pedidoConfirmado.telefono + " , desde ya, muchas gracias por elegirnos")
