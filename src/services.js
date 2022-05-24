
export function somar (n1 , n2){
    let x = n1+ n2
}

export function dobro (n){
    let a = n * 2
}

export function temperatura (temp) {
    let x = temp;
    if(x>=38)
            x = true;

    else
        x = false;

}
export function media( n1,n2,n3){
     let media = (n1+n2+n3)/ 3;
     return media;
 }


 function CorPrimaria(cor) {
    let x = true;
     if(cor == "azul" || cor == "vermelho" || cor == "amarelo")
      x = true;
      else{
          x = false;
      }
     return x;
 }

 