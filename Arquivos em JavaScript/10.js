alert("Insira números de 0 a 10");

var a = parseFloat(prompt("Digite um número"));
var b = parseFloat(prompt("Digite um número"));
var c = parseFloat(prompt("Digite um número"));
var d = parseFloat(prompt("Digite um número"));
var zerar = 0 


document.write ("<br> Números informados: <br>" + a +", "+ b +", "+ c +", "+ d +"."); 

if (a < 10 && a > 0) {
    (+a)
    
}
else if (a > 10 || a < 0) {
    a = zerar
}


if (b < 10 && b > 0) {
    (+b)
}
else if (b > 10 || b < 0) {
    b = zerar
}


if (c < 10 && c > 0) {
    (+c)
}
else if (c > 10 || c < 0) {
    c = zerar
}

if (d < 10 && d > 0) {
    (+d)
}
else if (d > 10 || d < 0) {
    d = zerar
}

document.write("<br> <br> A média dos números é: " + ((a+b+c+d)/4))

if (((a+b+c+d)/4) >= 5) {
    document.write("<br> <br> VOCÊ PASSOU NO TESTE!!!")
}

if (((a+b+c+d)/4) < 5) {
    document.write("<br> <br> TENTE NOVAMENTE!!!")
}