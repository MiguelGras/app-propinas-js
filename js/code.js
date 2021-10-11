function calculo() {
    /*alert("hellow");*/
    let totalCuenta = document.getElementById('total').value;
    let servicio = document.getElementById('servicio').value;
    //let servicio = document.getElementsByName('servicio')[0].value;
    // traer el valor nº personas mediante la classe asociada
    let personas = document.getElementById('personas').value
        //let servicio = document.getElementsByClassName('personas')[0].value;
        /*alert(totalCuenta);
        alert(servicio);
        alert(personas);*/
    let resultado = (servicio * totalCuenta) / personas;
    console.log('resultado: ' + resultado);
    if (isNaN(resultado)) {
        alert("No se ha introducido ningun valor");
    } else if (personas == '' || personas == 0) {
        alert("No hay personas que paguen");
    } else {
        document.getElementById("res").innerHTML = "<p>total a pagar</p><h3>" + resultado + " por persona</h3>"
    }
}

function limpiar() {
    //el id form esta asociado a la etiqueta form del HTML
    document.getElementById("form").reset()
        //cogemos el contenido de res del HTML
    document.getElementById("res").innerHTML = "";
}