// // function test(){
// //     console.log("iz deklarisane funkcije");
// //   }                                        // prvo se diže cela funkcija
// //   var test;                                // zatim se diže deklaracija promenjive
// //   var test = function (){
// //     console.log("iz function expression");
// //   }                                        // ostalo na istom mestu u kodu
// //   test();                                    // ostalo na istom mestu u kodu


// fetch("https://catfact.ninja/facts")
// .then((res) => {
//   res.json().then((res) => {
//     console.log(res.data);
//     max = 0;
//     for (el of res.data) {
//       if(el.length > max){
        
//       }
//     }
//   });
// })
// .catch((err) => {
//   console.log("nesupesno zbog erora", err);
// });

// ip 
// http
// https
// dns
// osi model
// tcp 
// ruter \


getData = fetch('https://catfact.ninja/fact');

getData
.then((response)=> {
    return response .json();
})
.then((commits)=> {
    console.log(commits);
    commits.data.forEach(element => {
        console.log(element.fact);
    });
})
.catch((err)=> {
    console.log("greska", err);
});
