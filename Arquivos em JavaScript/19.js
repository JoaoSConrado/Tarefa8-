            var gremio = parseInt(prompt("Digite o número de gols marcados pelo Grêmio: "));
            var inter  = parseInt(prompt("Digite o número de gols marcados pelo Inter: "));

            if (gremio > inter) {
                alert("Grêmio ganhou a partida!!!")
            }

            if (inter > gremio) {
                alert("Inter ganhou a partida!!!")
            }

            if (inter == gremio) {
                alert("EMPATE")
            }