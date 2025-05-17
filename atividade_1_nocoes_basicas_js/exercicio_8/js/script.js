document.addEventListener('DOMContentLoaded', function () {
    const botao = document.getElementById('bntVerificar');
    const entrada = document.getElementById('valor');
    const saida = document.getElementById('resultado');

botao.addEventListener('click', function () {
    if (parseInt(entrada.value) == entrada.value) {
        saida.textContent = `Tipo number: ${entrada.value}!`
        
    }
     
})
})