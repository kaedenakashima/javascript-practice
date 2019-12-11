// function interest(principal, rate = 3.5, years = 5) {
//     return principal * rate / 100 * years;
// }
// console.log(interest(1000));//175

// function interest(principal, rate = 3.5, years) {
//     return principal * rate / 100 * years;
// }
// console.log(interest(1000, undefined, 5));//175

function Object(p1, p2 = 3.5, p3) {
    return p1 * p2 / 100 * p3;
}
console.log(Object(1000, undefined, 5));//175