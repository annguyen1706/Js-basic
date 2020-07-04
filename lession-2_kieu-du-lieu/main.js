/** Kiểu dữ liệu trong JS
 * Kiểu dữ liệu nguyên thủy - Primitive Data
    - Number
    - String
    - Boolean
    - Undefined
    - Null
    - Symbol


 * Dữ liệu phức tạp - Complex Data
    - Function
    - Object
 */


 // number type 
 let a = 1;
 let b = 1.5;

 console.log(typeof a);
 
 // string type
 let fullName = 'An Nguyen';
 // boolean type
 let isSuccess = true;
 // undefined type
 let age;
 console.log(age);
 // null
 let isNull = null; // nothing
 // symbol 
 let id = Symbol('id'); // unique
 // function 
 let myFunction = function () {
     alert('hello')
 }
 myFunction();

 // Object types

 let myObject = {
     name: 'An Nguyen',
     age: 23,
     adress: 'Ha noi',
     myFunction: function () {
         
     }
 };
 console.log('myObject', myObject);


 // kiểm tra kiểu dữ liệu

 // typeof
 
 