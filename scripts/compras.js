// Função para adicionar produtos dinamicamente em uma seção específica
// Array de objetos contendo informações sobre os produtos
var produtosDisponiveis = [
    { nome: "Antonio Bandeiras", imagem: "../imgs/ab-foto-g.jpg", descricao: " eau de parfum ", preco: "10.000,00 kz" },
    { nome: "Dolores Femme", imagem: "../imgs/dlr2-foto-g.jpg", descricao: " eau de parfum ", preco: "15.000,00 kz" },
    { nome: "Gentle Magic", imagem: "../imgs/gm2-foto-g.jpg", descricao: " skincare serum ", preco: "20.000,00 kz" },
    { nome: "Bebeauty", imagem: "../imgs/bb-foto-g.jpg", descricao: " skincare gel ", preco: "31.000,00 kz" },
];

var maisVendidos = [
    { nome: "Zara Man", imagem: "../imgs/zr-foto-g.jpg", descricao: " eau de parfum ", preco: "9.000,00 kz" },
    { nome: "Gentle Magic", imagem: "../imgs/gm2-foto-g.jpg", descricao: " skincare serum ", preco: "10.000,00 kz" },
    { nome: "Antonio Bandeiras", imagem: "../imgs/ab-foto-g.jpg", descricao: " eau de parfum ", preco: "10.000,00 kz" },
    { nome: "Bebeauty", imagem: "../imgs/bb-foto-g.jpg", descricao: " skincare gel ", preco: "31.000,00 kz" },
    { nome: "Dolores Femme", imagem: "../imgs/dlr2-foto-g.jpg", descricao: " eau de parfum ", preco: "15.000,00 kz" },
    { nome: "Yves Rocher 2", imagem: "../imgs/yr2-foto-g.jpg", descricao: " skincare creme ", preco: "8.000,00 kz" },
    { nome: "Yves Rocher", imagem: "../imgs/yr-foto-g.jpg", descricao: " skincare creme ", preco: "8.000,00 kz" },
    { nome: "Zara Man 2", imagem: "../imgs/zr2-foto-g.jpg", descricao: " eau de parfum ", preco: "13.000,00 kz" },
];

var novosEmStock = [
    { nome: "Yves Rocher 2", imagem: "../imgs/yr2-foto-g.jpg", descricao: " skincare creme ", preco: "8.000,00 kz" },
    { nome: "Yves Rocher", imagem: "../imgs/yr-foto-g.jpg", descricao: " skincare creme ", preco: "8.000,00 kz" },
    { nome: "Zara Man 2", imagem: "../imgs/zr2-foto-g.jpg", descricao: " eau de parfum ", preco: "13.000,00 kz" },
    { nome: "Bebeauty", imagem: "../imgs/bb-foto-g.jpg", descricao: " skincare gel ", preco: "16.000,00 kz" },
];


var emDestaque = [
    
    { nome: "Gentle Magic", imagem: "../imgs/gm2-foto-g.jpg", descricao: " skincare serum ", preco: "10.000,00 kz" },
    { nome: "Antonio Bandeiras", imagem: "../imgs/ab-foto-g.jpg", descricao: " eau de parfum ", preco: "10.000,00 kz" },
    { nome: "Bebeauty", imagem: "../imgs/bb-foto-g.jpg", descricao: " skincare gel ", preco: "31.000,00 kz" },
    { nome: "Dolores Femme", imagem: "../imgs/dlr2-foto-g.jpg", descricao: " eau de parfum ", preco: "15.000,00 kz" },
    { nome: "Yves Rocher 2", imagem: "../imgs/yr2-foto-g.jpg", descricao: " skincare creme ", preco: "8.000,00 kz" },
    { nome: "Zara Man 2", imagem: "../imgs/zr2-foto-g.jpg", descricao: " eau de parfum ", preco: "13.000,00 kz" },
];


// Função para adicionar produtos dinamicamente a uma seção
function adicionarProdutosNaSecao(produtos, secaoClass, ordenacao, direcao) {
    var secao = document.querySelector(secaoClass);

    // Ordena os produtos de acordo com o critério especificado
    if (ordenacao === 'preco') {
        produtos.sort(function(a, b) {
            var precoA = parseFloat(a.preco.replace(',', '.'));
            var precoB = parseFloat(b.preco.replace(',', '.'));

            if (direcao === 'asc') {
                return precoA - precoB;
            } else if (direcao === 'desc') {
                return precoB - precoA;
            } else {
                // Padrão: ordem de adição ao array
                return 0;
            }
        });
    } else {
        // Padrão: ordem de adição ao array
    }

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

        var descricaoProduto = document.createElement('p');
        descricaoProduto.textContent = produto.descricao;
        descricaoProduto.classList.add('descricao');

        var precoProduto = document.createElement('p');
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

// Adiciona os produtos às seções correspondentes, ordenados por preço (ascendente)
adicionarProdutosNaSecao(produtosDisponiveis, '.produtos-disponiveis', 'preco', 'asc');
adicionarProdutosNaSecao(maisVendidos, '.mais-vendidos', 'preco', 'asc');
adicionarProdutosNaSecao(novosEmStock, '.novos-em-stock', 'preco', 'asc');

// Função para lidar com o envio do formulário de busca
document.getElementById('iFormBusca').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão de enviar o formulário

    // Obtém o valor de busca do campo de entrada
    var termoBusca = document.getElementById('buscar').value.trim().toLowerCase();

    // Filtra os produtos disponíveis com base no termo de busca
    var produtosFiltrados = produtosDisponiveis.filter(function(produto) {
        // Verifica se o nome do produto contém o termo de busca
        return produto.nome.toLowerCase().includes(termoBusca);
    });

    // Limpa a seção de produtos
    var secaoProdutos = document.querySelector('.produtos-disponiveis');
    secaoProdutos.innerHTML = '';

    // Adiciona os produtos filtrados à seção de produtos, mantendo a ordenação por preço (ascendente)
    adicionarProdutosNaSecao(produtosFiltrados, '.produtos-disponiveis', 'preco', 'asc');

    // Limpa o campo de busca
    document.getElementById('buscar').value = '';

});





// Adicionar produtos em destaque ao carrossel
function adicionarProdutosMaisVendidos(produtos, containerClass) {
    var carouselContainer = document.querySelector(containerClass);
    produtos.forEach(function(produto) {
        var divProduto = document.createElement('div');
        divProduto.classList.add('destaque');

        // Crie os elementos de imagem, título, descrição e preço e adicione-os a divProduto
        var imagemProduto = document.createElement('img');
        imagemProduto.src = produto.imagem;
        imagemProduto.alt = produto.nome;

        var tituloProduto = document.createElement('h3');
        tituloProduto.textContent = produto.nome;
        tituloProduto.classList.add('h3')
       

        var descricaoProduto = document.createElement('p');
        descricaoProduto.textContent = produto.descricao;
        descricaoProduto.classList.add('descricao')
        
        var precoProduto = document.createElement('p');
        precoProduto.textContent = produto.preco;
        precoProduto.classList.add('preco')

        // Adicione os elementos à divProduto
        divProduto.appendChild(imagemProduto);
        divProduto.appendChild(tituloProduto);
        


        carouselContainer.appendChild(divProduto);

    });
}

adicionarProdutosMaisVendidos(emDestaque, '.carousel-container');

// Funcionalidade do Carrossel
var carousel = document.querySelector('.carousel-container');
var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');

var slideWidth = carousel.offsetWidth;
var slideIndex = 0;

function slide(direction) {
    if (direction === 'next' && slideIndex < (carousel.children.length - 2.)) {
        slideIndex++;
    } else if (direction === 'prev' && slideIndex > 0) {
        slideIndex--;
    }

    carousel.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}

prevBtn.addEventListener('click', function() {
    slide('prev');
});

nextBtn.addEventListener('click', function() {
    slide('next');
});



// Função para filtrar produtos por categoria
function filtrarPorCategoria(categoria, produtos) {
    if (categoria === 'todos') {
        return produtos;
    } else {
        return produtos.filter(function(produto) {
            return produto.categoria === categoria;
        });
    }
}

document.getElementById('filtro-categoria').addEventListener('change', function() {
    var categoriaSelecionada = this.value;
    var produtosFiltrados = filtrarPorCategoria(categoriaSelecionada, todosOsProdutos);
    // Limpar a seção de produtos e adicionar os produtos filtrados
});








// Função para exibir produtos em uma determinada página
function exibirProdutosNaPagina(produtos, paginaAtual, produtosPorPagina) {
    var startIndex = (paginaAtual - 1) * produtosPorPagina;
    var endIndex = startIndex + produtosPorPagina;
    var produtosDaPagina = produtos.slice(startIndex, endIndex);
    // Limpar a seção de produtos e adicionar produtosDaPagina
}

// Função para atualizar os números da página
function atualizarNumerosDaPagina(totalProdutos, paginaAtual, produtosPorPagina) {
    var totalPages = Math.ceil(totalProdutos / produtosPorPagina);
    var pageNumbers = document.querySelector('.page-numbers');
    pageNumbers.textContent = `Página ${paginaAtual} de ${totalPages}`;
}

document.querySelector('.prev-page').addEventListener('click', function() {
    // Ir para a página anterior
});

document.querySelector('.next-page').addEventListener('click', function() {
    // Ir para a próxima página
});

