// HTMLElement

// let todoList = document.getElementById('todo-list')
//console.log(todoList);

//HTMLElement

// children - tập hợp element con của thẻ
//console.log(todoList.children)

// textContent - in nội dung bên trong, có thể thay dooiir nội dung
// console.log(todoList.textContent)

// createElement - tạo element mới
// let newTodo = document.createElement('li');
// newTodo.textContent = 'Cook tomorow'
// appendChild - thêm 1 phần tử con vào cuối 
// todoList.appendChild(newTodo)
// console.log(todoList);

// remove() - xóa element ra khỏi DOM
// todoList.remove('gán id');
// console.log(todoList);

//---------------------------------------------------------------

// innerHTML - thay đổi nội dung của Element

// let todoList = [
//     'take showe',
//     'have a walk',
//     'go to bè'
// ];
// let htmlList = document.getElementById('todo-list');
// let content = todoList.map(function(item){
//     return '<li>' + item + '</li>';
// });
// //console.log(content);
// htmlList.innerHTML = content.join('')


// -----------------------------------

// onclick, addEventListener, localStorage

let storageKey = 'todoList';
let dataString = localStorage.getItem(storageKey);
let todoList
if (dataString) {
    todoList = JSON.parse(localStorage.getItem(storageKey))
} else {
    todoList = [];
}
// let todoList = JSON.parse(localStorage.getItem(storageKey))
// let todoList = [
//         'take showe',
//         'have a walk',
//         'go to bè'
//     ];

    let addBtn = document.getElementById('add-btn');
    //addBtn.onclick = addItem;
    addBtn.addEventListener('click',addItem)
    addBtn.addEventListener('click',function() {
        console.log('add button');
    })
    // trigger an event
function addItem() {
    // lấy giá trị từ input
    let input = document.getElementById('new-item');
    let newItem = input.value;
    
    // thêm vào mảng todoList
    todoList.push(newItem)
    // re - render
    render()
    // clear input
    input.value = '';

    // store data
    localStorage.setItem(storageKey, JSON.stringify(todoList))
}
function render() {
    let htmlList = document.getElementById('todo-list');
let content = todoList.map(function(item){
    return '<li>' + item + '</li>';
});
//console.log(content);
htmlList.innerHTML = content.join('')
}
render()


//--------------------------------------------------------

// change Event

// let students = [
//     {name:'Minh', age: 20},
//     {name:'hoang', age: 20},
//     {name:'hai', age: 18},
//     {name:'huy', age: 18},
//     {name:'tung', age: 19}
// ];
// let ageFilter = document.getElementById('age-filter');
// ageFilter.addEventListener('change', onAgeFilterChange);
// function onAgeFilterChange() {
//     // lấy giá trị value hiện tại của select trong filter
//         let selectedAge = parseInt(ageFilter.value); // chuyển sang số
//     // filter danh sách học sinh theo giá trị đã chọn
//         let filterStudents = students.filter(function(student) {
//             return student.age === selectedAge;
//         });
//     // render
//     render(filterStudents);
// }
// function render(students) {
//     let studentTable = document.getElementById('student-table');
//     let content = students.map(function(student) {
//         return '<td><td>' + student.name + '</td><td>' +student.age + '</td></tr>';
//     })
//     studentTable.innerHTML = content.join('');
// }
// render(students);