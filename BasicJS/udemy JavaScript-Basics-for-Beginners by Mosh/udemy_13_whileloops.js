/*What I learn here:
-------------------------------------
3 kinds of loops
 (1)loop
 (2)while loop
 (3)do while loop
-------------------------------------
 */
// (1)loop
// for (let i = 0; i <= 5; i++){
//     if(i % 2 !== 0) console.log(i);
// }
// (2)while loop
// let i = 0;
// while (i <= 5){
//     while(i <= 5){
//         if (i%2 !== 0) console.log(i);
//         i++;
//     }
// }
// (3)do while loop
let i = 9;
do {
    if(i % 2 !== 0) console.log(i);
    i++;
    } while (i <=5);