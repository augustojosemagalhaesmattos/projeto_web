const produtos = [
    {nome: "Sabonete Natural", preço: 15.00, categoria: "cosmetico" },
    {nome: "Shampoo Organico", preço: 25.00, categoria: "cosmetico" },
    {nome: 'Granola Artesanal', preço: 18.50, categoria: "alimento" },
    {nome: 'Mel Puro', preço: 22.00, categoria: "alimento"},
];

document.getElementById('todos').addEventListener('click'), function() {
     const todos = produtos.filter(function(produtos) {
        return produtos
     })
    
    
    
    
    // Exibindo o resultado na página
    document.getElementById('resultado-paraCada').innerHTML = `
        <strong>Array original:</strong> ${JSON.stringify(numeros)}<br>
        <strong>Iteração com forEach:</strong><br>
        ${resultado}
        <small>Observação: forEach não retorna um novo array</small>
    `;
}
