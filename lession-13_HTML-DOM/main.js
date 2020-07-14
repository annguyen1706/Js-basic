// HTML DOM

// có 3 thành phần
// 1. Element
// 2. Attribute
// 3. text


// Node


//--------------------------------

// Javascript: Browser | Server

//--------------------------------

// DOM Document Object

// document là toàn bộ HTML của trang wed
// document.write('hello')


//------------------------------------------


// get element methods

// Element : ID, class, tag, CSS selector, HTML collection

// let headingNode = document.getElementById('heading'); // lấy qua ID
// console.log(headingNode);
// console.log({
//     element: heading
// });


// let headingNodes = document.getElementsByClassName('heading') // lấy qua class name //trả về gần giống mảng
// console.log(headingNodes);

 
//  let headingNodes = document.getElementsByTagName('h1') // lấy qua tag name// trả về gần giống mảng
//  console.log(headingNodes);


// let headingNode = document.querySelector('.heading'); // lấy qua CSS selector lấy phần tử đầu tiên
//  console.log(headingNode);
// let headingNode = document.querySelector('.box .heading-2:first-child')
// let headingNode = document.querySelector('.box .heading-2:nth-child(2)')

// let headingNodes = document.querySelectorAll('.heading'); //// lấy qua CSS selector: lấy tất cả //trả về gần giống mảng


// console.log(document.forms['form-1']) // lấy qua HTML collection (thẻ a, form, img)
// console.log(document.forms.testForm)


// lấy chủ yếu qua ID, class, CSS selector

// mở rông cách lấy elements

// let boxNode = document.querySelector('.box-1');

// console.log(boxNode);

// console.log(boxNode.getElementsByTagName('li')); // lấy thẻ con bên trong box-1
// console.log(boxNode.querySelector('p'));


//------------------------------------------------------------

// attribute node & text node


// DOM attribute

// let headingElement = document.querySelector('h1');


// thêm vào
// headingElement.title = 'Heading'; // thêm atribute title vào element
// headingElement.id = 'Heading'; // thêm atribute ID
// headingElement.className = 'Heading'; // thêm atribute class
// headingElement.setAttribute('class', 'heading') // cách 2 thêm thuộc tính k cần hợp lệ với element
// console.log(headingElement);


// lấy ra
// headingElement.getAttribute('class')

// --------------------------------------------------------------

// Text Node

// innerText, textContent property

// innerText - trả lại noojii dung đc nhìn thấy
// textContent - trả lại nguyên bản text

// lấy ra
// let headingElement = document.querySelector('.heading');
// console.log(headingElement.innerText); // lấy ra
// console.log(headingElement.textContent);


// sửa đổi nội dung
// headingElement.innerText = 'New heading';
// headingElement.textContent = 'New heading';


// innerHTML property, outerHTML

// innerHTML thêm element vào trong element có sẵn
// outerHTML ghi đè lên element có sẵn
// let boxElement = document.querySelector('.box');
// console.log(boxElement);
// boxElement.innerHTML = '<h1 title="Heading">Heading</h1>';

// let boxElement = document.querySelector('.box');
// console.log([boxElement]);

// ------------------------------------------------------------------

// DOM Style

// let boxElement = document.querySelector('.box');
// cách 1

// boxElement.style.width = '100px';
// boxElement.style.height = '100px';
// boxElement.style.backgroundColor = 'red';

// cách 2

// Object.assign(boxElement.style, {
//     width: '100px',
//     height: '100px',
//     backgroundColor: 'green',
// })

// -------------------------------------------------------------------

// classList property

// add - thêm class vào element
// contains - kiểm tra class có trong element hay k
// remove - xóa class
// toggle - nếu class có trong element thì toggle sẽ xóa, nếu k có sẽ thêm vào

// let boxElement = document.querySelector('.box');

// boxElement.classList.add('red', 'blue');
// // boxElement.classList.remove('red');
// setTimeout(() => {
//     boxElement.classList.remove('red')
// }, 3000);

// setInterval(() => {
//     boxElement.classList.toggle('red')
// }, 3000);

// console.log(boxElement.classList.contains('green'));




//---------------------------------------------------------

// DOM events

 // 1. attribule events
 // 2. Assign event using the element node

//  let h1Element = document.querySelector('h1');
//  h1Element.onclick = function() {
//      console.log(Math.random());
//  }



// let h1Element = document.querySelectorAll('h1');
// for (let i = 0; i <h1Element.length; i++) {
//     h1Element[i].onclick = function(e) {
//         console.log(e.target);
//     }
    
// }



// DOM events example

// 1. Input / select
// 2. key up/down

// let inputValue;
// let inputElement = document.querySelector('input[type="text"]');
// inputElement.oninput = function(e) {
//    inputValue = e.target.value
// }


// let inputElement = document.querySelector('input[type="checkbox"]');
// inputElement.onchange = function(e) {
//         console.log(e.target.checked);
//     }

//     let inputElement = document.querySelector('select');
// inputElement.onchange = function(e) {
//         console.log(e.target.value);
//     }



// let inputElement = document.querySelector('input[type="text"]');
// inputElement.onkeyup= function(e) {
//   console.log(e.target.value);
// }



// 1. preventDefault // ngăn chặn hành vi mặc định của trình duyệt

// 2. stopPropagation // ngăn chặn hành vi nổi bọt

// let aElements = document.links;
// for (let index = 0; index < aElements.length; index++) {
//     aElements[index].onclick = function(e) {
//         if(e.target.href.startsWith())
//     }
    
// }

// ------------------------------------------------

