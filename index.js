import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verificaListaVazia.js";

const listaDeCompras = document.getElementById('lista-de-compras'); 
const botaoAdicionar = document.getElementById('adicionar-item');

botaoAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista(); // Guarda o retorno da função
    listaDeCompras.appendChild(itemDaLista); // Anexa como filho o retorno da função dentro do 'ul'
    verificarListaVazia(listaDeCompras);
})

verificarListaVazia(listaDeCompras); // Passa a lista de compras por parametro para que a função de verificar possa ter acesso a lista por este arquivo.