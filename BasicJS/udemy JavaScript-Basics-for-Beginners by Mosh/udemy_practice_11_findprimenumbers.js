//Prime number - The number can not be devided by the number itself.

// showPrimes (whose factors are only 1 and itself)
// Composite

// 12 = 1,2,3,4,6,12
// can be divided evenly by its factors

// 11 = 1...11
// 13 = 1...13

showPrimes(11);
// showPrimes(11);

function showPrimes(limit){
    for(let apple = 2; apple <= limit; apple++) 
        if (isPrime(apple)) console.log(apple);
}

function isPrime(apple){
    for(let green = 2; green < apple; green++)
        if(apple % green === 0)
            return false;
    return true;
}