// street
// city
// zipCode
// showAddress(address)

// let address = {
//     street: 'a',
//     city: 'b',
//     zipCode: 'c'
// };

// function showAddress(address){
//     for (let key in address)
//         console.log(key, address[key]);
// };

//showAddress(address);//street a city b zipCode c

// Factory Function
// let address = createAddress('a', 'b', 'c');
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
};
//console.log(address);//{ street: 'a', city: 'b', zipCode: 'c' }

//Constructor Function
let address = new Address('a', 'b', 'c');
function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
//console.log(address);//{ street: 'a', city: 'b', zipCode: 'c' }
let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
let address3 = address1;
console.log(areEqual(address1, address2));//true 
console.log(areSame(address1, address2));//false because it's not same object.
console.log(areSame(address1, address3));//true becuse it's pointing the same memory.


//Constructor Function
function areEqual(address1, address2){
    return address1.street === address2.street && 
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode;
}

function areSame(address1, address2){
    return address1 === address2;
}

