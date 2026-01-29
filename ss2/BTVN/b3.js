let name = prompt(`Nhap ten sach:`);
let theLoai = prompt(`The loai sach: `);
let tinhTrang = prompt(`Tinh trang sach`)

let newCategory = theLoai.trim().toLowerCase();
let newStatus = tinhTrang.trim().toLowerCase();

console.log(`Ten sach la: ${name}`);

if ((newCategory === "khoa hoc" || newCategory === "lich su") && (newStatus === "co san" )){ 
    console.log(`Sach nay co san trong thu vien!!!`);
}else if ((newCategory === "khoa hoc" || newCategory === "lich su") && (newStatus === "da muon" )){
    console.log(`Sach da duoc muon!!!`);
}

switch (newCategory){
    case "van hoc":
        console.log(`Sách này có thể đọc giải trí`);
        break;
    case "truyen":
        console.log(`Sách này có thể đọc giải trí`);
        break;
    default:
        console.log(`Khong phai la the loai Van hoc hoac Truyen`);
        
        break;
}

