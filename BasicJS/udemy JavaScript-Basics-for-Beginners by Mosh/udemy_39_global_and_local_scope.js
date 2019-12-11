const color = 'red';//global scope

console.log(color);//red


function start() {
    const message = 'hi';
    const color = 'blue';//local scope
    console.log(color, message);
}
function stop() {
    const message = 'bye';
    console.log(message);
}

start();//blue
stop();//bye
