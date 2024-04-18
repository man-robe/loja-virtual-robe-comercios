//Função para esconder e mostrar o menu nos smartphones 
function clickMenu() {
    if (itens.style.display == 'block')
        itens.style.display = 'none'
    else {
        itens.style.display = 'block'
    } 
        
}

// Função para adicionar dinamicamente produtos na secção de Produtos
function adicionarProduto(imagemSrc, nome, descricao, categoria, preco) {
    // Criar um novo elemento de produto
    var novoProduto = document.createElement('div');
    novoProduto.classList.add('produto');

    // Criar elementos internos para o produto
    var imagem = document.createElement('img');
    imagem.classList.add('imagem');
    imagem.src = imagemSrc;
    imagem.alt = nome;

    var Nome = document.createElement('h4');
    Nome.classList.add('nome');
    Nome.textContent = nome;

    var desc = document.createElement('p');
    desc.classList.add('descricao');
    desc.textContent = descricao;

    var cat = document.createElement('p');
    cat.classList.add('categoria');
    cat.textContent = categoria;

    var precoElement = document.createElement('p');
    precoElement.classList.add('preco');
    precoElement.textContent = preco;

    // Adicionar elementos internos ao novo produto
    novoProduto.appendChild(imagem);
    novoProduto.appendChild(Nome);
    novoProduto.appendChild(desc);
    novoProduto.appendChild(cat);
    novoProduto.appendChild(precoElement);

    // Adicionar o novo produto à secção de Produtos
    var produtosSection = document.querySelector('.NovosEmStock');
    produtosSection.appendChild(novoProduto);
}

// Exemplo de uso da função para adicionar um produto
adicionarProduto('../imgs/ab-foto-p.jpg', 'António Bandeiras', 'eau de parfum', 'perfumes', '$ 50,00');
adicionarProduto('../imgs/dlr-foto-p.jpg', 'Dolores P. Femme', 'eau de parfum', 'perfumes', '$ 25,00');
adicionarProduto('../imgs/gm2-foto-p.jpg', 'Gentle Magic', 'skin serum', 'skincare', '$ 50,00');
adicionarProduto('../imgs/bb-foto-p.jpg', 'Bebeauty', 'Gel hidratante', 'skincare', '$ 25,00');
adicionarProduto('../imgs/zr2-foto-p.jpg', 'Zara Man', 'eau de parfum', 'perfumes', '$ 50,00');
adicionarProduto('../imgs/yr2-foto-p.jpg', 'Yves Rocher', 'Creme', 'skincare', '$ 25,00');
adicionarProduto('../imgs/yr-foto-p.jpg', 'Yves Rocher', 'Creme', 'skincare', '$ 25,00');
adicionarProduto('../imgs/dlr2-foto-p.jpg', 'Yves Rocher', 'Creme', 'skincare', '$ 25,00');



// Função para filtrar os produtos por categoria
function filtrarPorCategoria(categoriaSelecionada) {
    var produtos = document.querySelectorAll('.produto');
    
    produtos.forEach(function(produto) {
        var categoriaProduto = produto.querySelector('.categoria').textContent;
        
        if (categoriaSelecionada === 'todos' || categoriaProduto === categoriaSelecionada) {
            produto.style.display = 'block'; // Mostrar o produto
        } else {
            produto.style.display = 'none'; // Ocultar o produto
        }
    });
}

// Event listener para o elemento select de filtrar por categoria
var selectCategoria = document.getElementById('filtro-categoria');
selectCategoria.addEventListener('change', function() {
    var categoriaSelecionada = this.value; // Obter a categoria selecionada
    filtrarPorCategoria(categoriaSelecionada); // Chamar a função para filtrar os produtos
});



// Função para buscar produtos correspondentes
function buscarProdutos(consulta) {
    var produtos = document.querySelectorAll('.produto');
    
    produtos.forEach(function(produto) {
        var nomeProduto = produto.querySelector('.nome').textContent.toLowerCase();
        
        if (nomeProduto.includes(consulta.toLowerCase())) {
            produto.style.display = 'block'; // Mostrar o produto se o nome corresponder à consulta
        } else {
            produto.style.display = 'none'; // Ocultar o produto se o nome não corresponder à consulta
        }
    });
}

// Event listener para o formulário de busca
var formBusca = document.getElementById('iFormBusca');
formBusca.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar o comportamento padrão de envio do formulário
    
    var consulta = document.getElementById('buscar').value; // Obter o valor do campo de busca
    buscarProdutos(consulta); // Chamar a função para buscar produtos correspondentes
});
