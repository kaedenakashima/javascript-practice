const person = {
    firstName: 'Katie',
    lastName: 'Green',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
person.fullName = 'Katie Green';

//getters => access properties
//setters => change (mutate) them

console.log(person.fullName);//Katie Green
console.log(person);//{ firstName: 'Katie', lastName: 'Green', fullName: [Getter/Setter] }

