// // slovo = prompt("Unesite samoglasnik");
// // if (slovo === "a" || slovo === "e" || slovo === "i" || slovo === "o" || slovo === "u") {
// //     alert("Samoglasnik je unet");
// // }  if (Number(slovo)) {
// //     prompt("Uneli ste broj. Unesite samoglasnik!")
// // }



// array.array.forEach((element) => {
//     console.log(el + 10);
// });
// console.log(object);


arr = [
    [1, 2, 3],
    [4, 5, 6, 7, 9],
    [7]
];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j], i, j);
    }
}
