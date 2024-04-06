let sexMen = document.getElementById("sexM");
let sexFem = document.getElementById("sexF");
let image = document.getElementById("image");
let mensage = document.getElementById('mensage');

function verificar() {
  let anoAtual = new Date().getFullYear();
  let anoNascimento = document.getElementById('ano').value;
  let idade = anoAtual - Number.parseInt(anoNascimento);

  if (sexMen.checked &&  idade <= 15) {
    mensage.innerText = `Você é um jovem de ${idade} anos de idade`
    image.src = "style/garotojovem.jpg";
  } else if (sexFem.checked && idade <= 15) {
    mensage.innerText = `Você é uma jovem de ${idade} anos de idade`
    image.src = "style/garotajovem.jpg";
  } else if (sexMen.checked && idade >= 16) {
    mensage.innerText = `Você é um rapaz de ${idade} anos de idade`
    image.src = "style/garotoadolescente.jpg";
  } else if (sexFem.checked && idade >= 16) {
    mensage.innerText = `Você é um jovem de ${idade} anos de idade`;
    image.src = "style/garotaadolescente.jpg";
  }
  console.log(idade);
}
