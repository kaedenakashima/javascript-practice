// title
// body
// author
// views
// (author, body)
// isLive

// let post = {
//     title : 'a',
//     body: 'b',
//     author: 'c',
//     views: 10,
//     comments:[
//         {author:'a', body: 'b'},
//         {author: 'c', body: 'd'},
//     ],
//     isLive: true
// };

//console.log(post);//{ title: 'a', body: 'b', author: 'c', views: 10, comments: [ { author: 'a', body: 'b' }, { author: 'c', body: 'd' } ], isLive: true }

let post = new Post('a', 'b', 'c');

console.log(post);//Post { title: 'a', body: 'b', author: 'c', views: 0, comments: [], isLive: false }

function Post(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;//default value
    this.comments = [];//default value
    this.isLive = false;
}


