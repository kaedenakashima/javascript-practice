// const output = fizzBuzz(3); //divisible by 3 => Fizz
//const output = fizzBuzz(5); // divisible by 5 => Buzz
//const output = fizzBuzz(15); // divisible by both 3 and 5 => Fizz Buzz
//const output = fizzBuzz(11); // not disible by 3 or 5 => the number as is
const output = fizzBuzz('Hello'); //Not a number => 'Not a number'
console.log(output);
function fizzBuzz(input){
    if (typeof input !== 'number')
        return 'Not a number';
        
    if((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz'

    if(input % 3 === 0)
        return 'Fizz';
    
    if(input % 5 ===0)
        return 'Buzz';
    

    return input;
}