        var x = parseInt(prompt("Digite o o número de maçãs compradas: "));

        if (x < 12) {
            document.write ("O valor total da compra é: " + "R$ " + (0.30 * x))
        }

        if (x >= 12) {
            document.write ("O valor total da compra é: " + "R$ " + (0.25 * x))
        }