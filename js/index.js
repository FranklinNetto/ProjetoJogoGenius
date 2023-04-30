
//variáveis jogo
let sequenciaJogo = [];
let sequenciaJogador = [];
let intervaloId = 0;
let rodada = 0;
let rodadaJogo = 0; //flash
let jogoComputador = false;
let ligado = false;
let acertou = false;
let vencedor = false;

// comandos e eventos do jogo
const btnIniciar = document.getElementById("principal__jogo__area__botao__iniciar"),
    btnParar = document.getElementById("principal__jogo__area__botao__parar"),
    verde = document.querySelector("#principal__jogo__area__verde"),
    vermelho = document.querySelector("#principal__jogo__area__vermelho"),
    azul = document.querySelector("#principal__jogo__area__azul"),
    amarelo = document.querySelector("#principal__jogo__area__amarelo"),
    placar = document.querySelector("#principal__jogo__area__rodada");

//evento click btn iniciar
btnIniciar.addEventListener("click", ()=>{
    ligado = true;
    placar.innerHTML = "--";
    clearInterval(intervaloId);
    limparCores()

    if(ligado || ganhou){
        iniciaRodada();
    }
});

//evento click btn parar
btnParar.addEventListener("click", () => {
    ligado = false;
    placar.innerHTML = "";
    limparCores();
    clearInterval(intervaloId);
    alert("Volte sempre!!");
});

function iniciaRodada(){
    vezDoJogo = true;
    sequenciaJogo = [];
    sequenciaJogador = [];
    intervaloId = 0;
    rodada = 1;
    rodadaJogo = 0;
    vencedor = false;
    acertou = true;
    placar.innerHTML = rodada;
    limparCores();
    //preenche sequencia jogo
    for(i=0;i<20;i++){
        sequenciaJogo.push(Math.floor(Math.random()*4 +1));
    }
    
    jogoComputador = true;
    intervaloId = setInterval(rodadaComputador, 800);
}

function rodadaComputador(){
    ligado = false;

    if (rodada == rodadaJogo) {
        clearInterval(intervaloId);
        jogoComputador = false;
        limparCores();
        ligado = true;
    }

    if(jogoComputador){
        limparCores();
        
        setTimeout(() => {
            switch (sequenciaJogo[rodadaJogo]) {
                case 1: ligarVerde(); break;
                case 2: ligarVermelho(); break;
                case 3: ligarAzul(); break;
                case 4: ligarAmarelo(); break;
            }
            rodadaJogo++;
        }, 200);
    }
}

function ligarVerde(){
    verde.style.backgroundColor = "lightgreen";
}

function ligarVermelho(){
    vermelho.style.backgroundColor = "tomato";
}

function ligarAzul(){
    azul.style.backgroundColor = "lightskyblue";
}

function ligarAmarelo(){
    amarelo.style.backgroundColor = "yellow";
}

function limparCores() {
    verde.style.backgroundColor = "darkgreen";
    vermelho.style.backgroundColor = "darkred"; 
    azul.style.backgroundColor = "darkblue";
    amarelo.style.backgroundColor = "goldenrod";  
}

function acenderCores() {
    verde.style.backgroundColor = "lightgreen";
    vermelho.style.backgroundColor = "tomato"; 
    azul.style.backgroundColor = "lightskyblue";
    amarelo.style.backgroundColor = "yellow";  
}

// evento click no pad das cores
verde.addEventListener('click', () => {
    sequeciaJogadorAdd(1);
});

vermelho.addEventListener('click', () => {
    sequeciaJogadorAdd(2);
});

azul.addEventListener('click', () => {
    sequeciaJogadorAdd(3);
});

amarelo.addEventListener('click', () => {
    sequeciaJogadorAdd(4);
});

function sequeciaJogadorAdd(cor) {
    if (ligado) {
        //preenche sequencia jogador
        sequenciaJogador.push(cor);
        checarResposta();

        switch (cor) {
            case 1: ligarVerde(); break;
            case 2: ligarVermelho(); break;
            case 3: ligarAzul(); break;
            case 4: ligarAmarelo(); break;
        }
        
        if(!vencedor) {
          setTimeout(() => {
            limparCores();
          }, 300);
        }
    }
}

function checarResposta (){
      //numero de rodadas - verifica sequencia vencedor
      if (sequenciaJogador.length == 3 && acertou) {
        jogadorVenceu();
    }
  
    //sequencia incorreta - reinicia jogo
    if (sequenciaJogador[sequenciaJogador.length - 1] !== sequenciaJogo[sequenciaJogador.length - 1]){
        acertou = false;
        acenderCores();
        placar.innerHTML = "Errooou!!"
        setTimeout(() => {
            iniciaRodada();
        }, 1500);

    }
      // sequecia correta - continua jogo
      if (rodada == sequenciaJogador.length && acertou && !vencedor) {
        rodada++;
        sequenciaJogador = [];
        jogoComputador = true;
        rodadaJogo = 0;
        placar.innerHTML = rodada;
        intervaloId = setInterval(rodadaComputador, 800);
    }
}

function jogadorVenceu() {
    ligado = false;
    vencedor = true;
    acenderCores();
    placar.innerHTML = "Venceu!!!";
    setTimeout(() => {
        iniciaRodada();
    }, 1500);
}
