/*
        Mảng trong JS -Array
    1.  tạo mảng
        - cách tạo
        - dùng cachs nào? tại sao
        - kiểm tra data type
    2. Truuy xuất mảng

        - độ dài mảng
        - lấy phần tử theo index



 */
// 1.  tạo mảng
// cách tạo
// cách 1
//  let languages = [
//      'Javascript',
//      'PHP',
//      'Ruby',
//      null,
//      undefined,
//      function (){

//      },
//      {},
//      123
//  ];
//  console.log(languages);

// cách 2
// let languages = new Array('Javascript',
// 'PHP',
// 'Ruby',
// null,
// undefined,
// function (){

// },
// {},
// 123);

// kiểm tra kiểu dữ liệu
// console.log(typeof languages);
// console.log(Array.isArray(languages));



// 2. Truuy xuất mảng

// let languages = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ]
// console.log(languages[0]);




// Làm việc với array - keyword JS array methods

// let languages = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];
// 1- to string
    //console.log(languages.toString());

// 2- Join
    //console.log(languages.join(' - '));

// 3- pop- XÓA PHẦN TỬ CUỐI MẢNG
    // console.log(languages.pop());
    // console.log(languages.pop());
    // console.log(languages.pop());
    // console.log(languages.pop());

// 4 - push- thêm phần tử vào cuối mảng, trả về độ dài mảng
    // console.log(languages.push('dart', 'java'));
    // console.log(languages);

// 5- shift - xóa phần tử đầu mảng, trả về phần tử đã xóa
    //  console.log(languages.shift());
    //  console.log(languages);
     
// 6 - unshift - thêm  phần tử vào đầu mảng, trả về độ dài mới của mảng
    // console.log(languages.unshift('dart'));
    //  console.log(languages);


// 7 - splice- xóa phần tử
    // languages.splice(1, 2, 'dart')
    // console.log(languages);


// 8 - concat- nối mảng
// let languages = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];
// let languages2 = [
//     'dart'

// ];
// console.log(languages2.concat(languages));

// 9- slice
// let languages = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];

// console.log(languages.slice(-2, -1));




let courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250

    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 2,
        name: 'PHP',
        coin: 500
    }
];



//  10 - forEach() - duyệt qua từng phần tử của mảng
// courses.forEach(function(course, index){
//     console.log(index, course);
    
// });


// 11 - every() - tất cả phần tử trong mảng thỏa mãn điều kiện nào đó
// let isFree = courses.every(function(course, index){
//     return course.coin === 0;
    
// });
// console.log(isFree);


// 12 - some() - chỉ cần 1 phần tử thỏa mãn điều kiện

// let isFree = courses.some(function(course, index){
//     return course.coin === 0;
    
// });
// console.log(isFree);


// 13 - find() - tìm phần tử- chỉ tìm 1 phần tử đầu tiên tìm đc


// let course = courses.find(function(course, index){
//     return course.name === 'Ruby';
    
// });
// console.log(course);


// 14 - filter()- tìm phần tử- tìm đc tất cả phần tử thỏa mãn




// 15 - map()
// function courseHandler(course) {
//         //console.log(course);
//         return {
//             id: course.id,
//             name: `khoa học: ${course.name}`,
//             coin: course.coin,
//             coinText: `Gia: ${course.coin}`,
//         }
        
// };
// let newCourses = courses.map(courseHandler);
// console.log(newCourses);



// 16 - reduce()

// tính tổng tiền khóa học
let totalCoin = courses.reduce(function(total, course) {
    return total + course.coin;
}, 0);
console.log(totalCoin);

