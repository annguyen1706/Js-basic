/*
    Hàm - function trong Javascript

    1. Hàm ?
        - một khối mã
        - làm 1 việc cụ thể
    2. Loại hàm
        - built-in
        - tự định nghĩa

    3. tính chất
        - không thực thi khi định nghĩa
        - sẽ thực thi khi đc gọi 
        - có thể nhận tham số
        - có thể trả về một giá trị




 */


 // tạo hàm 
//  function showDialog() {
//      alert('hello, xin chào')
//  };
//  showDialog();



/* Tham số trong hàm
    1. tham số?
        - định nghĩa? 
        - kiểu dữ liệu: có thể truyền mọi loại dữ liệu string, number...
        - tính private: 
        - 1 tham số
        - nhiều tham số
    2. Truyền tham số
        - 1 tham số
        - nhiều tham số

    3. Arguments?
        - đối tượng arguments
        - giới thiệu vòng for



*/

// function writeLog(message) {
//     console.log(message);
// };
// writeLog('test message');


// truyền nhiều than số
// function writeLog(message, message2) {
//     console.log(message);
//     console.log(message2);
    
// };
// writeLog('test message', 'test message 2');



// Arguments

// function writeLog() {
//     let myString = '';
//     for (let param of arguments) {
//         //console.log(param);
//         myString += `${param} - `
//     }
//     console.log(myString);
    
// }

// writeLog('log 1', 'log 2', 'log 3')




/*  Return trong hàm
 

*/

// let isConfirm = confirm('Message?');
// console.log(isConfirm);

// function cong(a, b) {
//     //return a + b;
//     //return [a,b]
//     // code sau return không hoạt động
// }
// let result = cong(2, 8);
// console.log(result);





/*
một số điều caab=nf biết về function

1. khi function đặt trùng tên
    function định nghĩa sau sẽ ghi đè lên function định nghĩa trước
2. khai báo biến trong hàm
    biến đc khai báo trong function thì phạm vi sử dụng của biến chỉ nằm trong function
3. định nghĩa hàm trong hàm



*/

// function showMessage() {
//     console.log('message 1');
    
// }

// function showMessage() {
//     console.log('message 2');
    
// }

// showMessage();




// function showMessage() {
//     let fullName = 'An Nguyen';
//     console.log(fullName);
    
// }
// showMessage();
// console.log(fullName);// không hoạt động




// function showMessage() {
//     function showMessage2() {
//         console.log('message 2');
        
//     }
//     showMessage2(); // phạm vi sử dụng cũng chỉ trong 1 function
// }
// showMessage();







/*
    Các loại function

    1. Declaration function
    2. Expression function
    3. Arrow function


 */

 //  1. Declaration function - có thể gọi trước khi định nghĩa
 showMessage()
 function showMessage() {
        console.log('declaration function');
        
 }

 // 2. Expression function - ko thể gọi trước khi ddunhj nghĩa

 let showMessage2 = function() {
        console.log('Expression function');
        
 };

 setTimeout(function() {

 });

 let myObject = {
     myFunction: function() {

     }
 }
 