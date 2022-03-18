var x = parseInt(prompt("Digite o número de lados de um polígono regular: " ));

if (x == 3) {
    alert("É um Triângulo!!! " + "seu perímetro é: " + (x+x+x) + "!")
}

if (x == 4) {
    alert("É um Quadrado!!! " + "seu perímetro é: " + (x*x) + "!")
}

if (x == 5) {
    alert("É um Pentágono!!! " )
}

if (x < 3) {
    alert("Não é um Polígono!!! " )
}


if (x > 5) {
    alert("Polígono não identificado!!! " )
}
