const OPERADORES = ["+", "-", "*", "/", "."]; 
let resultado = 0;
function inserirNumero(valor){
    let operacao = document.getElementById("operacao").innerText;
    
    if(operacao === null || operacao === ""){
       document.getElementById("operacao").innerText = valor;
        return true;
    }

    document.getElementById("operacao").innerText += valor; 
}

function limparTela(){
    document.getElementById("operacao").innerText = null;
    document.getElementById("resultado").innerText = "";
}
function apagarNumero(){
    let operacao = document.getElementById("operacao").innerText;
    operacao = operacao.slice(0, -1);
    document.getElementById("operacao").innerText = operacao;

}

function inserirOperador(operador){

    let operacao = document.getElementById("operacao").innerText;
    if(!OPERADORES.includes(operacao.slice(-1))){
        document.getElementById("operacao").innerText += operador;
    }
}

function calcular(){
    let operacao = document.getElementById("operacao").innerText;
    resultado = eval(operacao);
    document.getElementById("resultado").innerText = resultado.toFixed(2);
}




