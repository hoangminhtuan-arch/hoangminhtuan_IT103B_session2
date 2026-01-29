let name = prompt(`Nhap ten sach: `);
let borrower = prompt(`Nhap ten nguoi muon: `);
let levelLove = Number(prompt(`Muc do yeu thich cua ban la: `))


console.log(`Ten sach cua ban la: ${name}`);

console.log(`Ten nguoi muon la: ${borrower}`);

if ( levelLove === 5 || levelLove === 4){
    console.log(`Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!`);
    
}else if ( levelLove === 3) {
    console.log(`Sách này khá ổn, có thể mượn`);
    
}else if (levelLove === 2 || levelLove === 1){
    console.log(`Sách này bạn có thể cân nhắc mượn lại sau`);
    
}else{
    console.log(`Muc do yeu thich chi trong khoang 1-5!!!`);
}


