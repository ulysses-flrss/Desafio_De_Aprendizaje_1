const iva = 0.13;
const precio = 900;

function crearFactura() {
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("correo").value;
  let cantidad = document.getElementById("cantidad").value;
  if (nombre == "") {
    Swal.fire(
      'Error',
      'El Campo de Nombre Está Vacío',
      'error'
    )
  }else if (email.length == 0) {
    Swal.fire(
      'Error',
      'El Campo del Correo Electrónico Está Vacío',
      'error'
    )
  }else if (cantidad<=0 || cantidad>10) {
    Swal.fire(
      'Error',
      'Solo puede ingresar un número de 1 a 10',
      'error'
    )
  }else{
    let subtotal = precio*cantidad;
    let totalIva = subtotal*iva;
    let total = subtotal+totalIva;
    let factura = document.getElementById("factura");
    let ver = document.getElementById("verFact");

    /*Swal.fire({
      title: 'FACTURA',
      html:
      '<div class="textosFI"><p>Gracias por su compra: <b>'+nombre+' </b>.</p></div> <div class="factDescrip"> <table class="fact"><tr class="filas"><td class="colum1">Producto:</td><td class="colum2">Play Station 5</td></tr> <tr class="filas"><td class="colum1">Cantidad:</td><td class="colum2">'+cantidad+'</td></tr><tr><td class="colum1">Precio:</td><td class="colum2">$599.00</td></tr></table></div> <div class="cobros"> <div id="ley1"><p class="cLeyenda">SubTotal</p> <p class="cMoneda">$'+subtotal+'</p></div> <div id="ley2"><p class="cLeyenda">IVA (13%)</p> <p class="cMoneda">$'+totalIva+'</p></div> <div id="ley3"><p class="cLeyenda">Total a Pagar</p> <p class="cMoneda">$'+total+'</p></div></div> <div class="textosFI"><p>Se enviará una confirmación al correo: <b>'+email+' </b></p>',
      showCloseButton: true
    });*/

    factura.innerHTML = "<img src='/img/iconos/simboloX.png' alt='Cerrar Factura' id='closeFactura' onclick='cerrarFactura()'><div class='textosFI'><p>Gracias por su compra: <b>"+nombre+" </b>.</p></div> <div class='factDescrip'> <table class='fact'><tr class='filas'><td class='colum1'>Producto:</td><td class='colum2'>Play Station 5</td></tr> <tr class='filas'><td class='colum1'>Precio:</td><td class='colum2'>$"+precio+"</td></tr><tr><td class='colum1'>Cantidad:</td><td class='colum2'>"+cantidad+"</td></tr> <tr class='filas'><td class='colum1'>SubTotal</td> <td class='colum2'>$"+subtotal+"</td></tr> <tr><td class='colum1'>IVA (13%)</td> <td class='colum2'>$"+totalIva+"</td></tr> <tr><td class='colum1'>Total a Pagar</td> <td class='colum2'>$"+total+"</td></tr></div></table></div> <div class='textosFI'><p>Se enviará una confirmación al correo: <b>"+email+" </b></p>";

    ver.style.opacity = '1';
    factura.style.opacity = '1';
    factura.style.transform = 'translateY(-10rem)';
    factura.style.zIndex = '2';
  }
}

function validacion(nombre, email, cantidad) {
  let pNombre = false;
  RegExp = a;
  if (nombre == '' || nombre == ' ') {
    return pNombre;
  }else{
    pNombre = true;
    return pNombre;
  }
}

function cerrarFactura() {
  let factura = document.getElementById("factura");
  factura.style.opacity = 0;
}