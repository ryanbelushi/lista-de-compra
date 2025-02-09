const inputItem = document.getElementById('input_item');
const botaoAdicionar = document.getElementById('adicionar_Button');
const listaDeFilmes = document.getElementById('lista_de_filmes');


const adicionarFilme = function() {
    const lista = document.createElement('li');
    lista.textContent = inputItem.value;

    listaDeFilmes.appendChild(lista);
    inputItem.value = '';
}



botaoAdicionar.addEventListener('click', adicionarFilme);