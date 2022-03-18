var valorCapacete = 18.230
var parcelasCapacete = parseInt(prompt("Digite em quantas vezes você quer parcelar"));


if (parcelasCapacete > 15) {
    alert("O máximo é 15 vezes sem juros")
} else {
document.write ("O valor de cada parcela será: " + parcelasCapacete + "x de "+ "R$ " + (valorCapacete/parcelasCapacete).toFixed(3));
    
}