/*-------------------------------------------------------------------------------------------------------------*/
  // função para mostrar e ocultar o menu hamburger dos telefones
  
  function clickMenu() {
    if(itens.style.display == 'block' ) {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}
/*------------------------------------------------------------------------------------------------------------*/


// Lista de produtos
const inventario = [
    {
      nome: "Antonio Bandeiras",
      descricao: "eau de parfum",
      preco: "25.000,00 kz",
      imagem: "../imgs/ab-foto-g.jpg",
    },
    {
      nome: "Dolores P. Femme",
      descricao: "eau de parfum",
      preco: "20.000,00 kz",
      imagem: "../imgs/dlr-foto-g.jpg",
    },
    {
      nome: "Zara Man",
      descricao: "eau de parfum",
      preco: "10.000,00 kz",
      imagem: "../imgs/zr-foto-g.jpg",
    },
    {
      nome: "Gentle Magic",
      descricao: "skincare",
      preco: "25.000,00 kz",
      imagem: "../imgs/gm2-foto-g.jpg",
    },
    {
      nome: "Yves Rocher",
      descricao: "skincare",
      preco: "10.000,00 kz",
      imagem: "../imgs/yr-foto-g.jpg",
    },
    {
      nome: "Bebeauty",
      descricao: "skincare",
      preco: "20.000,00 kz",
      imagem: "../imgs/bb-foto-g.jpg",
    },
    {
      nome: "Zara Man",
      descricao: "eau de parfum",
      preco: "10.000,00 kz",
      imagem: "../imgs/zr2-foto-g.jpg",
    },
    {
      nome: "Yves Rocher 2",
      descricao: "skincare",
      preco: "25.000,00 kz",
      imagem: "../imgs/yr2-foto-g.jpg",
    }
  ];
  
  // Função para adicionar produtos dinamicamente ao HTML
  function adicionarProdutos(categoria) {
    const produtosSection = document.querySelector(".mais-vendidos");
  
    inventario.forEach((produto) => {
        if (produto.descricao === categoria) {
            // Criar uma nova seção para o produto
            const produtoSection = document.createElement("section");
            produtoSection.classList.add("produto");
  
            // Adicionar um ID único para cada seção de produto
            produtoSection.id = `produto-${inventario.indexOf(produto) + 1}`;
  
            // Criar a estrutura HTML para o produto
            produtoSection.innerHTML = `
                <picture>
                    <img src="${produto.imagem}" alt="${produto.nome}">
                </picture>
                <h4 class="nome">${produto.nome}</h4>
                <p class="descricao">${produto.descricao}</p>
                <p class="preco">${produto.preco}</p>
            `;
  
            // Adicionar o produto à seção de produtos
            produtosSection.appendChild(produtoSection);
        }
    });
  }
  
  // Função para ordenar produtos por preço
  function ordenarPorPreco(categoria, ordem) {
    const produtosSection = document.querySelector(".mais-vendidos");
  
    // Ordenar o inventário de acordo com a ordem especificada
    inventario.sort((a, b) => {
        if (ordem === 'asc') {
            return parseFloat(a.preco.replace(/[^\d.-]/g, '')) - parseFloat(b.preco.replace(/[^\d.-]/g, ''));
        } else {
            return parseFloat(b.preco.replace(/[^\d.-]/g, '')) - parseFloat(a.preco.replace(/[^\d.-]/g, ''));
        }
    });
  
    // Limpar a seção de produtos
    produtosSection.innerHTML = '';
  
    // Adicionar produtos ordenados à seção de produtos
    inventario.forEach((produto) => {
        if (produto.descricao === categoria) {
            // Criar uma nova seção para o produto
            const produtoSection = document.createElement("section");
            produtoSection.classList.add("produto");
  
            // Adicionar um ID único para cada seção de produto
            produtoSection.id = `produto-${inventario.indexOf(produto) + 1}`;
  
            // Criar a estrutura HTML para o produto
            produtoSection.innerHTML = `
                <picture>
                    <img src="${produto.imagem}" alt="${produto.nome}">
                </picture>
                <h4 class="nome">${produto.nome}</h4>
                <p class="descricao">${produto.descricao}</p>
                <p class="preco">${produto.preco}</p>
            `;
  
            // Adicionar o produto à seção de produtos
            produtosSection.appendChild(produtoSection);
        }
    });
  }
  
  // Função para exibir produtos em uma página específica
  function exibirProdutosPorPagina(categoria, paginaAtual, itensPorPagina) {
    const produtosSection = document.querySelector(".mais-vendidos");
  
    // Limpar a seção de produtos
    produtosSection.innerHTML = '';
  
    const startIndex = (paginaAtual - 1) * itensPorPagina;
    const endIndex = startIndex + itensPorPagina;
    const produtosPorPagina = inventario.filter(produto => produto.descricao === categoria).slice(startIndex, endIndex);
  
    // Adicionar produtos à seção de produtos
    produtosPorPagina.forEach((produto) => {
        // Criar uma nova seção para o produto
        const produtoSection = document.createElement("section");
        produtoSection.classList.add("produto");
  
        // Adicionar um ID único para cada seção de produto
        produtoSection.id = `produto-${inventario.indexOf(produto) + 1}`;
  
        // Criar a estrutura HTML para o produto
        produtoSection.innerHTML = `
            <picture>
                <img src="${produto.imagem}" alt="${produto.nome}">
            </picture>
            <h4 class="nome">${produto.nome}</h4>
            <p class="descricao">${produto.descricao}</p>
            <p class="preco">${produto.preco}</p>
        `;
  
        // Adicionar o produto à seção de produtos
        produtosSection.appendChild(produtoSection);
    });
  }
  
  // Função de busca
  const formBusca = document.getElementById('iFormBusca');
  formBusca.addEventListener('submit', function (event) {
      event.preventDefault(); // Evita o envio do formulário padrão
      const termoBusca = document.getElementById('buscar').value.trim().toLowerCase(); // Obtém o termo de busca e limpa espaços em branco e converte para minúsculas
  
      // Filtrar produtos que correspondem ao termo de busca
      const produtosFiltrados = inventario.filter(produto => {
          const nomeProduto = produto.nome.toLowerCase(); // Convertendo o nome do produto para minúsculas
          const descricaoProduto = produto.descricao.toLowerCase(); // Convertendo a descrição do produto para minúsculas
          return nomeProduto.includes(termoBusca) || descricaoProduto.includes(termoBusca);
      });
  
      // Exibir resultados da busca
      const produtosSection = document.querySelector('.mais-vendidos');
      produtosSection.innerHTML = produtosFiltrados.length > 0 ? 
          produtosFiltrados.map(produto => `
              <section class="produto" id="produto-${inventario.indexOf(produto) + 1}">
                  <picture>
                      <img src="${produto.imagem}" alt="${produto.nome}">
                  </picture>
                  <h4 class="nome">${produto.nome}</h4>
                  <p class="descricao">${produto.descricao}</p>
                  <p class="preco">${produto.preco}</p>
              </section>
          `).join('') :
          '<p>Nenhum resultado encontrado.</p>';
  });
  
  // Chamar a função para adicionar os produtos ao carregar a página
  window.addEventListener("load", () => {
    adicionarProdutos("eau de parfum");
    adicionarProdutos("skincare");
  });
  

  

  
  

  




//função para adicionar produtos ao carousel container
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




 
  /*
  // Função para exibir detalhes do produto em uma janela modal
  function exibirDetalhesProduto(produtoId) {
    const produto = inventario[produtoId - 1]; // Supondo que o ID do produto corresponda ao seu índice no inventário
    const modal = document.getElementById('detalhesModal');
    
    // Atualizar o conteúdo da modal com os detalhes do produto
    modal.querySelector('.modal-title').textContent = produto.nome;
    modal.querySelector('.modal-image').src = produto.imagem;
    modal.querySelector('.modal-description').textContent = produto.descricao;
    modal.querySelector('.modal-price').textContent = produto.preco;
  
    // Exibir a modal
    modal.style.display = 'block';
  }
  
  // Chamar a função para exibir detalhes do produto ao clicar em um produto
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('produto')) {
        const produtoId = parseInt(event.target.id.split('-')[1]); // Obter o ID do produto do ID da seção do produto
        exibirDetalhesProduto(produtoId);
    }
  });
  
  // Fechar a modal ao clicar no botão de fechar
  document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('detalhesModal').style.display = 'none';
  });
  
  
  
  
  
  
  
  // Função para adicionar avaliação e comentário de um produto
  function adicionarAvaliacaoComentario(produtoId, avaliacao, comentario) {
    const produto = inventario[produtoId - 1]; // Supondo que o ID do produto corresponda ao seu índice no inventário
    
    // Adicionar avaliação e comentário ao objeto do produto
    produto.avaliacao = avaliacao;
    produto.comentario = comentario;
  }
  
  // Exemplo de uso:
  adicionarAvaliacaoComentario(1, 4.5, "Ótimo produto, entrega rápida!");
  
  // Função para exibir avaliação e comentário de um produto
  function exibirAvaliacaoComentario(produtoId) {
    const produto = inventario[produtoId - 1]; // Supondo que o ID do produto corresponda ao seu índice no inventário
    
    // Exibir avaliação e comentário
    console.log(`Avaliação: ${produto.avaliacao}`);
    console.log(`Comentário: ${produto.comentario}`);
  }
  
  // Exemplo de uso:
  exibirAvaliacaoComentario(1);
  
  
  
  
  // Função para adicionar um produto ao carrinho de compras
  function adicionarAoCarrinho(produtoId, quantidade) {
    // Lógica para adicionar o produto ao carrinho de compras e atualizar a exibição do carrinho
  }
  
  
  // Função para remover um produto do carrinho de compras
  function removerDoCarrinho(produtoId) {
    // Lógica para remover o produto do carrinho de compras e atualizar a exibição do carrinho
  }
  
  
  
  
  // Função para aplicar um cupom de desconto ao carrinho de compras
  function aplicarCupomDeDesconto(codigo) {
    // Lógica para aplicar o cupom de desconto e recalcular o total do pedido
  }
  
  
  
  
  // Função para filtrar produtos por categoria
  function filtrarPorCategoria(categoria) {
    const produtosSection = document.querySelector(".produtos-disponiveis");
    produtosSection.innerHTML = ''; // Limpar os produtos existentes antes de exibir os filtrados
  
    inventario.forEach((produto) => {
        if (produto.categoria === categoria) {
            // Criar e adicionar o produto à seção de produtos
            const produtoSection = criarProdutoSection(produto);
            produtosSection.appendChild(produtoSection);
        }
    });
  }
  
  
  
  
  
  // Função para verificar o login do usuário
  function verificarLogin(email, senha) {
    // Lógica para verificar o login do usuário (pode ser integrado com um backend)
  }
  
  // Função para criar uma nova conta de usuário
  function criarConta(nome, email, senha) {
    // Lógica para criar uma nova conta de usuário (pode ser integrado com um backend)
  }
  
  // Função para atualizar os detalhes do perfil do usuário
  function atualizarPerfil(usuarioId, novosDetalhes) {
    // Lógica para atualizar os detalhes do perfil do usuário (pode ser integrado com um backend)
  }
  
  
  
  
  
  // Função para enviar um comentário
  function enviarComentario(produtoId, comentario) {
    // Lógica para enviar o comentário ao servidor (pode ser integrado com um backend)
  }
  
  // Função para enviar uma avaliação
  function enviarAvaliacao(produtoId, avaliacao) {
    // Lógica para enviar a avaliação ao servidor (pode ser integrado com um backend)
  }
  
  
  
  
  // Função para exibir uma notificação
  function exibirNotificacao(titulo, mensagem) {
    // Lógica para exibir a notificação na interface do usuário
  }
  
  
  
  
  // Função para compartilhar um produto nas mídias sociais
  function compartilharProduto(nomeProduto, linkProduto) {
    // Lógica para compartilhar o produto nas mídias sociais
  }
  
  
  // Função para rastrear o status de um pedido
  function rastrearPedido(numeroDoPedido) {
    // Lógica para obter e exibir o status do pedido (pode ser integrado com um backend)
  }
  
  
  // Função para recomendar produtos com base no histórico de navegação do usuário
  function recomendarProdutos(usuarioId) {
    // Lógica para recomendar produtos com base no histórico de navegação do usuário (pode ser integrado com um backend)
  }
  
  */