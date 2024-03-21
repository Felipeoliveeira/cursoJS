let boxHorario = document.getElementById("horaAtual");
let horaSistema = new Date().getHours();
boxHorario.textContent = `Agora são ${horaSistema} horas`;
let corDeFundo = document.querySelector("body");
let divImage = document.querySelector("div");
let entardercerURL = "https://images.pexels.com/photos/724507/pexels-photo-724507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
let anoitecerURL = "https://images.pexels.com/photos/1539225/pexels-photo-1539225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

if (horaSistema > 12 && horaSistema < 18) {
  boxHorario.textContent = `Agora são ${horaSistema} horas da tarde`;
  corDeFundo.style.backgroundColor = "rgb(255, 127, 80)";
  divImage.style.backgroundImage = `url(${entardercerURL})`;
} else if (horaSistema > 18 && horaSistema < 24) {
  boxHorario.textContent = `Agora são ${horaSistema} horas da noite`;
  corDeFundo.style.backgroundColor = "rgb(128, 128, 128)";
  divImage.style.backgroundImage = `url(${anoitecerURL})`;
} else {
  boxHorario.textContent = `Agora são ${horaSistema} horas da manhã`;
}
