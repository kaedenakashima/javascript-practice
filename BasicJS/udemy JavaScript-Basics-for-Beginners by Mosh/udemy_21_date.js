const now = new Date();
const date1 = new Date('October 13 19:30'); //reference DateString inJSsite
const date2 = new Date(2019, 10, 13, 20);
now.setFullYear(2019)

console.log(now);//2019-10-13T17:31:36.205Z
console.log(date1);//2001-10-13T17:30:00.000Z
console.log(date2);//2019-11-13T19:00:00.000Z
console.log(now.toDateString());//Sun Oct 13 2019
console.log(now.toTimeString());//19:29:44 GMT+0200 (Central European Summer Time)
console.log(now.toISOString());//2019-10-13T17:29:44.185Z



