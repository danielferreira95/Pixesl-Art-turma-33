const lista = document.querySelectorAll('.color');
const botao = document.querySelector('#button-random-color');
const elementoPai = document.querySelector('#pixel-board')
const selected = document.querySelector('.selected');
const palete = document.querySelector('#color-palette')

function gerar_cor() {

    let r = parseInt(Math.random() * 255);
 
    let g = parseInt(Math.random() * 255);
 
    let b = parseInt(Math.random() * 255);
 
    return `rgba(${r}, ${g}, ${b})`;
 
 }

 const corLista = () => {
    const cor0 = lista[0].style.background = 'black';
    const cor1 = lista[1].style.background = gerar_cor();
    const cor2 = lista[2].style.background = gerar_cor();
    const cor3 = lista[3].style.background = gerar_cor();
    const array = [cor0, cor1, cor2, cor3];
    localStorage.setItem('colorPalette', JSON.stringify(array));
}


 botao.addEventListener('click', () => corLista());

 const nova = () => {
    const guarda = JSON.parse(localStorage.getItem('colorPalette'));
    for(let index = 0; index < lista.length; index+=1){
        lista[index].style.background = guarda[index];
    }
 };

 nova();

 const quadro = () => {
    elementoPai.style.width = '210px';
    for(let index = 0; index<5; index+=1){
        for(let index = 0; index<5; index+=1){
            const elemento = document.createElement('div');
            elemento.className = 'pixel';
            elemento.style.background = 'white';
            elemento.style.border = 'solid black 1px';
            elemento.style.height = '40px';
            elemento.style.width = '40px';
            elemento.style.display = 'inline-block';
            elementoPai.appendChild(elemento);
        }
    }
 }
 quadro();

 const muda = () => {
    palete.addEventListener('click', (event) => {
        for(let index = 0; index<lista.length; index+=1){
            lista[index].classList.remove('selected');
        }
        event.target.classList.add('selected');
    })
 };
 
 