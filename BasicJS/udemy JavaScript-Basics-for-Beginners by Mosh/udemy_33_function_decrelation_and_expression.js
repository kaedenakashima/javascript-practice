/*What I learn here:
-----------------------------------------------------
hoisting - JavaScript's default behavior of moving all
           declarations to the top of the current scope
           (to the top of the current script or the cur-
            rent function).


-----------------------------------------------------
 */
//Function Declaration
walk();
function walk() {
    console.log('walk');
}

//Function Expression
//let x =1;//error
//run();//error
const run = function() {
    console.log('run');
};
let move = run;
run();//run
move();//run

