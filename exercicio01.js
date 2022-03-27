function Prestacao(){

    var valor = parseInt(document.getElementById("valor").value);
    var entrada = parseInt(document.getElementById("entrada").value);
    var prestacao = parseInt(document.getElementById("prestacao").value);
    
        var resultado = (valor - entrada) / prestacao;
    
             document.getElementById("Resultado").innerHTML = "resultado: " + resultado;
    
    
             console.log((valor - entrada) / prestacao)
    
    }

    

    function cavalo() {

        var branco = “preto”;
        var preto = “cinza”;
        var cinza = “branco”;
        var carro = “preto”;

        if (carro == "branco"){
            cavalo = "carro";
        } Else {
            cavalo = "marrom"
        }

            }