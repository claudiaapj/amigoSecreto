limpaCampo();
let listaAmigosSortear = [];


function adicionarAmigo() {
    // Obter o valor do input
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    // Verificar se o campo não está vazio
    if (nome === '') {
        exibirErroTelaTempo("Digita primeiro o nome do amigo para então adicionar!", 4000)
        return ;
    }
   
    let itemLista = document.createElement('li');
    itemLista.textContent = nome;

    let lista = document.getElementById("listaAmigos")
    lista.appendChild(itemLista);
    listaAmigosSortear.push(nome)

    limpaCampo()
    
}
    
function sortearAmigo(){
    
    if (listaAmigosSortear.length === 0) {
        //document.getElementById("resultado").textContent = "Adicione primeiro os amigos para sortear!";
        exibirErroTelaTempo("Adicione primeiro os amigos para então sortear!", 4000)

        return;
      }
    let sorteioIndice = Math.floor(Math.random()* listaAmigosSortear.length + 1);

    let amigoSorteado = listaAmigosSortear[sorteioIndice];
    document.getElementById('listaAmigos').style.display = 'none';
    
    document.getElementById("resultado").textContent = `Seu amigo secreto é: ${amigoSorteado}`;
  
    }


function limpaCampo(){
    let campoInput = document.querySelector('input')
    campoInput.value = '';
    campoInput.focus();
}

function exibirErroTelaTempo(texto, tempo){
    let mensagem = document.getElementById("listaAmigos");
    let mensagemSortearVazio = document.getElementById("resultado")
    mensagem.textContent = texto
    mensagemSortearVazio = texto

    setTimeout(()=> {mensagem.textContent = "";}, tempo);
    limpaCampo()
}
