// const movies = [
//     {title: 'a', year: 2018, rating: 4.5},
//     {title: 'b', year: 2018, rating: 4.7},
//     {title: 'c', year: 2018, rating: 3},
//     {title: 'd', year: 2019, rating: 4.5},
// ];
// // All the movies in 2018 with rating > 4
// // Sort them by their rating 
// // Descending order
// // Pick their title
// const titles = movies
//     .filter(m => m.year === 2018 && m.rating >= 4)
//     .sort((a, b) => a.rating - b.rating)
//     .reverse()
//     .map(m => m.title)

// console.log(titles);//[ 'b', 'a' ]

const Object = [
    {key1: 'value1', key2: 100, key3: 4.5},
    {key1: 'value2', key2: 100, key3: 4.7},
    {key1: 'value3', key2: 100, key3: 3},
    {key1: 'value4', key2: 200, key3: 4.5},
];
const newObject = Object
    .filter(Object1 => Object1.key2 === 100 && Object1.key3 >= 4)
    .sort((p1, p2) => p1.key3 - p2.key3)
    .reverse()
    .map(Object1 => Object1.key1)

console.log(newObject);//[ 'value2', 'value1' ]
