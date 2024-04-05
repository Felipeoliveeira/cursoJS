let anoAtual = new Date().getFullYear();
let anoNascimento = document.getElementById('ano');
let sexMen = document.getElementById("sexM");
let sexFem = document.getElementById("sexF");
let image = document.getElementById("image");

function verificar() {
  if (sexMen.checked && anoNascimento.value <= 15) {
    image.src = "style/garotojovem.jpg";
  } else if (sexFem.checked && anoNascimento.value <= 15) {
    image.src = "style/garotajovem.jpg";
  } else if (sexMen.checked && anoNascimento.value >= 16) {
    image.src = "style/garotoadolescente.jpg";
  } else if (sexFem.checked && anoNascimento.value >= 16) {
    image.src = "style/garotaadolescente.jpg";
  }
  console.log(aN);
}
