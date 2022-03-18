        var odômetroInicioDia       = parseFloat(prompt("Digite a marcação do odômetro(Km) no início do dia:"));
        var odômetroFimDia          = parseFloat(prompt("Digite a marcação do odômetro(Km) no fim do dia:"));
        var litrosCombustivel       = parseFloat(prompt("Digite o número de litros de combustível gasto:"))
        var valorPassageiros        = parseFloat(prompt("valor total(R$) recebido dos passageiros:"))

        document.write ("A média do consumo diário foi: " + ((odômetroFimDia - odômetroInicioDia)/litrosCombustivel) + "Km/L");

        document.write (" <br> <br> O Lucro Líquido diário foi: " + "R$ " +(valorPassageiros - (litrosCombustivel * 2.90)));
