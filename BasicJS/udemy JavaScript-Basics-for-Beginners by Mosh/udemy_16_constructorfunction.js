//Countructor Function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(1);
const x = {};
console.log(Circle);//[Function: Circle]