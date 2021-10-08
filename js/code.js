function calculo() {
    /*alert("hellow");*/
    let totalCuenta = document.getElementById('total').value;
    let servicio = document.getElementById('servicio').value;
    //let servicio = document.getElementByName('servicio')[0].value;
    // traer el valor nº personas mediante la classe asociada
    let personas = document.getElementById('personas').value
        //let servicio = document.getElementByClass('personas')[0].value;
        /*alert(totalCuenta);
        alert(servicio);
        alert(personas);*/
    console.log('total: ' + totalCuenta + ' servicio: ' + servicio + ' personas: ' + personas)
}