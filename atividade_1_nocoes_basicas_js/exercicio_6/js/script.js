document.addEventListener('DOMContentLoaded', function () {
    const botao = document.getElementById('btnVerificar');
    const entrada = document.getElementById('valor');
    const saida = document.getElementById('resultado');

    botao.addEventListener('click', function () {
        const palavra = entrada.value;

        const palindromo = palavra.split('').reverse().join('');

        if (palavra === palindromo) {
            saida.textContent = "È um palindromo!";
        } else {
            saida.textContent = "Não é um palindromo";
        }
    });
});