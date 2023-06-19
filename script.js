


// Requisito 1 - Adicione à página o título "Paleta de Cores" - Feito no HTML na linha 14

const lista = document.querySelectorAll('.color');
const botao = document.querySelector('#button-random-color');
const board = document.querySelector('#pixel-board');
const palete = document.querySelector('#color-palette');
const limpaQuadro = document.querySelector('#clear-board');
const entradaTamanho = document.querySelector('#board-size');
const botaoTamanho = document.querySelector('#generate-board');

//Requisito 2 - Adicione à página uma paleta contendo quatro cores distintas - feito da linha 11 até 14
//Requisito 3 - Adicione a cor preta como a primeira cor da paleta de cores - feito na linha 11
const cor0 = lista[0].style.background = 'rgb(0, 0, 0)';
const cor1 = lista[1].style.background = 'red';
const cor2 = lista[2].style.background = 'green';
const cor3 = lista[3].style.background = 'blue';


function gerarCor() {

    let r = parseInt(Math.random() * 255);
 
    let g = parseInt(Math.random() * 255);
 
    let b = parseInt(Math.random() * 255);
 
    return `rgb(${r}, ${g}, ${b})`;
 
 }


 // Requisito 4 - Adicione um botão para gerar cores aleatórias para a paleta de cores - Botão adicionado no HTML na linha 25. 
//  Função e evento de clique feito da linha 31 até 39 no Javascript.

 //Requisito 5 - Implemente uma função usando localStorage para que a paleta de cores gerada aleatoriamente seja mantida após recarregar a página. 
 //Função feita na linha 41
    const corLista = () => {
    const cor0 = lista[0].style.background = 'rgb(0, 0, 0)';
    const cor1 = lista[1].style.background = gerarCor();
    const cor2 = lista[2].style.background = gerarCor();
    const cor3 = lista[3].style.background = gerarCor();
    const array = [cor0, cor1, cor2, cor3];
    localStorage.setItem('colorPalette', JSON.stringify(array));
};

botao.addEventListener('click', corLista);

// Requisito 6 e 7
let numeroQuadrinhos = 5;
 let quadro = (numberQuadrinhos) => {
    board.style.width = `${40*numberQuadrinhos + numberQuadrinhos*6}px`;
    board.style.height = `${40*numberQuadrinhos + numberQuadrinhos*6}px`;
    for(let index = 0; index<numberQuadrinhos; index+=1){
        for(let i = 0; i<numberQuadrinhos; i+=1){
            const quadrinho = document.createElement('div');
            quadrinho.classList.add('pixel');
            quadrinho.style.background = 'white';
            quadrinho.style.border = 'solid 1px black';
            quadrinho.style.height = '40px';
            quadrinho.style.width = '40px';
            quadrinho.style.display = 'inline-block';
            quadrinho.style.margin = '2px'; 
            quadrinho.style.verticalAlign = 'middle';
            quadrinho.style.borderRadius = '10%';
            board.appendChild(quadrinho);
        }
    }
 } ;
 quadro(numeroQuadrinhos);
 


 //Requisito 9
 const recarrega = () => {
    const pegaCor = JSON.parse(localStorage.getItem('colorPalette'));
    if(pegaCor){
      for(let index = 0; index<lista.length; index += 1){
          lista[index].style.backgroundColor = pegaCor[index];
      }
    }
};



// Requisito 8 e 10

const guardaQuadro = () => {
    const quadradinho = document.querySelectorAll('.pixel');
    const cores = [];
    // const corQuadradinho = quadradinho.style.backgroundColor;
    for(let color of quadradinho){
        cores.push(color.style.backgroundColor);
    }
    // console.log(quadradinho[0].style.backgroundColor);
    localStorage.setItem('pixelBoard', JSON.stringify(cores));
    // if(localStorage.getItem('pixelBoard')){

    // }
};



 const clica = () => {

    board.addEventListener('click', (event) => {
        const quadrinhoSelecionado = event.target;
        quadrinhoSelecionado.style.backgroundColor = 'black'; 
        guardaQuadro();
    });
    palete.addEventListener('click', (event) => {
        const alvoDoEvento = event.target;
        const cor = alvoDoEvento.style.backgroundColor;
        lista.forEach((paletinha) => {
            if(paletinha.classList.contains('selected')){
            paletinha.classList.remove('selected');
        }});
        alvoDoEvento.classList.add('selected');
        board.addEventListener('click', (event) => {
            const quadrinhoSelecionado = event.target;
            quadrinhoSelecionado.style.backgroundColor = cor; 
            guardaQuadro();
        })
    })
   
 };
 





 //Requisito 11


 const limpaBoard = () => {
        limpaQuadro.addEventListener('click', () => {
            const quadradinho = document.querySelectorAll('.pixel');
            const coresConjunto = [];
            for(let index = 0; index < quadradinho.length; index += 1){
                quadradinho[index].style.backgroundColor = 'rgb(255, 255, 255)';
                coresConjunto.push(quadradinho[index].style.backgroundColor);
                localStorage.setItem('pixelBoard', JSON.stringify(coresConjunto));
            }
        })
 };



//Requisito 12



const pegarCor = () => {
    const colors = JSON.parse(localStorage.getItem('pixelBoard'));
    const square = document.querySelectorAll('.pixel');
    if(colors){
    for(let index = 0; index<colors.length; index +=1){
        square[index].style.backgroundColor = colors[index];
    }}
};





// Requisito 13 e 14

const tamanhoQuadro = () => {
     botaoTamanho.addEventListener('click', () => {
        const tamanho = entradaTamanho.value;
        board.innerHTML = '';
        numeroQuadrinhos = tamanho;
        quadro(numeroQuadrinhos);
        localStorage.setItem('boardSize', JSON.stringify(numeroQuadrinhos));
        if(tamanho === ''){
            alert('Board inválido!');
        quadro(5);
    } if(tamanho<5){
        board.innerHTML = '';
        quadro(5);
    } if(tamanho>50){
        board.innerHTML = '';
        quadro(50);
    }
})
};
tamanhoQuadro();

// Requisito 15

const keepSize = () => {
    if(localStorage.getItem('boardSize')){
        board.innerHTML = '';
      const size = JSON.parse(localStorage.getItem('boardSize'));
      quadro(size);
} else {
    board.innerHTML = '';
    quadro(numeroQuadrinhos);
}
};

keepSize();




// window.onload = () => {
//     guardaQuadro();
// };


recarrega();
clica();
limpaBoard();
pegarCor();

