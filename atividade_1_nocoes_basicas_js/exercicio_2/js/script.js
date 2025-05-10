document.addEventListener('DOMContentLoaded', function () {
    //botao
    const botao = document.getElementById('btnResultado');
    const entrada = document.getElementById('valor');
    const saida = document.getElementById('resultado');

    botao.addEventListener('click', function () {
        const numero = entrada.value;
        
        if (numero < 0) {
            saida.textContent = 'O número é negativo';
        }

        else if (numero > 0) {
            saida.textContent = 'O número é positivo';
        }
    })
})