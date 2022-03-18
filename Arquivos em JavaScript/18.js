var sexo     = parseFloat(prompt("Digite 1 (Feminino)\nDigite 2 (Masculino)" ));
var altura   = parseFloat(prompt("Digite a sua altura (em metros):"));


if (sexo == 1) {
    document.write("O peso ideal para você é: " + ((72.7 * altura) - 58) + "Kg" ); 

}

if (sexo == 2) {
    document.write("O peso ideal para você é: " + ((72.7 * altura) - 58) + "Kg"); 

}