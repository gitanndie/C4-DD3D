document.getElementById("enviar").addEventListener("click", enviarDatos);

function enviarDatos(evento){
    var cantidad, valor_unitario;
    cantidad = document.getElementById("cantidad").value
    valor_unitario = document.getElementById("valor-unitario").value
    
    total = cantidad * valor_unitario;
    
    document.getElementById("valor-total").value = total;

    event.preventDefault();
}

function sumar(a,b){
    var suma;
    suma = a + b + 1;
    console.log(suma)
}