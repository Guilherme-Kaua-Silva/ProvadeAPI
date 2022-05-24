function ingressoscinemas (qtdi, qtdm, diasemana, nacionalidade) {
    let a = 0;
    if(diasemana="quarta")
       a=14.25 * (qtdi+qtdm);

   if(nacionalidade="brasileira")
       a=14.25 * (qtdi+qtdm);
   else 
       a= 28.5 * (qtdi, qtdm);
   return a;
}