const gato = document.querySelector('.gato');
const cano = document.querySelector('.cano');
const gameover = document.querySelector('.gameover')
const score = document.querySelector('.score')
let pontos = 0
let japontuou = false

function restartgame(){
    window.location.reload()

}
function startgame(){
    const game = document.getElementById('game')
    game.style.display = "block"
    document.querySelector('.botaostart').style.display = "none"
}

const pulo = () => {
    gato.classList.add('pulo');

        setTimeout(() => {
        gato.classList.remove('pulo');
        japontuou = false
    }, 500);
}

const loop = setInterval(() => {

    const canoPosition = cano.offsetLeft;
    const gatoPosition = +window.getComputedStyle(gato).bottom.replace('px','');
    const estapulando = gato.classList.contains("pulo")

    if (canoPosition < 120 && canoPosition > 0 && gatoPosition < 80 ) {

        cano.style.animation = 'none';
        cano.style.left = `${canoPosition}px`;

        gato.style.animation = 'none';
        gato.style.bottom = `${gatoPosition}px`;
        
        gato.src = './image/fat-cat.gif';
        gato.style.width = '130px';
        gato.style.marginLeft = '-2px';
        
        gameover.style.display = 'block'

        document.querySelector('.recomeçar').style.display = "inline-block"
        
        

        
            
    
        clearInterval(loop);
    }
    else if (
        canoPosition < 120 && canoPosition > 0 && estapulando && !japontuou )
        {            
            pontos++
            japontuou = true
            score.innerHTML = pontos
            
        }

}, 10);

document.addEventListener('keydown', pulo);
