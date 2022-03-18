        var x = parseFloat(prompt("Digite um número"));
        var y = parseFloat(prompt("Digite um número"));
        var z = parseFloat(prompt("Digite um número"));
        var w = parseFloat(prompt("Digite um número"));
     

            if (x) {
                document.write("Primeiro número informado: " + x);
            }

            if (w) {
                document.write("<br> <br> Último número informado: " + w);
            }

            if (x > y && x > z && x > w ){
                document.write("<br> <br>O maior de todos eles é: " + x);
            }

            else if (y > x && y > z && y > w ) {
                document.write("<br> <br>O maior de todos eles é: " + y);
            }

            else if (z > x && z > y && z > w ) {
                document.write("<br> <br>O maior de todos eles é: " + z);
            }

            else if (w > x && w > z && w > y ) {
                document.write("<br> <br>O maior de todos eles é: " + w);
            }
