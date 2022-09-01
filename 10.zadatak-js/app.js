// // var m = [[25,34], [18,51], [92,44]];  // matrica dimenzije 3x2

// //   // u konzoli ispisuje jedan po jedan element matrice
// //   for (var i=0; i<3; i++) {
// //     for (var j=0; j<2; j++) {
// //       console.log( m[i][j] );
// //     }
// //   }
// unos = Number(prompt("Unesite broj"));
// lastN = 0;
// for (i=1; i <= unos; i++) {
// str = ""
//     for( j=0; j <= i; i++) {
//     lastN++;
//     str += lastN
// }
// console.log(str);
// }
// unos = Number(prompt("Unesite broj"));
// for (i=1; i<= unos; i++){
//     str = "";
//     for(j=1; j <= i; i++) {
//         str += i
//     }
//     // cl=console.log(str);
// }


// console.log("  *  ");
// unos = 4
// zvezdice ="*"
// for (i=0; i < unos;i++) {
//     razmak= ""
//     for(j=i; j< unos; j++) {
//         razmak += " ";
//     }
//     console.log(razmak + zvezdice);
//     zvezdice += " *"

// }

// const number = [2,4,6,8,10]
// const kvadrati = number.map((el) => { //map ima tri argument 1. element 2. index 3. array
//     return el* el;;
// })
// console.log(kvadrati);

// const number = [2,4,6,8,10]
// const koreni = number.map((el) => { //map ima tri argument 1. element 2. index 3. array
//     return Math.sqrt(el);
// })
// console.log(koreni);

// const numbers = [1,2,3,4,5,6,7,8]

// const filtriraniNiz = numbers.filter (el => { //filter da se otkloni ili ocisti
//     return el % 2 === 0 // ili return el % 2 !=== 0 da nisu parni
// })
// console.log(filtriraniNiz);

//niz da je novi gde su pomnozeni sa tri nakot toga da se kvadrira rezultat nakon toga da se filtrira svi brojevi koji su veci od 15

const numbers = [7, 10, 12,14, 4]

const mnozenje = numbers.map ((el) => { 
    return el *3;
})
console.log(mnozenje);

kvadratMnozenja = mnozenje.map ((el) => {
    return el * el
})
console.log(kvadratMnozenja);

filtriranje = kvadratMnozenja.filter ((el) => {
    return el > 50
})
console.log(filtriranje);