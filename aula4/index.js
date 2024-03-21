let boxHorario = document.getElementById("horaAtual");
let horaSistema = new Date().getHours();
boxHorario.textContent = `Agora são ${horaSistema} horas`;
let corDeFundo = document.querySelector("body");
let divImage = document.querySelector("div");
let entardercerURL =
  "https://images.pexels.com/photos/724507/pexels-photo-724507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
let anoitecerURL =
  "https://images.pexels.com/photos/1539225/pexels-photo-1539225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

if (horaSistema <= 12) {
  boxHorario.textContent = `Agora são ${horaSistema} horas da manhã`;
} else if (horaSistema >= 13 && horaSistema <= 18) {
  boxHorario.textContent = `Agora são ${horaSistema} horas da tarde`;
  corDeFundo.style.backgroundColor = "rgb(221, 123, 106)";
  divImage.style.backgroundImage = `url(${entardercerURL})`;
} else {
  boxHorario.textContent = `Agora são ${horaSistema} horas da noite`;
  corDeFundo.style.backgroundColor = "rgb(68, 67, 67)";
  divImage.style.backgroundImage = `url(${anoitecerURL})`;
}
