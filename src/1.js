function CorPrimaria(cor) {
    let x = true;
     if(cor == "azul" || cor == "vermelho" || cor == "amarelo")
      x = true;
      else{
          x = false;
      }
     return x;
 }
 console.log(CorPrimaria(azul));