function somar(){
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var resultado = document.getElementById("res");
    num1 = Number(num1)
    num2 = Number(num2)
    resu = num1 + num2
    resultado.innerHTML = (`o resultado da soma entre ${num1} + ${num2} é igual a: ${resu}`)


}

function nome(){
var nome = window.prompt(`Qual seu nome`)
document.write(` olá ${nome} seu nome tem ${nome.length} letras <br> `)
document.write(`seu nome em maiúsculo é ${nome.toUpperCase()} <br> `)
document.write(`seu nome em minusculo é ${nome.toLowerCase()} <br>`)
}

var n1 = 21.98563
n1.toFixed(2).replace('.',',')
window.alert(n1.toFixed(2).replace('.',','))
