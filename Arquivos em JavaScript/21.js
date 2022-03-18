        var avaliacao1            = parseFloat(prompt("Digite a nota da 1º Avaliação: "));
        var avaliacao2            = parseFloat(prompt("Digite a nota da 2º Avaliação: "));
        var avaliacaoOptativa     = parseFloat(prompt("Digite a nota da Avaliação Optativa: "));
        var test1 = ((avaliacao2 + avaliacaoOptativa)/2);
        var test2 = ((avaliacao1 + avaliacaoOptativa)/2);
        var test3 = ((avaliacao2 + avaliacao1)/2);
       
        
            if (avaliacao1 <= avaliacao2 && avaliacao1 <= avaliacaoOptativa) {
                document.write("A média do semestre é: " + ((avaliacao2 + avaliacaoOptativa)/2) );
            }

            else if (avaliacao2 <=  avaliacao1 && avaliacao2 <= avaliacaoOptativa) {
                document.write("A média do semestre é: " + ((avaliacao1 + avaliacaoOptativa)/2) );
            }

            else if (avaliacaoOptativa <= avaliacao1 && avaliacaoOptativa <= avaliacao2) {
                document.write("A média do semestre é: " + ((avaliacao2 + avaliacao1)/2) );
            }

            if (test1 && test2 && test3 >= 6) {
                document.write("<br><br> APROVADO")
            } else if (test1 && test2 && test3 < 3) {
                document.write("<br><br> REPROVADO")
            } else if (test1 && test2 && test3 >= 3.5 && test1 && test2 && test3 < 6 ) { 
                document.write("<br><br> EXAME")
            }
        