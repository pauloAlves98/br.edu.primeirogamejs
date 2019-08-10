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

    this.atualizarSprite = function(img){
        //console.log(img);
        let largura = img.offsetWidth/2;
        let altura = img.offsetHeight;
        //console.log(largura+" Largura");
        this.posSpriteDg++;
        //console.log(this.posSpriteDg+" POS SPRITE");
        if (this.posSpriteDg == 2) this.posSpriteDg = 0;
        let linha = Math.floor(this.posSpriteDg / 2) * altura;
        let coluna = this.posSpriteDg % 2 * largura;
        img.style.marginTop = -linha + 'px';
        img.style.marginLeft = -coluna + 'px';
        if(this.posSpriteDg==0)
            this.spriteImgPs.style.left = 12+"px";
        else
            this.spriteImgPs.style.left = 4+"px";
    }
}

var p = new Personagem();
console.log("P " + p.vel);