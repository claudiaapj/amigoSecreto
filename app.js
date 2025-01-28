limpaCampo();
let listaAmigosSortear = [];

function adicionarAmigo() {
    // Obter o valor do input
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    // Verificar se o campo não está vazio
    if (nome === '') {
        mensagem =document.getElementById("listaAmigos").textContent = "Digita primeiro o nome do amigo para então adicionar!";
        return mensagem;
    }
    verificaCampoVazio()
    let itemLista = document.createElement('li');
    itemLista.textContent = nome;

    let lista = document.getElementById("listaAmigos")
    lista.appendChild(itemLista);
    listaAmigosSortear.push(nome)

    limpaCampo()
    
}
    
function sortearAmigo(){
    
    if (listaAmigosSortear.length === 0) {
        document.getElementById("resultado").textContent = "Adicione primeiro os amigos para sortear!";
        return;
      }
    let sorteioIndice = Math.floor(Math.random()* listaAmigosSortear.length + 1);

    let amigoSorteado = listaAmigosSortear[sorteioIndice];

    document.getElementById("resultado").textContent = `Seu amigo secreto é: ${amigoSorteado}`;
  
    }


function limpaCampo(){
    let campoInput = document.querySelector('input')
    campoInput.value = '';
    campoInput.focus();
}

function verificaCampoVazio(){
    if(mensagem != ""){
        mensagem =document.getElementById("listaAmigos").textContent = ""
    }
    return
}