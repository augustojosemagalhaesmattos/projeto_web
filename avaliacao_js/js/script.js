document.addEventListener('DOMContentLoaded', function () {
    const botaoAdicionar = document.getElementById('btnAdicionar');
    const botaoSubtrair = document.getElementById('btnSubtrair');
    const botaoZerar = document.getElementById('btnZerar');
    const valor = document.getElementById('valor');

    let contador = 0;

    botaoAdicionar.addEventListener('click', function () {

        contador++;
        valor.textContent = contador;

    });

    botaoSubtrair.addEventListener('click', function () {

        contador--;
        valor.textContent = contador;

    });

    botaoZerar.addEventListener('click', function () {

        contador = 0;
        valor.textContent = contador;

    });
});