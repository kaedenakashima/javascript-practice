/*What I learn here:
-------------------------------------
(1)switch statement 
switch(object){
    case 1 :
        cosnsole.log('')
    case 2 :
        cosnsole.log('')
    default :
        cosnsole.log('')
}

(2)if statement
if(object === 1) console.log('');
else if(object === 2) console.log('');
else console.log('');

-------------------------------------
 */

// let role;
// let role = 'guest';
 let role = 'moderator';
// let role = 'apple';

// switch (role) {
//     case 'guest':
//         console.log('Guest User');
    
//     case 'moderator':
//         console.log('Moderator User');
    
//     default:
//         console.log('Unknown User');
// }

if (role === 'guest') console.log('Guest');
else if (role === 'moderator') console.log('Moderator User');
else console.log('Unknown User');