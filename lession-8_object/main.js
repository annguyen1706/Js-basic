// object trong javascript

// let emailKey = 'email';
// let myInfo = {
//     name: 'An Nguyen', // thuộc tính property
//     age: 18,
//     address: 'Ha Noi,vn',
//     [emailKey]: 'annguyen@gmail.com',
//     phone: '9999999',
//     getName: function() { // phương thức method
//         return this.name;
//     },
//     getAge: function() {
//         return this.age;
//     }
// };

// console.log(myInfo);

// console.log(myInfo.getName());

// myInfo.email = 'An@gmail.com';
// myInfo['my-email'] = 'An@gmail.com';
// console.log(myInfo);
// console.log(myInfo.name);
// console.log(myInfo['address']);

// let mykey = 'address';
// console.log(myInfo[mykey]);


// delete myInfo.age;
// console.log(myInfo);





// Object constructor tạo nhiều object có chung các đối tượng giống nhau nhanh hơn

// cách tạo
// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// };
// // hoặc
// let User = function(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// };

// let author = new User('An', 'Nguyen', 'Avatar');
// let user = new User('Vũ', 'Nguyen', 'Avatar');

// author.title = 'hahaha';
// user.comment = 'hihihi';


// console.log(author);
// console.log(user);
// console.log(author.getName());
// console.log(user.getName());


// object prototype đối tượng nguyên mẫu - Basic

// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// };

// thêm thuộc tính từ ngoài hàm tạo
// User.prototype.className = 'F8';
// User.prototype.getClassName = function() {
//     return this.className;
// }

// let user = new User('An', 'Nguyen', 'Avatar');
// let user2 = new User('Vũ', 'Nguyen', 'Avatar');

// console.log(user.className);
// console.log(user2.getClassName());





// đối tượng Date

let date = new Date();
console.log(date);
console.log(date.getFullYear()); // lấy năm
console.log(date.getMonth() + 1); // lấy tháng
console.log(date.getDate());// lấy ngày







