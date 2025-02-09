import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

const inputItem = document.getElementById('input-item'); 
let contador = 0;

export function criarItemDaLista () {
    if(inputItem.value === ''){
        alert('Por favor, insira um item!');
        return;
    }

    const itemDaLista = document.createElement('li');
    const containerItemDaLista = document.createElement('div');
    containerItemDaLista.classList.add('lista-item-container');
    const inputCheckBox = document.createElement('input');
    inputCheckBox.type = 'checkbox'; 
    inputCheckBox.id = "checkbox-" + contador++; 
    const nomeItem = document.createElement('p'); 
    nomeItem.innerText = inputItem.value;
    
    inputItem.value = '';

    inputCheckBox.addEventListener('click', () => { 
        if (inputCheckBox.checked) { 
            nomeItem.style.textDecoration = 'line-through';
        } else {
            nomeItem.style.textDecoration = 'none';
        }
    })

    containerItemDaLista.appendChild(inputCheckBox); 
    containerItemDaLista.appendChild(nomeItem); 
    itemDaLista.appendChild(containerItemDaLista); 

    const dataCompleta = gerarDiaDaSemana(); // Recebe o retorno da função, que é a criação da data e da hora.

    const itemData = document.createElement('p');
    itemData.classList.add('texto-data'); 
    itemData.innerText = dataCompleta;
    
    itemDaLista.appendChild(itemData);

    return itemDaLista; // A função irá retornar o 'li'
}
