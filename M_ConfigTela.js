

function configurarTela(altura,largura,document){
   
    this.tamTelaHJogo = 0;
    this.tamTelaWJogo = 0; 
    this.cabecario = 0;  
    this.percentGame = 0.80;
   // this.percentCab = 0.20;
    this.init = function(){
        let t = document.getElementById("table");
        let head = document.getElementById("cabecario");
        head.style.height = altura*0.20+"px";
        head.style.width  = largura+"px";
        t.style.height  = altura*0.80+"px";
        t.style.width  = largura+"px";
        this.tamTelaHJogo = altura*0.80;
        this.tamTelaWJogo = largura;
        this.cabecario  = altura*0.20;
        // console.log("T"+t.offsetHeight*0.90);
        // console.log("TA "+this.tamTelaHJogo);
    }
    this.telaCompleta = function(){
        return this.tamTelaHJogo/this.percentGame;//tela completa
    }
}