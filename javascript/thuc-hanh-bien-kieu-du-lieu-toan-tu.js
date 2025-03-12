//bai 1 tuan anh lam
// let a = document.getElementById('a');
// let b = document.getElementById('b');
// let c = document.getElementById('c');
//
///a.addEventListener('change', function () {
//     let d = (a.value + b.value + c.value) / 3
//     document.getElementById('d').value = d;
// })
// b.addEventListener('change', function () {
//     let d = (a.value + b.value + c.value) / 3
//     document.getElementById('d').value = d;
// })
// c.addEventListener('change', function () {
//     let d = (a.value + b.value + c.value) / 3
//     document.getElementById('d').value = d;
// })
//bai 1 lam lai
let a =+prompt("Nhập điểm Vật lý");
let b=parseFloat(prompt("Nhập điểm Hóa học"))
let c=parseInt(prompt("Nhập điểm Sinh học"))
let d = (a+b+c)/3
alert('Điểm trung bình 3 môn: '+ d )
//bai 2
let C =parseInt(prompt('Nhập giá trị độ C'))
let F = C*9/5+32
alert('Giá trị độ F: '+F)
//bai 3
let r =parseInt(prompt('Nhập giá trị bán kính hình tròn'))
let S =r*r*.14
alert('diện tích hình tròn là: ' +S)
//bai 4
let R =parseInt(prompt('Nhập giá trị bán kính hình tròn'))
let C = r*2*3.14
alert('chu vi hình tròn là '+ C)

