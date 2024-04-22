// Função para mostrar e ocultar o menu hamburger dos telefones
function clickMenu() {
  const itens = document.getElementById('itens');
  if (itens.style.display === 'block') {
    itens.style.display = 'none';
  } else {
    itens.style.display = 'block';
  }
}


// Lista de produtos
const inventario = [
  {
    nome: "Antonio Bandeiras",
    descricao: "eau de parfum",
    categoria: "perfumes",
    imagem: "../imgs/ab-foto-g.jpg",
  },
  {
    nome: "Dolores P. Femme",
    descricao: "eau de parfum",
    categoria: "perfumes",
    imagem: "../imgs/dlr-foto-g.jpg",
  },
  {
    nome: "Zara Man",
    descricao: "eau de parfum",
    categoria: "perfumes",
    imagem: "../imgs/zr-foto-g.jpg",
  },
  {
    nome: "Gentle Magic",
    descricao: "serum",
    categoria: "skincare",
    imagem: "../imgs/gm2-foto-g.jpg",
  },
  {
    nome: "Yves Rocher",
    descricao: "Creme",
    categoria: "skincare",
    imagem: "../imgs/yr-foto-g.jpg",
  },
  {
    nome: "Bebeauty",
    descricao: "skin gel",
    categoria: "skincare",
    imagem: "../imgs/bb-foto-g.jpg",
  },
  {
    nome: "Zara Man",
    descricao: "eau de parfum",
    categoria: "perfumes",
    imagem: "../imgs/zr2-foto-g.jpg",
  },
  {
    nome: "Yves Rocher 2",
    descricao: "Creme",
    categoria: "skincare",
    imagem: "../imgs/yr2-foto-g.jpg",
  }
];


// Função para adicionar produtos dinamicamente ao HTML
function adicionarProdutos(categoria) {
  const produtosSection = document.querySelector(".NovosEmStock");

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
      `;
      produtosSection.appendChild(produtoSection);
    }
  });
}




// Função para filtrar produtos por categoria
function filtrarPorCategoria(categoria) {
  const produtosSection = document.querySelector(".NovosEmStock");
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

  const produtosSection = document.querySelector(".NovosEmStock");
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