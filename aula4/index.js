let boxHorario = document.getElementById("horaAtual");
let horaSistema = new Date().getHours();
let minutoSistema = new Date().getMinutes();
let corDeFundo = document.querySelector("body");
let img = document.getElementById("img");

if (horaSistema >= 0 && horaSistema < 12) {
  boxHorario.textContent = `Agora são ${horaSistema}:${minutoSistema} horas da manhã`;
  img.src = "style/amanhecer.jpg";
} else if (horaSistema >= 12 && horaSistema < 18) {
  boxHorario.textContent = `Agora são ${horaSistema}:${minutoSistema} horas da tarde`;
  corDeFundo.style.backgroundColor = "rgb(221, 123, 106)";
  img.src = "style/entardecer.jpg";
} else {
  boxHorario.textContent = `Agora são ${horaSistema}:${minutoSistema} horas da noite`;
  corDeFundo.style.backgroundColor = "rgb(68, 67, 67)";
  img.src = "style/noite.jpg"
}
