
let bookName = prompt("Nhập tên sách:");
let status = prompt("Trạng thái sách (có sẵn / đã mượn):");
let publishYear = Number(prompt("Nhập năm xuất bản:"));
let newStatus = status.trim().toLowerCase();
const currentYear = new Date().getFullYear();
if (isNaN(publishYear) || publishYear > currentYear) {
    console.log("Năm xuất bản không hợp lệ");
} else {
    let bookAge = currentYear - publishYear;

    console.log(`Tên sách: ${bookName}`);

    if (newStatus === "có sẵn" && bookAge > 5) {
        console.log("Sách này mới và có sẵn để mượn");
    } 
    else if (newStatus === "đã mượn" && bookAge <= 10) {
        console.log("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");
    } 
    else if (newStatus === "đã mượn" && bookAge > 10) {
        console.log("Sách này đã mượn và khá cũ");
    } 
    else if (newStatus === "có sẵn" && bookAge <= 5) {
        console.log("Sách này có sẵn nhưng đã lâu năm");
    } 
    else {
        console.log("Trạng thái sách không hợp lệ");
    }
}
