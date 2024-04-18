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

    var nomeElement = document.createElement('h4');
    nomeElement.classList.add('nome');
    nomeElement.textContent = nome;

    var descElement = document.createElement('p');
    descElement.classList.add('descricao');
    descElement.textContent = descricao;

    var catElement = document.createElement('p');
    catElement.classList.add('categoria');
    catElement.textContent = categoria;

    var precoElement = document.createElement('p');
    precoElement.classList.add('preco');
    precoElement.textContent = preco;

    // Adicionar elementos internos ao novo produto
    novoProduto.appendChild(imagem);
    novoProduto.appendChild(nomeElement);
    novoProduto.appendChild(descElement);
    novoProduto.appendChild(catElement);
    novoProduto.appendChild(precoElement);

    // Adicionar o novo produto à secção de Produtos
    var produtosSection = document.querySelector('.mais-vendidos');
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


document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    const items = [
        { image: '../imgs/ab-foto-p.jpg', title: 'António Bandeiras', description: 'eau de parfum' },
        { image: '../imgs/bb-foto-p.jpg', title: 'Bebeauty', description: 'Skin Gel' },
        { image: '../imgs/gm2-foto-p.jpg', title: 'Gentle magic', description: 'skincare serum' },
        // Adicione mais itens conforme necessário
    ];

    function addItemsToCarousel() {
        items.forEach(item => {
            const newItem = document.createElement('div');
            newItem.classList.add('carousel-item');
            newItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            `;
            carouselContainer.appendChild(newItem);
        });

        // Ajustando a largura máxima do carouselContainer
        carouselContainer.style.maxWidth = '100%';

        // Centralizando o carouselContainer e os itens
        function centerCarousel() {
            const windowWidth = window.innerWidth;
            const itemWidth = Math.min(windowWidth, 500); // Definindo a largura máxima de 500px para o item
            carouselContainer.style.width = `${itemWidth}px`;
            carouselContainer.style.margin = '0 auto';

            const carouselItems = document.querySelectorAll('.carousel-item');
            carouselItems.forEach(item => {
                item.style.width = `${itemWidth}px`;
                item.style.display = 'none';
            });
            carouselItems[currentIndex].style.display = 'block';
        }

        centerCarousel(); // Chamando a função para centralizar o carouselContainer e os itens inicialmente

        window.addEventListener('resize', centerCarousel); // Centralizando o carouselContainer e os itens ao redimensionar a janela
    }

    function showItem(index) {
        const carouselItems = document.querySelectorAll('.carousel-item');
        carouselItems.forEach((item, i) => {
            if (i === index) {
                item.style.display = 'block';
                item.classList.add('focused');
            } else {
                item.style.display = 'none';
                item.classList.remove('focused');
            }
        });
    }

    function nextSlide() {
        currentIndex++;
        if (currentIndex >= items.length) {
            currentIndex = 0;
        }
        setTimeout(() => {
            showItem(currentIndex);
        }, 50);
    }

    function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = items.length - 1;
        }
        setTimeout(() => {
            showItem(currentIndex);
        }, 50);
    }

    addItemsToCarousel();

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
});
