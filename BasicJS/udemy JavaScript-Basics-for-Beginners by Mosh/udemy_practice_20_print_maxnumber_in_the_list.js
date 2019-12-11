const numbers = [1, 2, 3, 4];

function getMax(array){
    if(array.length === 0) return undefined;
    return array.reduce((a, b) => (a > b) ? a : b);
}

const max = getMax([1, 2, 2, 1, 3]);
console.log(max);//3


