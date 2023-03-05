//     const h1 = document.querySelector('.container h1');
//     const data = new Date();
//     const diaDaSemana = data.getDay();
//     const mes = data.getMonth();
//     const ano = data.getFullYear();
//     const hora = data.getHours();
//     const minuto = data.getMinutes();
//     const data1 = data.getDate();

//     let diaTexto;
//     let mesTexto;

//     switch (diaDaSemana){
//         case 0: diaTexto = 'domingo';
//         break
//         case 1: diaTexto = 'Segunda';
//         break
//         case 2: diaTexto = 'Terça';
//         break
//         case 3: diaTexto = 'Quarta';
//         break
//         case 4: diaTexto = 'Quinta';
//         break
//         case 5: diaTexto = 'Sexta';
//         break
//         case 6: diaTexto = 'Sabado';
//         break
//         default: diaTexto = " ";
//     }
//     switch (mes){
//         case 0: mesTexto = 'Janeiro'
//         break
//         case 1: mesTexto = 'Fevereiro'
//         break
//         case 2: mesTexto = 'Março'
//         break
//         case 3: mesTexto = 'Abril'
//         break
//         case 4: mesTexto = 'Maio'
//         break
//         case 5: mesTexto = 'Junho'
//         break
//         case 6: mesTexto = 'Julho'
//         break
//         case 7: mesTexto = 'Agosto'
//         break
//         case 8: mesTexto = 'Sembro'
//         break
//         case 9: mesTexto = 'Outubro'
//         break
//         case 10: mesTexto = 'Novembro'
//         break
//         case 11: mesTexto = 'Dezembro'
//         break
//     }
// h1.innerHTML =`${diaTexto}, ${data1} de ${mesTexto} de ${ano}<br>${hora}:${minuto}`

////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const h1 = document.querySelector('.container h1');
//   const data = new Date();
//   h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle:'full'});
//   h1.innerHTML = data.toLocaleDateString('pt-BR', {timeStyle:'full'});
/////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\