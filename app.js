let voto;
let Morango = 0;
let Banana = 0;
let totalVotos = 0;
function opMorango() {
    Morango++;
    voto = "Morango";
    saida();
}
function opBanana() {
    Banana++;
    voto = "Banana";
    saida();
}
function saida(){
    totalVotos++;
    document.getElementById("mostraVoto").innerHTML = voto;
    document.getElementById("mostraMorango").innerHTML = Morango;
    document.getElementById("mostraBanana").innerHTML = Banana;
    document.getElementById("mostraTotalVotos").innerHTML = totalVotos;
}
