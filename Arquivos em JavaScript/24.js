        var javali1     = parseInt(prompt("Informe a Idade do 1° Javali: "));
        var javali2     = parseInt(prompt("Informe a Idade do 2° Javali: "));
        var girafa1     = parseInt(prompt("Informe a Idade da 1° Girafa: "));
        var girafa2     = parseInt(prompt("Informe a Idade do 2° Girafa: "));
        var javalimaior = 0;
        var javalimenor = 0;
        var girafamaior = 0;
        var girafamenor = 0;

        if (javali1 > javali2) {
            javalimaior = javali1;
            javalimenor = javali2;
        } else {
            javalimaior= javali2;
            javalimenor = javali1;
        }

        if (girafa1 < girafa2) {
            girafamenor = girafa1;
            girafamaior = girafa2;
        } else {
            girafamenor= girafa2;
            girafamaior = girafa1;
        }

        document.write("<br>A soma da idade do Javali mais velho com a Girafa mais nova é: " + (javalimaior + girafamenor) + "<br><br> O produto da idade do Javali mais novo com a Girafa mais velha é: " + (javalimenor * girafamaior));
