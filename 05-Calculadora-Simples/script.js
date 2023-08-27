 
const display = document.getElementById("display");



function insert(num){
    var numero = display.innerHTML; 
    if(numero.length > 9){
        alert("Máximo de caracteres alcançado!!")
        location.reload()
    }
      
    if (numero === "" && /[\+\*\/]/.test(num)) {
        alert("Você não pode começar com um operador!");
        return;
    }
    if (/[\-\+\*\/]$/.test(numero) && /[\-\+\*\/]/.test(num)) {
        alert("Você não pode inserir um operador após outro operador!");
        location.reload()
    }

document.getElementById("display").innerHTML =numero + num; 
}

function Calc(){
    var resultado = display.innerHTML;
    if(resultado > ""){
        display.innerHTML = eval(resultado);
    }else{
        alert('Não tem nada para somar')
    }
}

function Back(){
    var resultado = display.innerHTML;
    display.innerHTML = resultado.substring(0, resultado.length -1)
}
function clean(){

    if(display.length == "0"){
        alert("A calculadora está vazia")
    }else{
    display.innerHTML = ""
    }
}







