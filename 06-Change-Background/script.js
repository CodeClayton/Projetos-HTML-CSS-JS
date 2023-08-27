const Container = document.querySelector('.container');
const Color = document.querySelector('input');

const CorPadrao = '#fff';



function BgChange(){

    Container.style.backgroundColor = `${Color.value}`;
};