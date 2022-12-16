// {document} é para selecionar o documento {querySelector} para selecionar o elemento.


// criar lista de teclas buscando no documento a classe tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

// função para tocar o som do audio correto
function tocarSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();

}

// laçõ para a verificação das listas de tecla e som 
for(let i = 0;i < listaDeTeclas.length; i += 1){
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    listaDeTeclas[i].onclick = function(){
        tocarSom(idAudio)
    }
}