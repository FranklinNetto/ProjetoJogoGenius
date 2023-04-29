const _dados = {
    ligarJogo: false,
    iniciarPartida: false,
    chance: false,
    rodada: 0,
    sequenciaJogo: [],
    sequenciaJogador: [],
    ganhou: true,
    acenderLuz: 0,
    continuarJogo: false,

    timeout: undefined,
    sons: [],


// DEFINIR INTERVALO DO JOGO E DO JOGADOR.

};

const _comandos = {
    placar: document.getElementById("principal__jogo__area__rodada"),
    ligarJogo: document.getElementById("principal__jogo__area__seletor__ligar"),
    chance: document.getElementById("principal__jogo__area__seletor__chance"),
    iniciarPartida: document.getElementById("principal__jogo__area__botao__iniciar"),
    verde: document.getElementById("principal__jogo__area__verde"),
    vermelho: document.getElementById("principal__jogo__area__vermelho"),
    azul: document.getElementById("principal__jogo__area__azul"),
    amarelo: document.getElementById("principal__jogo__area__amarelo")
};

_comandos.ligarJogo.addEventListener("click", () => {
    _dados.ligarJogo = _comandos.ligarJogo.classList.toggle("principal__jogo__area__seletor__ligar");

    _comandos.placar.classList.toggle("principal__jogo__area__rodada");
    if(_dados.ligarJogo == true){
        _comandos.placar.innerHTML = " -- ";
    } else{
        _comandos.placar.innerHTML = "";
    }

});

_comandos.iniciarPartida.addEventListener("click", () => {
    if(_dados.ligarJogo || _dados.ganhou){
        iniciarNovaPartida();
    }
});

function iniciarNovaPartida() {
    
    _dados.ganhou = false;
    _dados.sequenciaJogo = [];
    _dados.sequenciaJogador = [];
    _dados.acenderLuz = 0;
    _dados.rodada = 1;
    _comandos.placar.innerHTML = "1";
    _dados.continuarJogo = true;

    for(i=0;i<20;i++){
        _dados.sequenciaJogo[i] = Math.floor(Math.random()*4 +1)
    
        _dados.timeout = setInterval(rodadaJogo, 800);

        console.log(_dados.timeout);
    }

}

function rodadaJogo() {
    _dados.ligarJogo = false;
    limparCores();
    setTimeout(() => {
        switch (_dados.sequenciaJogo[_dados.acenderLuz]) {
            case 1: ligarVerde(); break;
            case 2: ligarVermelho(); break;
            case 3: ligarAzul(); break;
            case 4: ligarAmarelo(); break;
        }
        _dados.acenderLuz++;
    }, 200);
}

function ligarVerde(){
    _comandos.verde.style.backgroundColor = "#90ee90"; 
    // tocar som 
}

function ligarVermelho(){
    _comandos.vermelho.style.backgroundColor = "#ff0000"; 
    // tocar som
}

function ligarAzul(){
    _comandos.azul.style.backgroundColor = "#0000ff"; 
    // tocar som
}

function ligarAmarelo(){
    _comandos.amarelo.style.backgroundColor = "#ffff00"; 
    // tocar som
}

function limparCores() {
    _comandos.verde.style.backgroundColor = "#006400"; 
    _comandos.vermelho.style.backgroundColor = "#8b0000"; 
    _comandos.azul.style.backgroundColor = "#00008b";
    _comandos.amarelo.style.backgroundColor = "#daa520";    
}

function acenderCores() {
    _comandos.verde.style.backgroundColor = "#90ee90"; 
    _comandos.vermelho.style.backgroundColor = "#ff0000"; 
    _comandos.azul.style.backgroundColor = "#0000ff";
    _comandos.amarelo.style.backgroundColor = "#ffff00";    
}

_comandos.verde.addEventListener("click", () => {
    if(_comandos.ligarJogo){
        _dados.sequenciaJogador.push(1);
        //compararResultado();
        ligarVerde();
        if (_dados.ganhou){
            setTimeout(()=> {
                limparCores();
            }, 300);
        }
    }
});

_comandos.vermelho.addEventListener("click", () => {
    if(_comandos.ligarJogo){
        _dados.sequenciaJogador.push(2);
        //compararResultado();
        ligarVermelho();
        if (_dados.ganhou){
            setTimeout(()=> {
                limparCores();
            }, 300);
        }
    }
});
_comandos.azul.addEventListener("click", () => {
    if(_comandos.ligarJogo){
        _dados.sequenciaJogador.push(3);
        //compararResultado();
        ligarAzul();
        if (_dados.ganhou){
            setTimeout(()=> {
                limparCores();
            }, 300);
        }
    }
});
_comandos.amarelo.addEventListener("click", () => {
    if(_comandos.ligarJogo){
        _dados.sequenciaJogador.push(4);
        //compararResultado();
        ligarAmarelo();
        if (_dados.ganhou){
            setTimeout(()=> {
                limparCores();
            }, 300);
        }
    }
});

function compararResultado () {
    // if(_dados.sequenciaJogador[_dados.sequenciaJogador.length - 1] 
    //     != _dados.sequenciaJogo[_dados.sequenciaJogo.length - 1]) {
    //     _dados.ganhou = false;
    // }  

    console.log("comparaResultado");
    return;
}