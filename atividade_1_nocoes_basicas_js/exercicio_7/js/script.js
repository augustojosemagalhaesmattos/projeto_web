document.addEventListener('DOMContentLoaded', function () {
    const botao = document.getElementById('btnVerificar');
    const entrada = document.getElementById('valor');
    const saida = document.getElementById('resultado');

    let num1 = (Math.random() * 10);
    let num2 = Math.round(num1);

botao.addEventListener('click', function () {

   let conversao = parseInt(entrada.value);

    if (conversao === num2) {
        saida.textContent = "PARABENS, VOCE ACERTOOU!!!";
    } else if (conversao > num2) {
        saida.textContent = "Quase lá, o numero sorteado é MAIOR";
    } else if (conversao < num2) {
        saida.textContent = "Quase la, o numero sorteado é MENOR";
    };
});
});