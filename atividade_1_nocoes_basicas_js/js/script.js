document.addEventListener('DOMContentLoaded', function () {

    //botao do resultado
    const soma = document.getElementById('btnSoma')
    const subtracao = document.getElementById('btnSubtrai')
    const multiplicacao = document.getElementById('btnMultiplica')
    const divisao = document.getElementById('btnDivide')

    const entrada1 = document.getElementById('num1')
    const entrada2 = document.getElementById('num2')

    const resultado = document.getElementById('resultado')

    // Quando clicar no botão de soma
    soma.addEventListener('click', function () {
        resposta = parseFloat(entrada1.value) + parseFloat(entrada2.value)
        resultado.textContent = resposta
    });

    // Quando clicar no botão de subtração
    subtracao.addEventListener('click', function () {
        resposta = parseFloat(entrada1.value) - parseFloat(entrada2.value)
        resultado.textContent = resposta
    });

    // Quando clicar no botão de multiplicação
    multiplicacao.addEventListener('click', function () {
        resposta = parseFloat(entrada1.value) * parseFloat(entrada2.value)
        resultado.textContent = resposta
    });

    // Quando clicar no botão de divisão
    divisao.addEventListener('click', function () {
        const n1 = parseFloat(entrada1.value);
        const n2 = parseFloat(entrada2.value);
        if (n2 === 0) {
            resultado.textContent = 'Divisão por zero!';
        } else {
            resultado.textContent = 'Resultado: ' + (n1 / n2);
        }
    });
    })

