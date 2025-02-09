//? Acessando o DOM:
const listaDeCompras = document.getElementById('lista-de-compras'); // Pegando o elemento ul.
const inputItem = document.getElementById('input-item'); // Pesquisando no dom o input pelo ID.
const botaoAdicionar = document.getElementById('adicionar-item'); // Pegando o botão de adicionar item a lista de compras.
let contador = 0; //Criando um contador para modificar o ID do input, para sempre seja incrementado um número.

//? Usando o ouvinte de eventos:
// O evento espera 2 valores, o primeiro é o tipo de evento que queremos adicionar e o segundo é a função callback que precisamos passar. Ele sempre é adicionado em um elemento. Podemos acessar o evento em si através do parametro da função callback passada.
// Capturando dados do usuário com o addEventListener:
botaoAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault();
    if(inputItem.value === ''){ // Verificando se o usuário está nos enviando uma string vazia.
        alert('Por favor, insira um item!');
        return; //Com o return caso a string seja vazia o usuário receberá o alerta e em seguida a função para de ser executada e não seguira os proximos passos.
    }

    //? Construindo elementos com o DOM.
    const itemDaLista = document.createElement('li'); // Criando um elemento LI.
    const containerItemDaLista = document.createElement('div'); //Criando um elemento div. Como a div contem uma classe que tem estilização, precisamos adicionar ela para que a app não quebre.
    containerItemDaLista.classList.add('lista-item-container'); //Adicionando a classe ao elemento div.
    const inputCheckBox = document.createElement('input'); // Criando um input.
    inputCheckBox.type = 'checkbox'; //Definindo o tipo do input, também poderia ser usado o setAttribute
    inputCheckBox.id = "checkbox-" + contador++; //Atribuimos um id checkbox- para o input, e em seguida o contatenamos com o contador, para que o numero após o "-" seja sempre dinamico.
    const nomeItem = document.createElement('p'); //Criando o paragrafo.
    nomeItem.innerText = inputItem.value;//Sempre que houver um valor digitado no input, ele será atribuído ao elemento 'p' criado.
    
    // Limpando o valor do input após ele ser preenchido:
    inputItem.value = '';

    //? Adicionando um estilo dinamico para ao checkbox ser marcado, ele ser cortado da lista:
    inputCheckBox.addEventListener('click', () => { //Selecionando o input checkbox que criamos;
        if (inputCheckBox.checked) { // Se o input estiver como checked (marcado)
            nomeItem.style.textDecoration = 'line-through';// O estilo no texto do paragrafo que guarda o elemento, terá o texto cortado.
        } else {
            nomeItem.style.textDecoration = 'none';// Caso não tiver, terá o estilo removido, assim caso o user desmarque a opção o texto voltará ao normal.
        }
    })

    //? Atribuindo os elementos um ao outro para que fique exatamente igual ao html.
    //Como o javascript lê linha a linha e executa o codigo, precisamos contruir a arvore do dom de forma inversa, começando primeiro pelos elementos dentro da div.
    containerItemDaLista.appendChild(inputCheckBox); //Adicionando o input como elemento filho da div.
    containerItemDaLista.appendChild(nomeItem); //Adicionando o paragrafo como elemento filho da div.
    itemDaLista.appendChild(containerItemDaLista); // Adicionando a div com os elementos como filho do elemento li.

    // ?Implementando o dia e horario para as tarefas
    //? Foi escolhido o método abaixo pois ele retorna uma string, é o ideal já que vamos apresentar essa informação na tela para o usuário
    const diaDaSemana = new Date().toLocaleDateString('pt-BR', { 
        weekday: 'long'
    });// Ao acessar o objeto date, podemos usar varias propriedades, uma delas é o toLocaleDateString, que é usado para pegar o dia da semana. Caso o new Date seja usado sozinho, ele irá retornar o padrão de data em ingles pegando o horario local do navegador. Já ao usar a propriedade toLocaleDateString, podemos utilizar 2 parametros, o primeiro é em qual lingua queremos a data, caso ele seja usado sozinho irá ser retornado apenas a data em numeros de acordo com a linguagem escolhida, o segundo parametro é um objeto que se chama "weekday", ao utilizar este parametro ao invés de ser retornado a data em numeros será retornado o nome do dia, essa propriedade recebe 3 valores, short (abrevia), long (retorna o nome completo do dia) e narrow (super abreviado).
    const data = new Date().toLocaleDateString('pt-BR'); // criando a captura do horario no formato de data

    const hora = new Date().toLocaleTimeString('pt-BR', {
        hour: 'numeric',
        minute: 'numeric'
    }); //Capturando o valor de data e hora, funciona como o código acima, porém agora o objeto irá conter valores especificos de tipo de horas.

    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;// Criando o formato dia (data).

    const itemData = document.createElement('p');
    itemData.classList.add('texto-data'); // Adicionando a classe do p para os estilos.
    itemData.innerText = dataCompleta;
    
    //? Adicionando o tempo na tela
    itemDaLista.appendChild(itemData); // Adicionando o paragrafo criado das horas dentro da li, como é feito no html de exemplo.
    
    listaDeCompras.appendChild(itemDaLista); // Adicionando o li com os demais elementos dentro do elemento ul. A atribuição fica ao final pois o JS lê linha a linha, sendo assim o container com todas as infos deve ser o último a ser indexado.

    verificarListaVazia(); //Ao botão ser clicado será feito novamente a checagem se algo foi adicionado há lista.
})

const listaVazia = document.querySelector('.mensagem-lista-vazia');

function verificarListaVazia(){
    const itensDaLista = listaDeCompras.querySelectorAll('li'); //Busca no ul todos os elementos "li" e retorna um array, assim conseguimos verificar o tamanho do array e checar se há itens
    if (itensDaLista.length === 0){
        listaVazia.style.display = "block"; //Faz o elemento aparecer na tela
    } else {
        listaVazia.style.display = "none";
    }
}

verificarListaVazia()