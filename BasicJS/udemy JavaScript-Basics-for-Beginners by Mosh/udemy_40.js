// function start() {
//     for (var i = 1; i < 10; i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// start();012345
// var => function-ScopedCredential
// ES6(ES2015): let, const => block-ScopedCredential




// var color = 'red';
// let age = 30;

// function sayHi() {
//     console.log('hi')
// }

// method -> Obj
// function -> global (window, global)

// const video = {
//     title : 'a',
//     play() {
//         console.log(this);
//     }
// };

// function Video(title) {
//     this.title = title;
//     console.log(this);//Video { title: 'b' }
// }


// const v = new Video('b');//{}


const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};

video.showTags();//a a  a b  a c



function playVideo() {
    console.log(this);
}

playVideo.call({ name: 'Katie'}, 1, 2);
playVideo.apply({ name: 'Katie'}, [1, 2]);
const fn = playVideo.bind({ name: 'Katie'});
fn();

playVideo();
