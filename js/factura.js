const iva = 0.13;
const precio = 999;
const nombreV = /^[a-zA-ZÀ-ÿ\s]/;
const correoV = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const cantV = /^[0-9]/;

function crearFactura() {
  let nombre = document.getElementById("nombre");
  let email = document.getElementById("correo");
  let cantidad = document.getElementById("cantidad");

  if (nombre.value == '' || nombre.value == ' ') {
    Swal.fire(
      'Error',
      'No Puede Dejar El Nombre Vacío.',
      'error'
    );
  }else if (email.value == '' || email.value ==' ') {
    Swal.fire(
      'Error',
      'No Puede Dejar El Email Vacío.',
      'error'
    );
  }else if (cantidad.value == '' || cantidad.value == ' ') {
    Swal.fire(
      'Error',
      'No Puede Dejar La Cantidad Vacía.',
      'error'
    );
  }else if (!nombreV.test(nombre.value)) {
    Swal.fire(
      'Error',
      'Solo Puede Ingresar Letras Para el Nombre',
      'error'
    );
  }else if (!correoV.test(email.value)) {
    Swal.fire(
      'Error',
      'El Correo Electrónico Ingresado es Inválido.',
      'error'
    );
  }else if (!cantV.test(cantidad.value)) {
    Swal.fire(
      'Error',
      'Solo Puede Comprar 1 consola como mínimo y 10 como máximo.',
      'error'
    );
  }else{
    let subtotal = precio*cantidad.value;
    let totalIva = subtotal*iva;
    let total = subtotal+totalIva;

    factura.innerHTML = "<img src='/img/iconos/simboloX.png' alt='Cerrar Factura' id='closeFactura' onclick='cerrarFactura()'><div class='textosFI'><p>Gracias por su compra: <b>"+nombre.value+" </b>.</p></div> <div class='factDescrip'> <table class='fact'><tr class='filas'><td class='colum1'>Producto:</td><td class='colum2'>Play Station 5</td></tr> <tr class='filas'><td class='colum1'>Precio:</td><td class='colum2'>$"+precio+"</td></tr><tr><td class='colum1'>Cantidad:</td><td class='colum2'>"+cantidad.value+"</td></tr> <tr class='filas'><td class='colum1'>SubTotal</td> <td class='colum2'>$"+subtotal+"</td></tr> <tr><td class='colum1'>IVA (13%)</td> <td class='colum2'>$"+totalIva+"</td></tr> <tr><td class='colum1'>Total a Pagar</td> <td class='colum2'>$"+total+"</td></tr></div></table></div> <div class='textosFI'><p>Se enviará una confirmación al correo: <b>"+email.value+" </b></p>";

    /*ver.style.opacity = '1';*/
    factura.style.opacity = '1';
    factura.style.transform = 'translateY(-10rem)';
    factura.style.zIndex = '2';

    let boton = document.getElementById('botonFact');

    boton.innerHTML = "<button id='verFact' onclick='verFactura()'>Ver Factura</button>"
    nombre.disabled = true;
    email.disabled = true;
    cantidad.disabled = true;
  }
}

function cerrarFactura() {
  let factura = document.getElementById("factura");
  factura.style.opacity = 0;
  factura.style.transform = 'translateY(10rem)';
  factura.style.zIndex = '-1';
}

function verFactura() {
  let factura = document.getElementById("factura");
  factura.style.opacity = 1;
  factura.style.transform = 'translateY(-10rem)';
  factura.style.zIndex = '2';
}