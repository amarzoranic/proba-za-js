prvaocena = Number(prompt("Unesi prvu ocenu"));  
 drugaocena = Number(prompt("Unesi drugu ocenu"));  
 trecaocena = Number(prompt("Unesi trecu ocenu")); 
srednjaocena = (prvaocena + drugaocena + trecaocena) / 3;
console.log(srednjaocena);

if (srednjaocena >= 90 &&  srednjaocena < 100){
    console.log("srednjaocena je A");      
    } 
  else if (srednjaocena >= 80 && srednjaocena < 90) {
          console.log("srednjaocena je B"); 
            } 
  else if (srednjaocena >= 70 && srednjaocena < 80) {
       
          console.log("srednjaocena je C"); 
  } 
  else if (srednjaocena >= 60 && srednjaocena < 70) {
          console.log("srednjaocena je D"); 
  } 
  else if (srednjaocena > 0 && srednjaocena < 60) {
          console.log("srednjaocena je F"); 
 }

