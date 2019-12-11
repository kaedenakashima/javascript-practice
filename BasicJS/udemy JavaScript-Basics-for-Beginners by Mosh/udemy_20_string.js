//String primitive
const message = ' This is my\n first message ';
console.log(message.length); //25
console.log(message[0]); //T
console.log(message.indexOf('my'));//8 (true)
console.log(message.toUpperCase());//THIS IS MY FIRST MESSAGE
console.log(message.trim()); //'This is my first message'
console.log(message.split(' ')); //[ 'This', 'is', 'my\n', 'first', 'message' ]


//String Object
// const another = new String('hi');
// const message = 
// 'this is my\n' +
// '\'first\' message';
const name = 'John';
const newMessage = 'Hi ' + name + ',\n';

const another = 
`${newMessage},
Thank you for joining my mailing list.

Regards,
Katie`;
console.log(another);//Hi John, Thank you for joining my mailing list.Regards,Katie