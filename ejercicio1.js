let numeros = [];
let primeraVez = true;

function agregarElementos() {
  numeros.push(5);
  numeros.push(10);
  console.log(numeros);
}

function agregarNota(ingresoNota) {
  numeros.push(ingresoNota);
}

function probarAgregar() {
  let notaRecuperada = recuperarInt("ingresoNota");
  if (isNaN(notaRecuperada)) {
    alert("Ingrese un número válido"); // 🔥 validación
    return;
  }
  if (notaRecuperada < 0 || notaRecuperada > 10) {
    alert("La nota debe estar entre 0 y 10");
    return;
  }
  agregarNota(notaRecuperada);
  limpiarIngresos();
  mostarMiNota();
}

function recuperarDato() {
  let notaRecuperada;
  for (let i = 0; i < numeros.length; i++) {
    notaRecuperada = numeros[i];
    console.log(notaRecuperada);
  }
}

function promedionotas() {
  let suma = 0;
  let promedioFinal;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  promedioFinal = suma / numeros.length;
  console.log("Suma notas:" + suma);
  console.log(
    "Promedio de las:" + numeros.length + " es : " + promedioFinal.toFixed(2),
  );
}

function limpiarIngresos() {
  document.getElementById("ingresoNota").value = "";
}

function generarTabla() {
  let contenidoTabla = "";

  contenidoTabla += `<table>
          <tr>
            <th>CABEZERA 10</th>
            <th>CABEZERA 11</th>
            <th>CABEZERA 12</th>
          </tr>
          <tr>
            <td>celda 13</td>
            <td>celda 14</td>
            <td>celda 15</td>
          </tr>
          <tr>
            <td>celda 16</td>
            <td>celda 17</td>
            <td>celda 18</td>
          </tr>
          <tr>
            <td>celda 19</td>
            <td>celda 20</td>
            <td>celda 21</td>
          </tr>
        </table>`;
  let recibirId = document.getElementById("generarTabla");
  recibirId.innerHTML = contenidoTabla;
}

function mostarMiNota() {
  let cmpTextoTabla = document.getElementById("generarTabla");

  let suma = 0;

  let contenidoTabla = `
  <div>
  
  <table class="tabla-header">
    <thead>
      <tr>
        <th>#</th>
        <th>Nota</th>
      </tr>
    </thead>
  </table>

  <div class="tabla-scroll">
    <table>
      <tbody>
`;

  for (let i = 0; i < numeros.length; i++) {
    let miNota = numeros[i];
    suma += miNota;

    let color = miNota < 7 ? "red" : "white";

    contenidoTabla += `
      <tr>
        <td>${i + 1}</td>
        <td style="color:${color}">${miNota}</td>
      </tr>
    `;
  }

  let promedio = numeros.length > 0 ? (suma / numeros.length).toFixed(2) : 0;

  contenidoTabla += `
      </tbody>
    </table>
  </div>

  <div class="tabla-footer">
    Promedio: ${promedio}
  </div>
  </div> 
`;

  cmpTextoTabla.innerHTML = contenidoTabla;

  setTimeout(() => {
    let contenedor = document.querySelector(".tabla-scroll");
    if (contenedor) {
      contenedor.scrollTop = contenedor.scrollHeight;
    }
  }, 0);
}