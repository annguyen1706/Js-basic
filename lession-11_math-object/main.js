/*
            Math object

        - Math.PI
        - Math.round()
        - Math.abs()-- giá trị tuyệt đối
        - Math.ceil() --làm tròn lên trên 
        - Math.floor() --làm tròn dưới
        - Math.random()--// tạo số ngẫu nhiên từ 0 -1
        - Math.min()
        - Math.max()

 */

 //console.log(Math.PI); // pi
 //console.log(Math.round(1.8)); // làm tròn
 //console.log(Math.floor(Math.random() * 10));  // random từ 1- 10
  
 //let random = Math.floor(Math.random() * 5);

//  let bonus = [
//      '10 coin',
//      '20 coin',
//      '30 coin',
//      '40 coin',
//      '50 coin',
//  ];
//  console.log(bonus[random]);

 let random = Math.floor(Math.random() * 100);
 if(random < 50) {
     console.log('cuong hoa thanh cong');
     
 }


 console.log(Math.min(-100, 1, 3, 90));
 