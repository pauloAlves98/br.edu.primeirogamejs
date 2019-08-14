
function Personagem() {
    this.dx = 0;
    this.dy = 0;
    this.posX = 0;
    this.posY = 0;
    this.vel = 4;
    this.jogador;//div
    this.spriteImgPs;//img
    this.spriteImgDg;//img
    this.posSpriteDg = 0;
    this.posSpritePs = 0;//voltar para 0
    this.atirando = false;

    this.mexer = function (tamTelaH, tamTelaW, cab) {//
        if (!(this.posY + this.dy * this.vel + this.jogador.offsetHeight >= tamTelaH) && !(this.posY + this.dy * this.vel <= cab))
            this.posY += this.dy * this.vel;
        if (!(this.posX + this.dx * this.vel + this.jogador.offsetWidth >= tamTelaW) && !(this.posX + this.dx * this.vel <= 0))
            this.posX += this.dx * this.vel;

        //console.log(this.posY + this.dy * this.vel + this.jogador.offsetHeight+ " Y");
        this.jogador.style.top = this.posY + "px";
        this.jogador.style.left = this.posX + "px";
        //console.log(this.jogador.style.left + " Left");
    }

    this.atualizarSprite = function (img) {
        //console.log(img);
        let largura = img.offsetWidth / 2;
        let altura = img.offsetHeight;
        //console.log(largura+" Largura");
        this.posSpriteDg++;
        //console.log(this.posSpriteDg+" POS SPRITE");
        if (this.posSpriteDg == 2) this.posSpriteDg = 0;
        let linha = Math.floor(this.posSpriteDg / 2) * altura;
        let coluna = this.posSpriteDg % 2 * largura;
        img.style.marginTop = -linha + 'px';
        img.style.marginLeft = -coluna + 'px';

        //console.log(this.posSpritePs + " PS No ");
        //reposionar ps em cima do dg.
        this.reposicionarEmCimadoDg(this.spriteImgPs);

    }
    this.atualizarDisparo = function (img) {
        //console.log(img);
        let largura = img.offsetWidth / 4;
        let altura = img.offsetHeight;
        //console.log(largura+" Largura");
        this.posSpritePs += 1;
        //console.log(this.posSpriteDg+" POS SPRITE");
        if (this.posSpritePs == 4) this.posSpritePs = 0;
        let linha = 0 * altura;
        let coluna = this.posSpritePs % 4 * largura;
        img.style.marginTop = -linha + 'px';
        img.style.marginLeft = -coluna + 'px';
        // console.log(this.posSpriteDg + " pg");
        // console.log(this.posSpritePs + " ps");

        //reposicionamento do ps em cima do Dg.
        this.reposicionarEmCimadoDg(img);
        console.log("A" + this.atirando);
        // else
        // img.style.left = 4 + "px";
    }
    this.atirar = function (img) {//Animacao
        //setTimeout(this.atualizarDisparo(img, 1), 50);
        this.atualizarDisparo(img);
        // setTimeout(this.atualizarDisparo(img,3),  600);
        //setTimeout(this.atualizarDisparo(img, 4), 500);
    }
    this.dispararFlecha = function (document, x, y) {
        if (document.getElementsByClassName("disparoJogador").length >= 1)
            return;
        console.log("Disparou!");
        var flecha = document.createElement("div");
        var att1 = document.createAttribute("class");
        var att2 = document.createAttribute("style");
        // var att3 = document.createAttribute("src");
        att1.value = "disparoJogador";
        att2.value = "top:" + y + "px;left:" + x + "px";
        flecha.setAttributeNode(att1);
        flecha.setAttributeNode(att2);
        document.getElementById("table").appendChild(flecha);
    }
    this.movimentoDisparo = function (document, larguraT,inimigos) {
        var disparos = document.getElementsByClassName("disparoJogador");
        var tam = disparos.length;
        for (var i = 0; i < tam; i++) {
            if (disparos[i]) {
                var pt = disparos[i].offsetLeft;
                pt += this.vel*2;
                disparos[i].style.left = pt + "px";
                console.log("Enemy:"+inimigos);
                this.colisaoFlechaComEnemy(inimigos,disparos[i]);
                if (pt >= larguraT) {
                    //disparos[i].remove();
                    document.getElementById("table").removeChild(disparos[i]);
                    this.atirando = false;
                }
            }
        }
    }
    this.colisaoFlechaComEnemy = function (inimigos, flecha){
        var tam = inimigos.length;
        
        for (var i = 0; i < tam; i++) {
            if (inimigos[i]) {
                if (
                    (
                        (flecha.offsetTop <= (inimigos[i].jogador.offsetTop + inimigos[i].jogador.offsetHeight)) &&//cima flecha com parte baixo bomba!
                        ((flecha.offsetTop + flecha.offsetHeight) >= (inimigos[i].jogador.offsetTop))
                    )
                    &&
                    (
                        (flecha.offsetLeft <= (inimigos[i].jogador.offsetLeft + inimigos[i].jogador.offsetWidth)) &&//Esquerda do flecha com direita da bomba!
                        ((flecha.offsetLeft + flecha.offsetWidth) >= (inimigos[i].jogador.offsetLeft))//direita do flecha com esqurda da bomba!
                    )
                ) {
                    // inimigos[i].style.backgroundImage = "url('exp.gif')";
                   // criaExplosao(1, inimigos[i].offsetLeft - 25, jogador.);
                    inimigos[i].jogador.remove();
                    flecha.remove();
                    this.atirando = false;
                }
            }
        }
    
}
this.reposicionarEmCimadoDg = function (img) {
    if (this.posSpriteDg == 0 && this.posSpritePs == 0)
        img.style.left = 12 + "px";
    else if (this.posSpriteDg == 1 && this.posSpritePs == 0)
        img.style.left = 4 + "px";
    else if (this.posSpriteDg == 1 && this.posSpritePs == 1)
        img.style.left = 2 + "px";
    else if (this.posSpriteDg == 0 && this.posSpritePs == 1)
        img.style.left = 10 + "px";
    else if (this.posSpriteDg == 0 && this.posSpritePs == 2)
        img.style.left = -12 + "px";
    else if (this.posSpriteDg == 1 && this.posSpritePs == 2)
        img.style.left = -20 + "px";
    else if (this.posSpriteDg == 0 && this.posSpritePs == 3)
        img.style.left = -20 + "px";
    else if (this.posSpriteDg == 1 && this.posSpritePs == 3)
        img.style.left = -28 + "px";
    else if (this.posSpriteDg == 0 && this.posSpritePs == 4)
        img.style.left = 12 + "px";
    else if (this.posSpriteDg == 1 && this.posSpritePs == 4)
        img.style.left = 4 + "px";
}
}

