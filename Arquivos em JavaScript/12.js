        var comprimentoPista        = parseFloat(prompt("Digite o comprimento da pista (em metros): "));
        var numeroVoltas            = parseFloat(prompt("Digite o número total de voltas: "));
        var numeroReabastecimentos  = parseFloat(prompt("Digite o número de reabastecimentos desejados"));
        var consumoCombustivel      = parseFloat(prompt("Digite o consumo de combustível do carro (em Km/L): "));
        var quantidadeCombustivel   = parseFloat(prompt("Digite a quantidade de litros que o carro pode possuir: "));


        if (quantidadeCombustivel <= ((((((comprimentoPista/1000))/numeroVoltas)/consumoCombustivel)*numeroVoltas)/numeroReabastecimentos)) {
            alert("VOCÊ PRECISA TER UM NÚMERO MAIOR DE REABASTECIMENTOS!!!")
        }

        else {
            document.write ("o número mínimo de litros necessários para percorrer até o primeiro reabastecimento é: " +((((((comprimentoPista/1000))/numeroVoltas)/consumoCombustivel)*numeroVoltas)/numeroReabastecimentos) + "L")
        }