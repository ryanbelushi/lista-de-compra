// input:
const inputItem = document.getElementById('input-item');
// button:
const sendButton = document.getElementById('adicionar-item');
// list:
const list = document.getElementById('lista-de-compras');
// Checkbox count
let count = 0;

sendButton.addEventListener('click', (event) => {
    event.preventDefault();

    if(inputItem.value === ""){
     return alert('Insira um item!')
    }

    // div elements
    const containerElements = document.createElement('div');
    containerElements.classList.add('lista-item-container');
    const itemList = document.createElement('input');
    itemList.type = 'Checkbox';
    itemList.id = `Checkbox-${count++}`
    const stringItemList = document.createElement('p');
    stringItemList.innerText = inputItem.value;
    const listContainer = document.createElement('li');

  itemList.addEventListener('click', () => {
    if (itemList.checked){
        stringItemList.style.textDecoration = 'line-through'
    } else {
        stringItemList.style.textDecoration = 'none'
    }
  })

    // Hours:
    const date = new Date().toLocaleDateString('pt-BR', {weekday: 'long'});
    const dateNumber = new Date().toLocaleDateString('pt-br');
    const hour = new Date().toLocaleTimeString('pt-BR', {hour: 'numeric', minute: 'numeric'});
    const completeDate = `${date} (${dateNumber}) às ${hour}`;

    const hourContainer = document.createElement('p');
    hourContainer.classList.add('texto-data');
    hourContainer.innerText = completeDate;
    
    // Anexando elementos:

    containerElements.appendChild(itemList);
    containerElements.appendChild(stringItemList);
    listContainer.appendChild(containerElements);
    list.appendChild(listContainer);
    list.appendChild(hourContainer);
})