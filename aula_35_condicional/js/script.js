// Aguarda o carregamento completo do conteudo HTML antes de executar o codigo
document.addEventListener('DOMContentLoaded', function(){

    // Obtém a referencia ao  botão com id "btnVerificar"
    const btn = document.getElementById('btnVerificar');

    // Obtém a referencia ao campo de entrada (input) com id "idade"
    const input = document.getElementById('idade');

    // Obtem a referencia ao elemento onde o resultado sera exibido (com id "resultado")
    const resultado = document.getElementById('resultado');

    // Adiciona um ouvinte de evento ao botão para reagir ao clique
    btn.addEventListener('click', function(){

        const idade = parseInt(input.value);

        if (idade < 18){
            //textContent: permite ler ou alterar o texto contido dentro de um elemento
            resultado.textContent = 'Menor Idade!';

        // Verifica se a idade é exatamente 18
        } else if (idade === 18) {
            resultado.textContent = 'Tem exatamente 18 anos!';
        
        } else {
            resultado.textContent = 'Maior idade!'
        }
    })
})