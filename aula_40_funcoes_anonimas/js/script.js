// Define um função de saudação que recebe um nome como parametro
// Esta função retorna uma mensagem de boas-vindas personalizada
const saudacao = function (nome) {
    return`Olá, ${nome}! Seja bem-vindo(a).`;
};

// Esta função exibe uma mensagem no elemento de resultado da pagina
// Recebe a mensagem como paramentro e a insere no HTML
const mostrarResultado = (mensagem) => {
    // Obtem o elemento do DOM com ID 'resultado'
    const resultadoElement = document.getElementById('resultado');
        // Define o conteudo HTMl do elemento com a mensagem formatada em um paragrafo
        resultadoElement.innerHTML = `<p>${mensagem}</p>`;
};

// Aguarda o evento de que todo o DOM foi carregado antes antes de executar o codigo
document.addEventListener('DOMContentLoaded', () => {
    //Obtem referencia aos botões do DOM pelos seus IDs
    const saudarBtn = document.getElementById('saudar');
    const limparBtn = document.getElementById('limpar');

    // Adiciona um listener de evento de clique no botão "Saudar"
    saudarBtn.addEventListener('click', function () {
        // Chama a função de saudação com o nome "João" e armazena o resultado
        const mensagem = saudacao("João");
        // Chama a função para exibir o resultado na pagina
        mostrarResultado(mensagem);
    });

    // Adiciona um listener de evento de clique no botão "Limpar"
    limparBtn.addEventListener('click', () => {
        // Limpa o conteudo do elemento de resultado definindo seu HTML para vazio
        document.getElementById('resultado').innerHTML = '';
    });
});