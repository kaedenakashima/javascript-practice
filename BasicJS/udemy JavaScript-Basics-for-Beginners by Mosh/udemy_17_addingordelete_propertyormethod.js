/*What I learn here:
--------------------------------------------------------------------------
You can add and delete property, object at outside of the function.
const object = {
    key1: value1
};

object.key2 = value2
Object.key3 = function () {} //Object : [function]

delete Object.key1;
delete Object.key3;

--------------------------------------------------------------------------
 */
const circle = {
    radius: 1
};

circle.color = 'yellow';
circle.draw = function() {}

// delete circle.color;
// delete circle.draw;

console.log(circle);// you'll get..  { radius: 1, color: 'yellow', draw: [Function] }
                    //if you add delete lines { radius: 1 }