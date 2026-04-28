let numeros = [];

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
  agregarNota(notaRecuperada);
  limpiarIngresos();
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
  console.log("Promedio de las:" + numeros.length + " es : " + promedioFinal.toFixed(2));
}

function limpiarIngresos(){
    document.getElementById("ingresoNota").value="";

}
