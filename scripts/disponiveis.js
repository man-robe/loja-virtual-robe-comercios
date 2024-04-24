 // função para mostrar e ocultar o menu hamburger dos telefones
  
 function clickMenu() {
  if(itens.style.display == 'block' ) {
      itens.style.display = 'none'
  } else {
      itens.style.display = 'block'
  }
}


// Lista de produtos
const inventario = [
    {
      nome: "Antonio Bandeiras",
      descricao: "eau de parfum",
      categoria: "perfumes",
      preco: "10.000,00 kz",
      imagem: "../imgs/ab-foto-g.jpg",
    },
    {
      nome: "Dolores P. Femme",
      descricao: "eau de parfum",
      categoria: "perfumes",
      preco: "15.000,00 kz",
      imagem: "../imgs/dlr-foto-g.jpg",
    },
    {
      nome: "Zara Man",
      descricao: "eau de parfum",
      categoria: "perfumes",
      preco: "20.000,00 kz",
      imagem: "../imgs/zr-foto-g.jpg",
    },
    {
      nome: "Gentle Magic",
      descricao: "skin serum",
      categoria: "skincare",
      preco: "6.000,00 kz",
      imagem: "../imgs/gm2-foto-g.jpg",
    },
    {
      nome: "Yves Rocher",
      descricao: "Creme",
      categoria: "skincare",
      preco: "5.500,00 kz",
      imagem: "../imgs/yr-foto-g.jpg",
    },
    {
      nome: "Bebeauty",
      descricao: "skin gel",
      categoria: "skincare",
      preco: "7.000,00 kz",
      imagem: "../imgs/bb-foto-g.jpg",
    },
    {
      nome: "Zara Man",
      descricao: "eau de parfum",
      categoria: "perfumes",
      preco: "15.000,00 kz",
      imagem: "../imgs/zr2-foto-g.jpg",
    },
    {
      nome: "Yves Rocher 2",
      descricao: "Creme",
      categoria: "skincare",
      preco: "4.000,00 kz",
      imagem: "../imgs/yr2-foto-g.jpg",
    },
    {
      nome: "Antonio Bandeiras",
      descricao: "eau de parfum",
      categoria: "perfumes",
      preco: "10.000,00 kz",
      imagem: "../imgs/ab-foto-g.jpg",
    },
    {
      nome: "Dolores P. Femme",
      descricao: "eau de parfum",
      categoria: "perfumes",
      preco: "15.000,00 kz",
      imagem: "../imgs/dlr-foto-g.jpg",
    },
    {
      nome: "Zara Man",
      descricao: "eau de parfum",
      categoria: "perfumes",
      preco: "20.000,00 kz",
      imagem: "../imgs/zr-foto-g.jpg",
    },
    {
      nome: "Gentle Magic",
      descricao: "skin serum",
      categoria: "skincare",
      preco: "6.000,00 kz",
      imagem: "../imgs/gm2-foto-g.jpg",
    },
    {
      nome: "Yves Rocher",
      descricao: "Creme",
      categoria: "skincare",
      preco: "5.500,00 kz",
      imagem: "../imgs/yr-foto-g.jpg",
    },
    {
      nome: "Bebeauty",
      descricao: "skin gel",
      categoria: "skincare",
      preco: "7.000,00 kz",
      imagem: "../imgs/bb-foto-g.jpg",
    },
    {
      nome: "Zara Man",
      descricao: "eau de parfum",
      categoria: "perfumes",
      preco: "15.000,00 kz",
      imagem: "../imgs/zr2-foto-g.jpg",
    },
    {
      nome: "Yves Rocher 2",
      descricao: "Creme",
      categoria: "skincare",
      preco: "4.000,00 kz",
      imagem: "../imgs/yr2-foto-g.jpg",
    }
  ];
  

// Função para adicionar produtos dinamicamente ao HTML
function adicionarProdutos(categoria) {
  const produtosSection = document.querySelector(".produtos-disponiveis");

  inventario.forEach((produto) => {
    if (produto.categoria === categoria) {
      const produtoSection = document.createElement("section");
      produtoSection.classList.add("produto");
      produtoSection.innerHTML = `
        <picture>
          <img src="${produto.imagem}" alt="${produto.nome}">
        </picture>
        <h4 class="nome">${produto.nome}</h4>
        <p class="descricao">${produto.descricao}</p>
        <p class="categoria">${produto.categoria}</p>
        <p class="preco">${produto.preco}<p>
      `;
      produtosSection.appendChild(produtoSection);
    }
  });
}




// Função para filtrar produtos por categoria
function filtrarPorCategoria(categoria) {
  const produtosSection = document.querySelector(".produtos-disponiveis");
  produtosSection.innerHTML = '';

  inventario.forEach((produto) => {
    if (categoria === 'todos' || produto.categoria === categoria) {
      const produtoSection = document.createElement("section");
      produtoSection.classList.add("produto");
      produtoSection.innerHTML = `
        <picture>
          <img src="${produto.imagem}" alt="${produto.nome}">
        </picture>
        <h4 class="nome">${produto.nome}</h4>
        <p class="descricao">${produto.descricao}</p>
        <p class="categoria">${produto.categoria}</p>
        <p class="preco">${produto.preco}<p>
      `;
      produtosSection.appendChild(produtoSection);
    }
  });
}



// Chamando as funções para adicionar, ordenar e filtrar produtos ao carregar a página
window.addEventListener("load", function(){
  adicionarProdutos("perfumes");
  adicionarProdutos("skincare");
  ordenarPorCategoria("perfumes");
  ordenarPorCategoria("skincare");
  filtrarPorCategoria("perfumes");
  filtrarPorCategoria("skincare");
});




// Função para buscar produtos
function buscarProdutos(termo) {
  const produtosFiltrados = inventario.filter((produto) =>
    produto.nome.toLowerCase().includes(termo.toLowerCase())
  );

  const produtosSection = document.querySelector(".produtos-disponiveis");
  produtosSection.innerHTML = '';

  produtosFiltrados.forEach((produto) => {
    const produtoSection = document.createElement("section");
    produtoSection.classList.add("produto");
    produtoSection.innerHTML = `
      <picture>
        <img src="${produto.imagem}" alt="${produto.nome}">
      </picture>
      <h4 class="nome">${produto.nome}</h4>
      <p class="descricao">${produto.descricao}</p>
      <p class="categoria">${produto.categoria}</p>
      <p class="preco">${produto.preco}<p>
    `;
    produtosSection.appendChild(produtoSection);
  });
}



// Adicionando evento de busca ao formulário
const formBusca = document.getElementById("iFormBusca");
formBusca.addEventListener("submit", function(event) {
  event.preventDefault();
  const termo = document.getElementById("buscar").value;
  buscarProdutos(termo);
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
  