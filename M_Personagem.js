
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

    this.mexer = function (tamTelaH, tamTelaW) {

        if (!(this.posY + this.dy * this.vel + this.jogador.offsetHeight >= tamTelaH) && !(this.posY + this.dy * this.vel <= 0))
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
        console.log("A"+this.atirando);
        // else
        // img.style.left = 4 + "px";
    }
    this.atirar = function (img) {
        //setTimeout(this.atualizarDisparo(img, 1), 50);
        this.atualizarDisparo(img);
        // setTimeout(this.atualizarDisparo(img,3),  600);
        //setTimeout(this.atualizarDisparo(img, 4), 500);
    }
    this.reposicionarEmCimadoDg = function(img){
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

