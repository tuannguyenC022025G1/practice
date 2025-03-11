// bai1
document.write('bai 1'+'<br/>')
let i = 10

let f = 20.5
let b = true
let s = 'Hà Nội'

document.write('i = ' + i)
document.write('<br/>')
document.write('f = ' + f)
document.write('<br/>')
document.write('b = ' + b)
document.write('<br/>')
document.write('s = ' + s)
document.write('<br/> <br/>')

// bai2
document.write('bai 2'+'<br/>')
let width = 20
let height = 10
let area = width * height
document.write('Area = ' + area)
document.write('<br/>'+'<br/>')

//bai3
document.write('bai3 kiem tra a co chia het cho b' + '<br/>')
// praseint để chuyển đổi kiểu dữ liệu từ string (chuỗi) sang number (số), promt tạo trường dữ liệu để nhập giá trị của biến
let a = parseInt(prompt("nhập số a"));
let c = parseInt(prompt("nhập số b"));
if (a % c === 0) {
    alert(a + " là bội số của " + c);
} else {
    alert(a + " không phải là bội số của " + c);
}