const lista = document.querySelectorAll('.color');
const botao = document.querySelector('#button-random-color');

const corLista = () => {
    lista[0].style.background = 'black';
    lista[1].style.background = gerar_cor();
    lista[2].style.background = gerar_cor();
    lista[3].style.background = gerar_cor();
}
corLista();

function gerar_cor() {

    let r = parseInt(Math.random() * 255);
 
    let g = parseInt(Math.random() * 255);
 
    let b = parseInt(Math.random() * 255);
 
    return `rgba(${r}, ${g}, ${b})`;
 
 }

 botao.addEventListener('click', corLista());