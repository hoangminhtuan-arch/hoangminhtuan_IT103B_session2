let name = prompt(`Nhap ten sach: `)
let auThor = prompt(`Nhap ten tac gia: `)
let year = Number(prompt(`Nhap nam xuat ban: `));

const curentYear = 2026;

let check = curentYear - year;


console.log(`Ten sach la: ${name}`);
console.log(`Ten tac gia: ${auThor}`);



if (check === 0) {
    console.log(`Đây là sách mới!`);
}
else if (check <= 5){
    console.log(`Sách khá mới`);
} else{
    console.log(`Sách đã cũ`);
}