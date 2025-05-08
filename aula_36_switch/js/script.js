// Aguarda o carregamento completo do HTML antes de rodar o script
document.addEventListener('DOMContentLoaded', function () {

    // Obtem o botão com id "btnMostrarDia"
    const botao = document.getElementById('btnMostrarDia');

    // Obtem o campo de entrada com id "numeroDia" (onde o usuario digita o número)
    const entrada = document.getElementById('numeroDia');

    // Obtem o elemento com id "respostaDia", onde será exibido o nome do dia
    const saida = document.getElementById('respostaDia');

    // Adiciona um evento ao botão para exeutar uma função quando ele for clicado
    botao.addEventListener('click', function () {

        // Convert o valor digitando pelo usuario (string) em numero inteiro
        const numero = parseInt(entrada.value);

        // Verifica o valor da variavel "numero" e exibe o dia correspondente
        switch (numero) {
            case 1: 
                saida.textContent = 'Domingo';
                break;
            case 2: 
                saida.textContent = 'Segunda-feira';
                break;
            case 3:
                saida.textContent = 'Terça-feira';
                break;
            //complete até sábado...
            default:
                saida.textContent = 'Número invalida!';
                break;
        }
    })
})