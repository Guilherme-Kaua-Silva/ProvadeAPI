
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

 export function ingressocinemas (qtdi, qtdm, diasemana, nacionalidade) {

    let preco = qtdi * 28.5;

    if(diasemana == "quarta"){
        preco = (qtdi * 28.5) / 2;

    }else if(qtdm){
        preco = (qtdm * 28.5) / 2;
    
        if(nacionalidade == "brasileira"){
            preco = 5;
        }

    }
    return preco;
 }

 