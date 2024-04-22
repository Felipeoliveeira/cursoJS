function contar(){
    let inicio = document.getElementById("inicio").value;
    let fim = document.getElementById('fim').value;
    let passo = document.getElementById('passo').value;
    let containerRes = document.getElementById('res');
    let sequencia = '';
    inicio = Number(inicio);
    passo = Number(passo);
    fim = Number(fim);

    if(inicio == "" || fim == "" || passo == ""){
        alert("Favor preencha os campos corretamente")
    }

    while ( inicio < fim){
        inicio += passo
        if( inicio < fim){
            sequencia += inicio + '\u{1F449} '
            containerRes.innerText = sequencia + '\u{1F3C1}'
            console.log(sequencia)
        }
    }

    while ( inicio > fim){
        inicio -= passo
        if( inicio > fim){
            sequencia += inicio + ', '
            containerRes.innerText = sequencia
            console.log(sequencia)
        }
    }
}
