var personagem = new Personagem();
var config;
var daoDesafio;
var emJogo = true;
var tamTelaW = window.innerWidth;
var tamTelaH = window.innerHeight;;
var inimigosAtivos;
var timeCriacao;
function init() {
    //Tela
    tamTelaW = window.innerWidth;
    tamTelaH = window.innerHeight;
    config = new configurarTela(tamTelaH, tamTelaW, document);
    config.init();
    console.log(tamTelaH + " Monitor");
    //Jogador
    personagem.jogador = document.getElementById("jog");//Pega a div
    personagem.spriteImgPs = document.getElementById("jogador");//Pega a img
    personagem.spriteImgDg = document.getElementById("dragao");//Pega aimg
    //console.log(personagem.spriteImgDg.offsetWidth+" K");
    personagem.posX = config.tamTelaWJogo / 2;
    personagem.posY = config.tamTelaHJogo / 2;
    personagem.jogador.style.top = personagem.posY + "px";
    personagem.jogador.style.left = personagem.posX + "px";
    personagem.spriteImgDg.style.top = 45 + "px";
    personagem.spriteImgPs.style.top = -4 + "px";
    personagem.spriteImgPs.style.left = 12 + "px";
    //Enemy
    inimigosAtivos = [];
    timeCriacao = 1000;//Math.random()*10000;
    //Desafio
    daoDesafio = new BaseImages();
    console.log("P "+daoDesafio.imgs.att1.sourceImg);
    document.getElementById("ImgDesafio").src=daoDesafio.imgs.att1.sourceImg;
    //para a segunda img do dg é 20px e para primeira eh 
    //personagem.atualizarSprite();
    setInterval(function () { personagem.atualizarSprite(personagem.spriteImgDg); }, 500);
    setInterval(gameLoop, 25);
    setInterval(criarInimigo, timeCriacao);
    setInterval(atualizaInimigo, 250);
}

function teclaDw(p) {//telca pressionada!
    let tecla = event.keyCode;
    //console.log(p+" P");
    if (tecla == 37) {//Esquerda
        p.dx = -1;
        //console.log("Entrou");
    } else if (tecla == 39) {//direita!
        // dirx=1;
        p.dx = 1;
        //console.log(p.vel);
    }
    //console.log(tecla);
    if (tecla == 38) {//cima
        p.dy = -1;
    } else if (tecla == 40) {//baixo
        p.dy = 1;
    }
    
    if (tecla == 32) {
        if (p.atirando == true)
            return;
        p.atirando = true;
        setTimeout(function () { console.log("0"); p.atirar(p.spriteImgPs); }, 50);
        setTimeout(function () { console.log("1"); p.atirar(p.spriteImgPs); }, 200);
        setTimeout(function () { console.log("2"); p.atirar(p.spriteImgPs); }, 350);
        setTimeout(function () { console.log("3"); p.atirar(p.spriteImgPs); p.dispararFlecha(document, p.posX + 80, (p.posY + 30));/*p.atirando = false;*/ }, 500);
        //setTimeout(function () { console.log("4"); p.atirar(p.spriteImgPs);  }, 400);
    }//barra espaco
}
function teclaUp(p) {//solta tecla!
    let tecla = event.keyCode;
    if ((tecla == 38) || (tecla == 40)) {//cima
        p.dy = 0;
    } else if ((tecla == 39) || (tecla == 37)) {//cima
        p.dx = 0;
    }
}
//Enemy
function atualizaInimigo() {
    var tam = inimigosAtivos.length;
    for (var i = 0; i < tam; i++) {
        if (inimigosAtivos[i]) {
            var img = inimigosAtivos[i].spriteImgDg;
            inimigosAtivos[i].atualizarSprite(img, 4, 1);
        }
    }
}
function criarInimigo() {
    if (emJogo) {
        if (inimigosAtivos.length >= 4)
            return;
        let y = Math.random() * (config.tamTelaHJogo)+config.cabecario;
        if (y >= config.telaCompleta() - 119) y = config.tamTelaHJogo - 125;
        let x = config.tamTelaWJogo - 110;
        //Div
        let jogador = document.createElement("div");//
        let att1 = document.createAttribute("class");
        let att2 = document.createAttribute("style");
        att1.value = "enemy";
        att2.value = "top:" + y + "px;" + "    left:" + x + "px;";
        //Img
        var spriteImg = document.createElement("img");//
        let att3 = document.createAttribute("class");
        let att4 = document.createAttribute("src");
        att3.value = "inimigo";
        att4.value = "imgs/dg4.png"
        //Atribuições a IMG
        spriteImg.setAttributeNode(att3);
        spriteImg.setAttributeNode(att4);
        //Atribuições a div
        jogador.setAttributeNode(att1);
        jogador.setAttributeNode(att2);
        jogador.appendChild(spriteImg);
        //enemy
        var enemy = new Inimigo();
        enemy.jogador = jogador;
        enemy.spriteImgDg = spriteImg;
        inimigosAtivos.push(enemy);
        document.getElementById("table").appendChild(enemy.jogador);
        enemy.atualizarSprite(enemy.spriteImgDg, 4, 1);
        //enemy.atualizarSprite(enemy.spriteImgDg, 4,1);
    }
}
function controlaInimigos() {
    //enemy = document.getElementsByClassName("bomba");
    var tam = inimigosAtivos.length;
    for (var i = 0; i < tam; i++) {
        if (inimigosAtivos[i]) {
            var pi = inimigosAtivos[i].jogador.offsetLeft;
            pi -= inimigosAtivos[i].vel;
            inimigosAtivos[i].jogador.style.left = pi + "px";
            if (pi <= 0) {
                // vidaPlaneta-=10;
                //criaExplosao(2, bombasTotal[i].offsetLeft,null);
                inimigosAtivos[i].jogador.remove();
                inimigosAtivos.splice(i, 1);//remove 1 item a partir da posição i 
            }
        }
    }

}
//Player
function controleJogador() {
    personagem.mexer(config.telaCompleta(), config.tamTelaWJogo, config.cabecario+2);
}
//Disparos
function controleDisparos() {
    personagem.movimentoDisparo(document, config.tamTelaWJogo, inimigosAtivos);
}
//Loop
function gameLoop() {
    //console.log("T ");
    if (emJogo) {
        controleJogador();
        controleDisparos();
        controlaInimigos();
    }
    //frame = requestAnimationFrame(gameLoop);
}

window.addEventListener("load", init);
document.addEventListener("keydown", function () { teclaDw(personagem) });
document.addEventListener("keyup", function () { teclaUp(personagem) });