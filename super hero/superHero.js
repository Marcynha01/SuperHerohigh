let n1, n2, operacao, resultado;

gerarfun()
function corrigir() {
let resposta = document.getElementById("numero").value;
    if(resposta == resultado){
        alert("Parabéns, certa resposta")
    }else{
        resultado != resultado
         alert("Você errou, tente mais uma vez!!")
    }
    gerarfun()
    
}
function gerarfun(){
    do {
        n1 = Math.floor(Math.random() * 10);
        n2 = Math.floor(Math.random() * 10);
        operacao = Math.floor(Math.random() * 10);
      
        if (operacao == "0") {
          resultado = n1 + n2;
          document.getElementById("repete").innerHTML = n1 + "+" + n2;
        } else {
          resultado = n1 - n2;
          document.getElementById("repete").innerHTML = n1 + "-" + n2;
        }
      } while (resultado < 0 || resultado > 9)
      document.getElementById("numero").focus()
    }
