const BtnOnOff = document.getElementById('btnOnOff')
/* Pegar o button */
const img = document.getElementById( 'lamp' )
/* Pega a imagem da lampada*/

function isLampBroken () {
    return img.src.indexOf ( 'quebrada' ) > -1
}

function lampBroken(){
    img.src = './img/quebrada.jpg';
}

function lampOn () {
    if ( !isLampBroken () ) {
        img.src = './img/ligada.jpg';
    }
}

function lampOff () {
    if ( !isLampBroken () ) {
        img.src = './img/desligada.jpg';
        BtnOnOff.textContent = 'Ligar';
    }
}


function lampOnOff () {
    if ( BtnOnOff.textContent == 'Ligar' ) {
        lampOn();
        BtnOnOff.textContent = 'Desligar';
    }else{
        lampOff();
        BtnOnOff.textContent = 'Ligar';
    }
}

BtnOnOff.addEventListener('click',lampOnOff);
img.addEventListener('mouseover',lampOn);
img.addEventListener('mouseleave',lampOff);
img.addEventListener('dblclick',lampBroken);

