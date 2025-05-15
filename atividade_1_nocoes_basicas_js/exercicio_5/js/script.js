document.addEventListener('DOMContentLoaded', function () {
    const botao = document.getElementById('btnAdicionar');
    const entrada = document.getElementById('valor');
    const saida = document.getElementById('listaTarefas')

    botao.addEventListener('click', function () {
        const texto = entrada.value;

        if (texto !== '') {
            const item = document.createElement('li');
            item.textContent = texto
            saida.appendChild(item);

            entrada.value = '';
        }
    })
})