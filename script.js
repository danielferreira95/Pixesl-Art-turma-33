const lista = document.querySelectorAll('.color');
const botao = document.querySelector('#button-random-color');
const board = document.querySelector('#pixel-board')
const selected = document.querySelector('.selected');
const palete = document.querySelector('#color-palette')
const limpaQuadro = document.querySelector('#clear-board')
const cor0 = lista[0].style.background = 'rgb(0, 0, 0)';
const cor1 = lista[1].style.background = 'red';
const cor2 = lista[2].style.background = 'green';
const cor3 = lista[3].style.background = 'blue';

//Requisito 2 e 3
function gerarCor() {

    let r = parseInt(Math.random() * 255);
 
    let g = parseInt(Math.random() * 255);
 
    let b = parseInt(Math.random() * 255);
 
    return `rgb(${r}, ${g}, ${b})`;
 
 }

 // Requisito 5 e 8
 const corLista = () => {
    const cor0 = lista[0].style.background = 'rgb(0, 0, 0)';
    const cor1 = lista[1].style.background = gerarCor();
    const cor2 = lista[2].style.background = gerarCor();
    const cor3 = lista[3].style.background = gerarCor();
    const array = [cor0, cor1, cor2, cor3];
    localStorage.setItem('colorPalette', JSON.stringify(array));
}

// Requisito 4
botao.addEventListener('click', corLista);



// Requisito 6 e 7
 const quadro = () => {
    board.style.width = '230px';
    for(let index = 0; index<5; index+=1){
        for(let index = 0; index<5; index+=1){
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
 }
 quadro();

 //Requisito 9
 const recarrega = () => {
    const pegaCor = JSON.parse(localStorage.getItem('colorPalette'));
    if(pegaCor){
      for(let index = 0; index<lista.length; index += 1){
          lista[index].style.backgroundColor = pegaCor[index];
      }
    }
};
recarrega();


// Requisito 8 e 10

 const clica = () => {

    board.addEventListener('click', (event) => {
        const quadrinhoSelecionado = event.target;
        quadrinhoSelecionado.style.backgroundColor = 'black'; 
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
        })
    })
 };
 clica();


 //Requisito 11

 const quadrinho = document.querySelectorAll('.pixel');

 const limpaBoard = () => {
        limpaQuadro.addEventListener('click', () => {
            for(let index = 0; index < quadrinho.length; index += 1){
                quadrinho[index].style.backgroundColor = 'rgb(255, 255, 255)';
                console.log('limpa');
            }
        })
 };
limpaBoard();



//Requisito 12

// const guardaQuadro = () => {
//     const quadradinho = document.querySelectorAll('.pixel');
//     const corQuadradinho = quadradinho.style.backgroundColor;
//     localStorage.setItem('pixelBoard', JSON.stringify(corQuadradinho));
//     // if(localStorage.getItem('pixelBoard')){

//     // }
// };
// guardaQuadro();


 