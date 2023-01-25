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