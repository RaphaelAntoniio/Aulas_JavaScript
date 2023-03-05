// if == SE
//else == SE NÃO

const hora = 19 ;

if(hora >= 0 && hora <= 11 ){
    console.log('Bom dia!')
}else if(hora >= 12 && hora <=17 ){
    console.log('boa tarde')
}else if(hora >= 18 && hora <= 23){
    console.log('boa noite')
}else{
    console.log('insira uma hora correta.')
}