
export function somar (n1 , n2){
    let x = n1+ n2
    return x;
}

export function dobro (n){
    let a = n * 2;
    return a;
}

export function temperatura (temp){
    let a = true;
    if(temp > 37){
        a = true;
    }
    else{
        a= false;
    }

    return a;
}
export function media( n1,n2,n3){
     let media = (n1+n2+n3)/ 3;
     return media;
 }


 export function corprimaria(cor) {
    let x = true;
     if(cor == "azul" || cor == "vermelho" || cor == "amarelo")
        x = true;
      else
          x = false;
     return x;
 }

 export function ingresso(qtdInteira, qtdMeia, diaSemana, nacionalidade) { 
    if (nacionalidade.toLowerCase() == 'brasileira')  
        return (qtdInteira+ qtdMeia) * 5;

    else if (diaSemana.toLowerCase() == 'quarta') 
        return (qtdInteira + qtdMeia) * 14.25;

    else
        return (qtdInteira * 28.5) + (qtdMeia * 14.25);

}
    
 

 export function freq (frase , n){
     let c = 0;
     for (let letra of frase){
         if (letra == n ){
             c++;
         }
     }
     return c;
 }

 export function maoirnumero(numeros){
     let maior = Number.MIN_VALUE;
     for(let item of nummeros){
         if (itens > maior ) {
             maior = item;
         }
     }
     return maior;
 }
 