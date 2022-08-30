// var m = [[25,34], [18,51], [92,44]];  // matrica dimenzije 3x2

//   // u konzoli ispisuje jedan po jedan element matrice
//   for (var i=0; i<3; i++) {
//     for (var j=0; j<2; j++) {
//       console.log( m[i][j] );
//     }
//   }
unos = Number(prompt("Unesite broj"));
lastN = 0;
for (i=1; i <= unos; i++) {
str = ""
    for( j=0; j <= i; i++) {
    lastN++;
    str += lastN
}
console.log(str);
}