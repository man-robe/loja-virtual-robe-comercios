// Lista de produtos
const inventario = [

    {
      nome: "Antonio Bandeiras",
      descricao: "eau de parfum",
      preco: "25.000,00 kz",
      imagem: "imgs/ab-foto-g.jpg",
    },
    {
      nome: "Dolores Femme",
      descricao: "eau de parfum",
      preco: "20.000,00 kz",
      imagem: "imgs/dlr-foto-g.jpg",
    },
    {
      nome: "Zara Man",
      descricao: "eau de parfum",
      preco: "10.000,00 kz",
      imagem: "imgs/zr-foto-g.jpg",
    },
    {
        nome: "Gentle Magic",
        descricao: "skincare",
        preco: "25.000,00 kz",
        imagem: "imgs/gm2-foto-g.jpg",
    },
    {
      nome: "Yves Rocher",
      descricao: "skincare",
      preco: "10.000,00 kz",
      imagem: "imgs/yr-foto-g.jpg",
    },
    {
      nome: "Bebeauty",
      descricao: "skincare",
      preco: "20.000,00 kz",
      imagem: "imgs/bb-foto-g.jpg",
    },
    {
      nome: "Zara Man",
      descricao: "eau de parfum",
      preco: "10.000,00 kz",
      imagem: "imgs/zr2-foto-g.jpg",
    },
    {
      nome: "Yves Rocher 2",
      descricao: "skincare",
      preco: "25.000,00 kz",
      imagem: "imgs/yr2-foto-g.jpg",
    }
    
  ];
  
  // Função para adicionar produtos dinamicamente ao HTML

  function adicionarProdutos(categoria) {
    const produtosSection = document.querySelector(".produtos");
  
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
          <h4>${produto.nome}</h4>
          <p class="descricao">${produto.descricao}</p>
          <p class="preco">${produto.preco}</p>
        `;
  
        // Adicionar o produto à seção de produtos
        produtosSection.appendChild(produtoSection);
      }
    });
  }
  
  // Chamar a função para adicionar os produtos ao carregar a página
  window.addEventListener("load", () => {
    adicionarProdutos("eau de parfum");
    adicionarProdutos("skincare");
    
});



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






// Funcão para buscar e mostrar resultados 







//Função para a lista de sugestão
