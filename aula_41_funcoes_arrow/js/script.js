// =================================
// FUNCOES DE CALCULO (Arrow Functions)
//==================================
const dobrar = numero => numero * 2;
const triplicar = numero => numero * 3;

// ===================================
// FUNÇÃO DE EXIBIÇÃO DE RESULTADOS
// ===================================
function mostrarResultado(operacao, texto) {
    // Obtem referencias aos elementos do DOM
    const input = document.getElementById('numero'); // Campo de entrada
    const resultado = document.getElementById('resultado'); // Elemento para exibir resultados

    // Convete o valor de string para número decimal
    const numero = parseFloat(input.value);

    // Validação de entrada - verifica se não é um número
    if (isNaN(numero)) {
        resultado.textContent = 'Por favor, digite um número válido.';
        resultado.style.color = 'red'; // Feedback visual de erro
        return;
    }

    // Executa a operação matematica (dobrar ou triplicar)
    const valor = operacao(numero);

    // Formata e exibe o resultado
    resultado.textContent = `${texto} de ${numero} é: ${valor}`;
    resultado.style.color = 'black'; // Cor padrão para resultados válidos
}

// ============================
// EVENT LISTENERS - INTERAÇÃO DO USUARIO
// ============================

// Botão "Dobro" - Calcula e exibe o dobro do numero
document.getElementById('dobro').addEventListener('click', function() {
    mostrarResultado(dobrar, 'O dobro');
});

// Botão "Triplo" - Calcula e exibe o triplo do numero
document.getElementById('triplo').addEventListener('click', function() {
    mostrarResultado(triplicar, 'O triplo');
});

// Campo numerico - Permite calcular com a tecla Enter
document.getElementById('numero').addEventListener('keypress', function(enter) {
    // Verifica se a tecla pressionada foi Enter (codigo 13)
    if(enter.key === 'Enter') {
        // Por padrão, calcular o dobro quando Enter é pressionado
        mostrarResultado(dobrar, 'O dobro')
    }
});