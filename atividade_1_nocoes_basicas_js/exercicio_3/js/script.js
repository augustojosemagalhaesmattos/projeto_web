document.addEventListener('DOMContentLoaded', function () {
    const botao = document.getElementById('btnVerificar');
    const entrada = document.getElementById('valor');
    const saida = document.getElementById('resultado');

    botao.addEventListener('click', function () {
        const caracteres = entrada.value;

        const totalCaracteres = caracteres.length

        saida.textContent =  `Quantidade de Caracteres: ${totalCaracteres}`;

    } )
})