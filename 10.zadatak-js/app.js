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

// const numbers = [7, 10, 12,14, 4]

// const mnozenje = numbers.map ((el) => { 
//     return el *3;
// })
// console.log(mnozenje);

// kvadratMnozenja = mnozenje.map ((el) => {
//     return el * el
// })
// console.log(kvadratMnozenja);

// filtriranje = kvadratMnozenja.filter ((el) => {
//     return el > 50
// })
// console.log(filtriranje);

// const arr1 = [12,15,19,22,58,36,-32, -58]

// filter = arr1.filter ((el)=> el > 18)
// console.log(filter);

//ispisati niz koji je sadrzan od elemenata starog niza pomnozen sa 3

// const arr1 = [12,15,19,22,58,36,-32, -58]

// arr2 = arr1.map (el => el *3)
// console.log(arr2);

//iz datog niza vratiti duplirane vrednosti parnih brojeva

// const arr1 = [1,35,47,65,44,12,78,87]
// arr2 = arr1.filter (el =>  el % 2===0).map (el => el * 2)
// console.log(arr2);

//slice kopira element
//splice (index, broj elementa koji se brise)

//reduce()metoda vraca jednu vrednost, kada hocemo da izvucemo sumu elemneata
//najcesci primeri za reduce() metodu su kada hocemo da dobijemu sumu


//vratiti sumu svih elemenata datog izraza:

// const arr1 = [1,3,5,7,9,]
// const suma = arr1.reduce((prevValue, curValue) => prevValue + curValue)

// console.log(suma);

// const arr1 = [1,35,47,65,44,12,78,87]

// let arr2 = arr1.forEach((el, index, array) =>  {
//    return console.log(el, index, array)});
//    console.log(arr2);

//iz datog niza izdvojiti sve parne brojeve vece od nule.atim vratiti sumu elemenata koji zadovoljavaju odredjene uslove pomn. sa 3.


// const arr1= [-56, -32, 55, 12, 14, 13, 45, 64]
// const sum= arr1.filter (el => el > 0 & el % 2===0 
//     ).map(el => el *3
//         ).reduce((prevValue, curValue) => prevValue + curValue)
// console.log(sum);

//reduce-2.primer

// const arr1 = [420, 990, 1320, 560, 740, 2090]

// const racun = arr1.reduce((prevValue, currValue) => prevValue + currValue, 400)
// console.log(racun);


//iz datog niza vratiti sumu elemenata koji su iz intervala (12,32)pomnoziti sa 5
//pocetna vrednost sume treba biti 299

// const arr1 = [-14, 26, 21, 13, 19, 55, 46, 58, 96]

// unos = Number(prompt("unesi broj"))
// for (i=1; i <= unos; i++){
//     str= ""
//     for(j=0; j< i; j++) {
//         str +=i;
//     }
//     console.log(str);
// }


// color = ["blue", "Green", "Red", "Orange", "Violet", "indigo", "Yelow"];
// o = ["th", "st", "nd", "rd"]
// redni = []
// redni = color.forEach(0, 0) => {
//     return 
// };

// arr1 [1,0,2,3,4];
// arr2 [3,5,6,7,8,13];


arr = [NaN, 0, 15, false , -22,"", undefined, 47, null]
 arr = arr.filter(el => {
    if (el) {
        return el
    }
 })

 console.log(arr);

   
