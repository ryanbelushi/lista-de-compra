 const listaVazia = document.querySelector('.mensagem-lista-vazia');

 export default function verificarListaVazia(listaDeCompras){
    const itensDaLista = listaDeCompras.querySelectorAll('li');
    if (itensDaLista.length === 0){
        listaVazia.style.display = "block";
    } else {
        listaVazia.style.display = "none";
    }
}