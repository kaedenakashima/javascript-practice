
// showPrimes (whose factors are only 1 and itself)
// Composite

// 12 = 1,2,3,4,6,12
// can be divided evenly by its factors

// 11 = 1,11
// 13 = 1,13

showPrimes(10);
// showPrimes(11);

function showPrimes(limit){
    for(let number = 2; number <= limit; number++) 
        if (isPrime(number)) console.log(number);
}

function isPrime(number){
    for(let factor = 2; factor < number; factor++)
        if(number % factor === 0)
            return false;
    return true;
}