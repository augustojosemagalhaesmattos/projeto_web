document.addEventListener('DOMContentLoaded', function () {
    const botao_vermelho = document.getElementById('btnVermelho');
    const botao_verde = document.getElementById('btnVerde');
    const botao_azul = document.getElementById('btnAzul');



    botao_vermelho.addEventListener ('click', function () {
        quadrado.style.backgroundColor = 'red';
    })

    botao_verde.addEventListener('click', function () {
        quadrado.style.backgroundColor = 'green';
    })

    botao_azul.addEventListener('click', function () {
        quadrado.style.backgroundColor = 'blue';
    })
})