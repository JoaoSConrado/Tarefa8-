var x = parseFloat(prompt("Digite um número"));
var y = parseFloat(prompt("Digite um número"));
var z = parseFloat(prompt("Digite um número"));
     

if (x > y && x > z) {
    ocument.write("O número maior é: " +x);
}

if (y > x && y > z) {
    document.write("O número maior é: " +y);
}

if (z > y && z > x) {
    document.write("O número maior é: " +z);
}