let anoNascimento = document.getElementById('ano');
let sexMen = document.getElementById('sexM');
let sexFem = document.getElementById('sexF');
let image = document.getElementById('image')
function verificar(){

    if( sexMen.checked && anoNascimento.value < 13 ){
        image.src = "style/criancaHomem.png"
        console.log('ok')
    }

}