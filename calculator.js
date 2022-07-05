
const input = document.getElementById('input');
var firstNumber;
var mathTemdeg;

function displays(temdeg){
    firstNumber=input.value;
    mathTemdeg = temdeg;
    input.value="";
}

function display(tovch, mathematical){
    // if(mathematical){
    //     firstNumber = input.value;
    //     input.value="";
    // }else{
        // }
    input.value+=tovch;
}

function Clear(){
    // firstNumber=''
    input.value='';
}

function DEL(){
    input.value = input.value.slice(0, input.value.length-1)
}


function Calculate(){
    input.value=eval(firstNumber+mathTemdeg+input.value)
}