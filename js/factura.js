const iva = 0.13;
const precio = 599;

/*let nombre = document.getElementById.value;
/*nombre.addEventListener("click",mostrarNombre);

function mostrarNombre() {
  alert(nombre);
}*/

//alert(nombre);

function crearFactura() {
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("correo").value;
  let cantidad = document.getElementById("cantidad").value;
  /*Swal.fire(
    'Good job!',
    'You clicked the button!',
    'success'
  )*/
  if (nombre == "") {
    Swal.fire(
      'Error',
      'El Campo de Nombre Está Vacío',
      'error'
    )
  }else if (email == "") {
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

    Swal.fire({
      title: 'FACTURA',
      html:
      '<div class="textosFI"><p>Gracias por su compra: <b>'+nombre+' </b>.</p></div> <div class="factDescrip"> <table class="factura"><tr class="filas"><td class="colum1">Producto:</td><td class="colum2">Play Station 5</td></tr> <tr class="filas"><td class="colum1">Cantidad:</td><td class="colum2">'+cantidad+'</td></tr><tr><td class="colum1">Precio:</td><td class="colum2">$599.00</td></tr></table></div> <div class="cobros"> <div class="ley1"><p class="cLeyenda">SubTotal</p> <p class="cMoneda">$'+subtotal+'</p></div> <div class="ley2"><p class="cLeyenda">IVA (13%)</p> <p class="cMoneda">$'+totalIva+'</p></div> <div class="ley3"><p class="cLeyenda">Total a Pagar</p> <p class="cMoneda">$'+total+'</p></div></div> <div class="textosFI"><p>Se enviará una confirmación al correo: <b>'+email+' </b></p>',
      showCloseButton: true
    });
    <div></div>
  }
  //enviar.addEventListener("click",crearVariables);

  /*function crearVariables(){
    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let cantidad = document.getElementById("cantidad");
  }*/
}