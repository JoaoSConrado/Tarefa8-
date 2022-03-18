
var x = parseFloat(prompt("Digite um número"));
var y = parseFloat(prompt("Digite um número"));
var z = parseFloat(prompt("Digite um número"));
     

if (x < y && x < z) {
    document.write("A soma dos 2 maiores é: " + (y + z));
}

else if (y < x && y < z) {
    document.write("A soma dos 2 maiores é: " + (x + z));
}

else if (z < x && z < y) {
    document.write("A soma dos 2 maiores é: " + (y + x));
}


