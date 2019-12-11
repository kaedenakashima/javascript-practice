// ---what I learn here------------------
// let object = value;
// let newObject = object > x ? true: false;
//console.log(newObject);

// and you'll get..
// true
// -------------------------------------
//  let object1 = true;
//  let object2 = false; 
//  let newObject = object1 || object2;
 //console.log('text', newObject);
// -------------------------------------

// let points = 110;
let points = 90;
let type = points > 100 ? 'gold': 'silver';
console.log(type);

let highIncome = true;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan);

let applicationRefused = !eligibleForLoan;
console.log('application Refused', applicationRefused);