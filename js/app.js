function atualizarTempo(){
let data = new Date();
let horas = corrigirHorario(data.getHours());
let minutos = corrigirHorario(data.getMinutes());
let segundos = corrigirHorario(data.getSeconds());

let horario = `${horas} : ${minutos} : ${segundos}`;
document.querySelector(".horario").textContent = horario;
}

function corrigirHorario(tempo){
    if(tempo < 10){
        tempo = '0' + tempo;
    }
    return tempo;
}

atualizarTempo();
setInterval(atualizarTempo, 1000);

// a função serInterval recebe dois parametros: a função e o tempo(em milissegundos), diante disso, a função setInterval executa a função passada para ela como parametro a cada intervalo especificado como parametro