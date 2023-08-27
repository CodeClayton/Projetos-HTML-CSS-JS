const hora = document.getElementById('hora');
/* Puxa com o DOM a div com id hora*/
const minuto = document.getElementById('minuto');
/* Puxa com o DOM a div com id minuto*/
const segundo = document.getElementById('segundo');
/* Puxa com o DOM a div com id segundo*/

const relogio = setInterval(function time (){
    let data = new Date();
    /* pega o HORARIO DO DIA */
    let hr =  data.getHours()
    let min = data.getMinutes()
    let s = data.getSeconds()

    if(hr<10) hr='0'+hr;
    if(min<10) min='0'+min;
    if(s<10) s='0'+s;
    /*Caso a hora/minuto/segundo <10 = "0" + var*/


    hora.textContent = hr;
    minuto.textContent = min;
    segundo.textContent = s
    /* Colocar a Hora atual para a div */

    if(hr>=6 && hr<12){
        document.body.style.background= "linear-gradient(45deg,#ADC5D9,#6D7E8C)"
    }if(hr>=12 && hr<18){
        document.body.style.background= "linear-gradient(45deg,#F2A649,#F27D16)"
    }if(hr>=18 && hr<6){
        document.body.style.background= "linear-gradient(45deg,#253759,#1F2126)"
    }
    /*Mudar fundo de acordo com o horario*/


})