/**
 * ARQUIVO: metodos.js
 * DESCRIÇÂO: Demostração dos principais métodos de iteração de arrays em JavaScript
 * AUTOR: [Seu Nome]
 * DATA: [Data]
 * VERSÂO: 1.0
 */

//===========================
// DADOS DE EXEMPLO
//===========================

// Array de números para exemplos básicos
const numeros = [1, 2, 3, 4, 5];

// Array de números para exemplos mais complexos
const pessoas = [
    { nome: 'Gal Gadot', idade: 40, cidade: 'Rosh HaAyin' },
    { nome: 'Elizabeth Olsen', idade: 36, cidade: 'Sherman Oaks' },
    { nome: 'Alexandra Daddario', idade: 39, cidade: 'Nova York' },
    { nome: 'Anna de Armas', idade: 37, cidade: 'Havana' },
    { nome: 'Grace Kelly', idade: 95, cidade: 'Filadélfia' },
    { nome: 'Jaz Sinclair', idade: 17, cidade: 'Dalla' }
];

// ============================
// MÉTODOS DE ITERAÇÂO
// ============================

/**
 * METODO: forEach() (paraCada)
 * DESCRIÇÃO: Executa uma função para cada elemento do array
 * NÃO RETORNA um novo array
 */
document.getElementById('botao-paraCada').addEventListener('click', function() {
    // Variavel para acumular os resultados
    let resultado = '';

        // Usando forEach para iterar sobre cada número
    numeros.forEach(function(numero, indice) {
        resultado += `Posição ${indice}: ${numero}\n`;
    });

    // Exibindo o resultado na página
    document.getElementById('resultado-paraCada').innerHTML = `
        <strong>Array original:</strong> ${JSON.stringify(numeros)}<br>
        <strong>Iteração com forEach:</strong><br>
        ${resultado}
        <small>Observação: forEach não retorna um novo array</small>
    `;
});

/**
 * MÉTODO: map() (mapear)
 * DESCRIÇÃO: Cria um novo array com os resultados de uma função aplicada a cada elemento
 */
document.getElementById('botao-mapear').addEventListener('click', function() {
    // Usando map para criar um novo array com os quadrados dos números
    const quadrados = numeros.map(function(numero) {
        return numero * numero;
    });

    // Exibindo o resultado
    document.getElementById('resultado-mapear').innerHTML = `
        <strong>Array original:</strong> ${JSON.stringify(numeros)}<br>
        <strong>Array com quadrados (map):</strong> ${JSON.stringify(quadrados)}<br>
        <small>Observação: map sempre retorna um novo array do mesmo tamanho</small>
    `;
});

/**
 * MÉTODO: filter() (filtrar)
 * DESCRIÇÃO: Cria um novo array com elementos que passam em um teste (função)
 */

