let sexMen = document.getElementById("sexM");
let sexFem = document.getElementById("sexF");
let image = document.getElementById("image");
let mensage = document.getElementById('mensage');

function verificar() {
  let anoAtual = new Date().getFullYear();
  let anoNascimento = document.getElementById('ano').value;
  let idade = anoAtual - Number.parseInt(anoNascimento);

  if (sexMen.checked &&  idade <= 15) {
    mensage.innerText = `Detectamos um jovem de ${idade} anos de idade`
    image.src = "style/homemjovem.jpg";
  } else if (sexFem.checked && idade <= 15) {
    mensage.innerText = `Detectamos uma jovem de ${idade} anos de idade`
    image.src = "style/mulherjovem.jpg";
  } else if (sexMen.checked && idade < 40) {
    mensage.innerText = `Detectamos um homem de ${idade} anos de idade`
    image.src = "style/homem.jpg";
  } else if (sexFem.checked && idade < 40) {
    mensage.innerText = `Detectamos uma mulher de ${idade} anos de idade`;
    image.src = "style/mulher.jpg";
  } else if (sexFem.checked && idade >= 40) {
    mensage.innerText = `Detectamos uma mulher de ${idade} anos de idade`;
    image.src = "style/mulherIdosa.jpg";
  } else if (sexMen.checked && idade >= 40) {
    mensage.innerText = `Detectamos um homem de ${idade} anos de idade`;
    image.src = "style/homemidoso.jpg";
  }
}
