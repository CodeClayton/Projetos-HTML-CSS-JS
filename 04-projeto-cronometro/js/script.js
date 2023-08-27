var milisecond = 0
var second = 0
var min = 0
var intervalo;
const time = document.getElementById('timer')
const startStopBtn = document.getElementById('startBtn') 
var btn = true;
var ativo = false;





function TwoDigit (digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }

}

function alternarIntervalo() {
    if (ativo) { 
        clearInterval(intervalo);
        ativo = false;
        startStopBtn.textContent = "Iniciar"
        startStopBtn.style.backgroundColor= "green"
    } else {
        intervalo = setInterval(timer,10)
         ativo = true;
        startStopBtn.textContent = "Pausar"
        startStopBtn.style.backgroundColor= "red"
    }
    
}

/* Verifica se o botão foi ativado ou desativado e começa o cronometro */
function timer(){
    time.style.color = "black"
    milisecond++
    if(milisecond==60){
        second++
        milisecond=0
    }if(second==60){
        min++
        second=0
    }
    time.innerText=TwoDigit(min)+':'+TwoDigit(second)+':'+TwoDigit(milisecond)
}
/*Adiciona um digito para o segundo/minuto a cada 60 repetições */

function stop(){
    ativo = false;
    startStopBtn.textContent = "Iniciar"
    startStopBtn.style.backgroundColor= "green"
    time.style.color= "#646464"
    clearInterval(intervalo);
    milisecond=0
    second=0
    min=0
    time.innerText='00:00:00'
}