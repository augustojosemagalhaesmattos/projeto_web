// Aguarda o carregamneto completo do HTML antes de executar o script
document.addEventListener('DOMContentLoaded', function () {

    // Obtem a referencia ao elemento <ul> com id "listaBreakContinue"
    const ul =  document.getElementById('listaBreakContinue');

    // Função que limpa todo o conteudo da lista (zera o conteudo da <ul>)
    const limpar = () => ul.innerHTML = '';

    // Função que adiciona um item <li> com o texto especificado dentro da <ul>
    const add = texto => {
        // Cria um novo elemento <li>
        const li = document.createElement('li');
        //Difine o texto do <li>
        li.textContent = texto;
        // Adiciona o <li> dentro da <ul>
        //append: adiciona um elemento filho dentro de outro elemento HTML.
        ul.appendChild(li);
    };

    // Evento ao clicar no botão com id "btnBreak"
    document.getElementById('btnBreak').addEventListener('click', function () {
        limpar();

        // Loop de 1 a 50 
        for (let i = 1; i <=50; i++) {

            // Se o numero for divisivel por 13...
            if (i % 13 === 0) {
                // Adiciona mensagem
                add('Parou no ' + i + ' (divisivel por 13!)');
                // Encerra o loop imediatamente
                break;
            }
            // Caso não seja divisivel por 13 , apenas adiciona o numero na listagem
            add(i);
        }
    });

    // Evento ao clicar no botão com id "btnContinue"
    document.getElementById('btnContinue').addEventListener('click', function () {
        limpar();

        // Loop de 1 a 5
        for (let i = 1; i <= 5; i++) {

            // Se o numero for 3, pula a iteração atual (não adiciona o 3)
            if (i === 3) continue;
            // Adiciona o numero normalmente se não for 3
            add(i);
        }
    })
});