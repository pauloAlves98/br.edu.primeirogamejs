

function configurarTela(altura,largura,document){
   
    this.tamTelaHJogo = 0;
    this.tamTelaWJogo = 0; 
    this.cabecario = 0;  
    this.percentGame = 0.80;
   // this.percentCab = 0.20;
    this.init = function(){
        console.log("Alt "+altura);
        let t = document.getElementById("table");
        if(altura<=500)
            this.percentGame = 0.75;

        let head = document.getElementById("cabecario");
        head.style.height = altura*(1-this.percentGame)+"px";
        head.style.width  = largura+"px";
        t.style.height  = altura*this.percentGame+"px";
        t.style.width  = largura+"px";
        this.tamTelaHJogo = altura*this.percentGame;
        this.tamTelaWJogo = largura;
        this.cabecario  = altura*(1-this.percentGame);
        console.log(this.cabecario+" Cab e "+(1-this.percentGame));
        // console.log("T"+t.offsetHeight*0.90);
        // console.log("TA "+this.tamTelaHJogo);
    }
    this.telaCompleta = function(){
        return this.tamTelaHJogo/this.percentGame;//tela completa
    }
}