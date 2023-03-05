const data = new Date();
const diaDaSemana = data.getDay();
let diaTexto;

switch (diaDaSemana){
 case 0: diaTexto = 'domingo';
 break
 case 1: diaTexto = 'Segunda';
 break
 case 2: diaTexto = 'Terça';
 break
 case 3: diaTexto = 'Quarta';
 break
 case 4: diaTexto = 'Quinta';
 break
 case 5: diaTexto = 'Sexta';
 break
 case 6: diaTexto = 'Sabado';
 break
 default: diaTexto = " ";
}
console.log(diaTexto);
    
