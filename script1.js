//carrossel//
var imgs = document.getElementById("img");
var img = document.querySelectorAll("#img img");

var imagemAtual = 0;

function carrosselAutomatico(){
    imagemAtual++
    if(imagemAtual > img.length - 1){
        imagemAtual = 0;
    }
    imgs.style.transform = `translateX(${-imagemAtual * imgs.offsetWidth}px)`
}

setInterval(carrosselAutomatico, 2000);