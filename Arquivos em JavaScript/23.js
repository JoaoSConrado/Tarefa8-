            var maior = 0; 
            var menor = 0;
            var verificadorMaior = 0;
            var verificadorMenor = 0;

            for (let contador = 0; contador < 20; contador++) {
                var num = parseFloat(prompt("Digite um numero: "));
               
                var contadorMaior = num;
               
                if (contadorMaior > verificadorMaior) {
                    verificadorMaior = num;
                    maior = verificadorMaior;
                } else {
                    if (verificadorMaior == 0) {
                        verificadorMaior = num;
                    }

                }

                var contadorMenor = num;

                if (contadorMenor < verificadorMenor) {
                    verificadorMenor = num;
                    menor = verificadorMenor;
                } else {
                    if (verificadorMenor == 0) {
                        verificadorMenor = num;
                        menor = verificadorMenor;
                    }
                }
            } 
           
            alert("O maior numero foi: " + maior + ", e o menor foi: " + menor);
