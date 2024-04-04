let anoNascimento = document.getElementById("ano");
let sexMen = document.getElementById("sexM");
let sexFem = document.getElementById("sexF");
let image = document.getElementById("image");
let section = document.getElementById("section");

function verificar() {
  if (sexMen.checked && anoNascimento.value <= 15) {
    image.src = "style/garotojovem.jpg";
    image.style.width = "150PX";
    image.style.height = "200px";
    image.style.borderRadius = "50%";
    section.style.height = "310px";
    console.log("ok");
  } else if (sexFem.checked && anoNascimento.value <= 15) {
    image.src = "style/garotajovem.jpg";
    image.style.width = "150PX";
    image.style.height = "200px";
    image.style.borderRadius = "50%";
    section.style.height = "310px";
  } else if (sexMen.checked && anoNascimento.value >= 16) {
    image.src = "style/garotoadolescente.jpg";
    image.style.width = "250PX";
    image.style.height = "200px";
    image.style.borderRadius = "50%";
    section.style.height = "310px";
  }
}
