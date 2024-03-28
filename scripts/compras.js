// Função para adicionar produtos dinamicamente em uma seção específica
// Array de objetos contendo informações sobre os produtos
var produtosDisponiveis = [
    { nome: "Antonio Bandeiras", imagem: "../imgs/ab-foto-g.jpg", descricao: " eau de parfum ", preco: "10.000,00 kz", },
    { nome: "Dolores Femme", imagem: "../imgs/dlr2-foto-g.jpg", descricao: " eau de parfum ", preco: "10.000,00 kz", },
    { nome: "Gentle Magic", imagem: "../imgs/gm2-foto-g.jpg", descricao: " skincare serum ", preco: "10.000,00 kz", },
    { nome: "Bebeauty", imagem: "../imgs/bb-foto-g.jpg", descricao: " skincare gel ", preco: "10.000,00 kz", }
 
    // Adicione mais objetos conforme necessário
];


var maisVendidos = [
    { nome: "Zara Man", imagem: "../imgs/zr-foto-g.jpg", descricao: " eau de parfum ", preco: "10.000,00 kz", },
    { nome: "Yves Rocher 2", imagem: "../imgs/yr2-foto-g.jpg", descricao: " skincare creme ", preco: "10.000,00 kz", },
    { nome: "Lookit", imagem: "../imgs/lk-foto-g.jpg", descricao: " eau de parfum ", preco: "10.000,00 kz", },
    { nome: "Gentle Magic", imagem: "../imgs/gm2-foto-g.jpg", descricao: " skincare serum ", preco: "10.000,00 kz", },
    // Adicione mais objetos conforme necessário
];


var NovosEmStock = [
    { nome: "Yves Rocher", imagem: "../imgs/yr-foto-g.jpg", descricao: "skincare creme ", preco: "10.000,00 kz", },
    { nome: "Yves Rocher", imagem: "../imgs/yr-foto-g.jpg", descricao: " skincare creme ", preco: "10.000,00 kz", },
    { nome: "Zara Man 2", imagem: "../imgs/zr2-foto-g.jpg", descricao: " eau de parfum ", preco: "10.000,00 kz", },
    { nome: "Bebeauty", imagem: "../imgs/bb-foto-g.jpg", descricao: " skincare gel ", preco: "10.000,00 kz", },
    // Adicione mais objetos conforme necessário
];

// Função para adicionar produtos dinamicamente a uma seção
function adicionarProdutosNaSecao(produtos, secaoClass) {
    var secao = document.querySelector(secaoClass);

    produtos.forEach(function(produto) {
        // Cria elementos HTML para cada produto
        var divProduto = document.createElement('div');
        divProduto.classList.add('produto');

        var imagemProduto = document.createElement('img');
        imagemProduto.src = produto.imagem;
        imagemProduto.alt = produto.nome;

        var nomeProduto = document.createElement('h4');
        nomeProduto.textContent = produto.nome;
        nomeProduto.classList.add('h4');

        var descricaoProduto = document.createElement('descricao');
        descricaoProduto.textContent = produto.descricao;
        descricaoProduto.classList.add('descricao')

        var precoProduto = document.createElement('preco');
        precoProduto.textContent = produto.preco;
        precoProduto.classList.add('preco');

        // Adiciona elementos à div do produto
        divProduto.appendChild(imagemProduto);
        divProduto.appendChild(nomeProduto);
        divProduto.appendChild(descricaoProduto);
        divProduto.appendChild(precoProduto);

        // Adiciona a div do produto à seção
        secao.appendChild(divProduto);
    
    });
}

// Adiciona os produtos às seções correspondentes
adicionarProdutosNaSecao(produtosDisponiveis, '.produtos-disponiveis');
adicionarProdutosNaSecao(maisVendidos, '.mais-vendidos');
adicionarProdutosNaSecao(NovosEmStock, '.novos-em-stock');





/*Funcão para buscar e mostrar resultados */













/**Função para a lista de sugestão/ */
