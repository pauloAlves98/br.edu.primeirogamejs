var personagem = new Personagem();
var emJogo = true;
var tamTelaW;
var tamTelaH;

function init(){
    //Tela
    tamTelaW = window.innerWidth;
    tamTelaH = window.innerHeight;
    console.log(tamTelaH+" Monitor");
    //Jogador
    personagem.jogador = document.getElementById("jog");//Pega a div
    personagem.spriteImgPs = document.getElementById("jogador");//Pega a img
    personagem.spriteImgDg = document.getElementById("dragao");//Pega aimg
    //console.log(personagem.spriteImgDg.offsetWidth+" K");
    personagem.posX = tamTelaW/2;
    personagem.posY = tamTelaH/2;
    personagem.jogador.style.top = personagem.posY+"px";
    personagem.jogador.style.left = personagem.posX+"px";
    personagem.spriteImgDg.style.top = 45+"px";
    personagem.spriteImgPs.style.top = -4+"px";
    personagem.spriteImgPs.style.left = 12+"px";
    //para a segunda img do dg é 20px e para primeira eh 
   //personagem.atualizarSprite();
   setInterval(function(){personagem.atualizarSprite(personagem.spriteImgDg);}, 500);
   setInterval(gameLoop, 25);


}
function teclaDw(p){//telca pressionada!
    let tecla = event.keyCode;
    //console.log(p+" P");
    if(tecla==37){//Esquerda
        p.dx=-1;
        //console.log("Entrou");
    }else if(tecla==39){//direita!
       // dirx=1;
       p.dx=1;
        //console.log(p.vel);
    }
    //console.log(tecla);
    if(tecla==38){//cima
        p.dy=-1;
    }else if(tecla==40){//baixo
        p.dy=1;
    }
    if(tecla==32){
       // atira(posX+17,posY-17);
    }//barra espaco
}
function teclaUp(p){//solta tecla!
    let tecla = event.keyCode;
    if((tecla==38) || (tecla==40) ){//cima
        p.dy=0;
    }else  if((tecla==39) || (tecla==37) ){//cima
        p.dx=0;
    }
}
function gameLoop(){
    if(emJogo){
       // console.log(personagem.posX+" X1");
        personagem.mexer(tamTelaH,tamTelaW);
        //console.log(personagem.posX+" X2");
        //Funcoes de controle!
        // controlaJogador();
        // controleTiros();
        // controlaBombas();
    }
    //frame = requestAnimationFrame(gameLoop);
}

window.addEventListener("load",init);
document.addEventListener("keydown",function(){teclaDw(personagem)});
document.addEventListener("keyup",function(){teclaUp(personagem)});