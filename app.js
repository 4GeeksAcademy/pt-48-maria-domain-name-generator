function recibePalabrasFormulario() {
  const entradaFija = document.getElementById('entradaFija').value;
  const palabras2 = document.getElementById('palabras2').value.split(" ");
  const palabras3 = document.getElementById('palabras3').value.split(" ");
  generarOpcionesDeDominios(entradaFija,palabras2,palabras3);
}
function  quitarEspaciosPrimerInput(input) {
  
  input.value = input.value.replace(/\s/g, '');
  
  if (input.value.length > 10) {
    input.value = input.value.substring(0, 10);
  }
}

function generarOpcionesDeDominios(p1,p2,p3) {
  let texto = "";
  for (let i = 0; i < p2.length; i++) {
    for (let j = 0; j < p3.length; j++) {
      texto += `<li class="">
                  ${p1}${p2[i]}${p3[j]}.com
                </li>`;
    }  
  }
  document.getElementById("lista").innerHTML = texto;
}
