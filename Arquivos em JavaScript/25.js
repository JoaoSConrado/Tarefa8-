        var num1 = parseInt(prompt("Digite um número (inteiro): "));
        var num2 = parseInt(prompt("Digite um número (inteiro): "));
        var operacao = parseInt(prompt("DIGITE O NÚMERO DE QUAL OPERAÇÃO VOCÊ DESEJA REALIZAR? \n 1. Adição \n 2. Subtração  \n 3. divisão  \n 4. Multplicação   "));
        
       if (operacao == 1) {
           alert(num1 + num2);
       }

       if (operacao == 2) {
           alert(num1 - num2);
       }

       if (operacao == 3) {
           alert(num1 / num2);
       }

       if (operacao == 4) {
           alert(num1 * num2);
       }