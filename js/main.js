document.getElementById("enviar").addEventListener("click", enviarDatos);
document.getElementById("cantidad").addEventListener("keyup", enviarDatos);
document.getElementById("valor-unitario").addEventListener("change", enviarDatos);

function enviarDatos(evento) {
    var cantidad, valor_unitario;
    cantidad = document.getElementById("cantidad").value
    valor_unitario = document.getElementById("valor-unitario").value
    total = cantidad * valor_unitario;

    document.getElementById("valor-total").value = total;

    if (evento.type == "click") {
        evento.preventDefault();
    }
}

function sumar(a, b) {
    var suma;
    suma = a + b + 1;
    console.log(suma)
}