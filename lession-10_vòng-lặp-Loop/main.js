/*
        Vòng lặp - Loop

    1. for - lặp với điều kiện đúng
    2. for in - lặp qua key của đối tượng
    3. for of - lặp qua value của đối tượng
    4. while - lặp khi điều kiện đúng
    5. do while - lặp ít nhất 1 lần sau đó lặp khi điều kiện đúng



*/


//    For loop

// for (let i = 1; i <= 1000; i++) {
//     console.log(i); 
// }


// ứng dụng
// let myArray = [
//     'javascript',
//     'PHP',
//     'java',
//     'Dart'
// ];
// //let arrayLength = myArray.length;
// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
        
// };




// For in loop

// let myInfo = {
//     name: 'An Nguyen',
//     age: 18,
//     address: 'Ha noi' 
// };
// for (const key in myInfo) {
//     console.log(myInfo[key]);
    
// }


// let languages = [
//     'javascript',
//     'PHP',
//     'Java',
//     'Ruby'
// ];
// for (let key in languages) {
//    console.log(languages[key]);
   
// }




// For of 

// let languages = [
//     'javascript',
//     'PHP',
//     'Java'
// ];
// for (let value of languages) {
//     console.log(value);
// }



// let myInfo = {
//     name: 'An nguyen',
//     age: 12
// };
// console.log(Object.keys(myInfo));
// console.log(Object.values(myInfo));

// for (let value of Object.keys(myInfo)) {
//     console.log(myInfo[value]);
    
// }

// for (let value of Object.values(myInfo)) {
//     console.log(value);
    
// }





// While loop

// let i = 0;

// while (i <= 1000) {
//     i++;
//     console.log(i);
    
// }


// let myArray = [
//          'javascript',
//          'PHP',
//          'Java'
//      ];

//      let i = 0;

//      while (i < myArray.length) {
//          console.log(myArray[i]);
//          i++
//      }



// Do while loop

// let i = 0;
// let isSuccess = false;
// do {
//     i++;
//     console.log('nạp thẻ lần ' + i);
//     if(true) {
//         isSuccess = true;
//     }
    
// } while (!isSuccess && i < 3);



// Break & continue in Loop


// for (let i = 0; i < 10; i++) {
//     console.log(i);

//     if (i >= 5) {
//         break;
//     } 
    
// }




// for (let i = 0; i < 10; i++) {
//     if(i % 2 !== 0) {
//         continue;
//     }
//     console.log(i)
// }




// vong lặp lồng nhau - nested loop


// let myArray = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];

// for (let i = 0; i < myArray.length; i++) {

//     for (let j = 0; j < myArray[i].length; j++) {
//         console.log(myArray[i][j]);
        
        
//     }
//     // console.log(myArray[i]);
    
    
// }



// ví dụ loop

// for (let index = 100; index > 0; index--) {
//     console.log(index);
    
    
// }



for (let i = 0; i <= 100; i += 5) {
    console.log(i);
    
}