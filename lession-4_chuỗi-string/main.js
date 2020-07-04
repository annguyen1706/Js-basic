/*
        CHUỖI TRONG JS
    1. Tạo chuỗi 
        - các cách tạo chuỗi
        - nên dùng khi nào? lý do?
        - kiểm tra data type
    2. Một số trường hợp sử dụng backslash(\)
    3. xem độ dài chuỗi
    4. chú ý độ dài khi viết code
    5. template string ES6

*/
 
// cách tạo chuỗi
    // cách 1 
        // let fullName = 'an nguyen';
    // cách 2
        // let fullName = new String('an nguyen');
        // sử dụng cách 1



// sử dụng \

    // let fullName = 'Nguyen Ba\' An';
    // console.log(fullName);
    
// xem độ dài chuỗi
    //  let fullName = 'Nguyen Ba\' An';
    //  console.log(fullName.length);
     

// template string ES6
    // let fistName = 'An';
    // let lastName = 'Nguyen';
    // console.log(`Toi la: ${fistName} ${lastName}`);



/*
    LÀM VIỆC VỚI CHUỖI
    
    keyword: Javascript string methods
    1. length
    2. find index
    3. cut string
    4. replace
    5. convert to upper case
    6. convert to lower case
    7. trim
    8. split
    9. get a character by index
*/

let myString = ' Nguyen ba ba an ';

// 1. length
    // console.log(myString.length);
// 2. find index   
    // tìm ký tự trong chuỗi...nếu không có trả về -1
    // console.log(myString.indexOf('ba'));
    // console.log(myString.lastIndexOf('ba'));
    // console.log(myString.search('ba'));
// 3. cut string
console.log(myString.slice(0, 1));
// 4. replace
console.log(myString.replace(/ba/g, 'bá'));
//  5. convert to upper case
    console.log(myString.toUpperCase);
    
// 6. convert to lower case
console.log(myString.toLowerCase);
// 7. trim- bỏ kí tự khoảng trắng 
    console.log(myString.trim());
// 8 .split - tách chuỗi thành array
let languages = 'JS, PHP, Ruby';
    console.log(languages.split(','));
    
// 9. get a character by index- tìm kí tự theo index   
const myString2 = 'An Nguyen';
console.log(myString2.charAt(1));
console.log(myString2[0]);


    
    