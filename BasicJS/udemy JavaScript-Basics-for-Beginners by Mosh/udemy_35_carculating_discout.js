/*What I learn here:
-----------------------------------------------------
... - lest of the numbers
20 + 30 = 50 
50 * 0.1 = 5
50 - 5 = 45
-----------------------------------------------------
 */
function sum(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}
console.log(sum(0.1, 20, 30));//45
console.log(Object(0.1, 20, 30, 20, 30));//90

