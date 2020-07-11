// callback?

// là hàm function được truyền qua đối số khi gọi hàm khác

// 1. là hàm
// 2. được truyền qua đối số
// 3. được gọi lại (trong hàm nhận đối số)


// function myFunction(param) {
//     //console.log(typeof param);
//     //myCallback('hello')

//     if (typeof param === 'function') {
//         param('hello')
//     }
// }
// function myCallback(value) {
//     console.log('value: ', value);
    
// }
// //myCallback(123)
// myFunction(myCallback);



// callback
// Array.prototype.map2 = function(callback) {
//    for (let i =0; i < this.length; i++) {
//     let result = callback(this[i],i);
//     console.log('result: ', result);
    
//    }
// }
// let courses = [
//     'javascript',
//     'PHP',
//     'Ruby'
// ];

// let htmls = courses.map2(function(course, index) {
//     return `<h2>${course}</h2>`;
    
// });
// let htmls = courses.map(function(course) {
//     return `<h2>${course}</h2>`
// });
// console.log(htmls.join(''));



// forEach method

// let courses = [
//          'javascript',
//          'PHP',
//          'Ruby'
//      ];
//     let output = courses.forEach(function(course, index, array) {
//          console.log(course, index, array);
         
//      })