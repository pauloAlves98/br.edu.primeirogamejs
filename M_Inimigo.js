function Inimigo() {
    this.dx = 1;
    this.dy = 0;
    this.posX = 0;
    this.posY = 0;
    this.vel = 4;
    this.jogador;//div
    this.spriteImgDg;//img
    this.posSpriteDg = 0;
    
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

    this.atualizarSprite = function(img,qnt,row){//qnt referece qntidade de imagens da sprite!!!
        let largura = img.offsetWidth/qnt;
        let altura = img.offsetHeight/qnt;
        //console.log(largura+" Largura");
        this.posSpriteDg++;
        //console.log(this.posSpriteDg+" POS SPRITE");
        if (this.posSpriteDg == qnt) this.posSpriteDg = 0;
        let linha = row*altura; //linha Math.floor(this.posSpriteDg / qnt) * altura;
        let coluna = this.posSpriteDg % qnt * largura;
        img.style.marginTop = -linha + 'px';
        img.style.marginLeft = -coluna + 'px';
    }
}

var p = new Inimigo();
console.log("Enemy" + p.vel);