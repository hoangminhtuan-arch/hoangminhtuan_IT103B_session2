
let bookName = prompt("Nhập tên sách:");
let borrowerName = prompt("Nhập tên người mượn:");
let bookStatus = prompt("Tình trạng sách (có sẵn / đã mượn / không có sẵn):");
let hasCard = prompt("Bạn có thẻ thư viện không? (có / không):");
let borrowDays = Number(prompt("Số ngày sách đã được mượn:"));
let newStatus = bookStatus.trim().toLowerCase();
let newHasCard = hasCard.trim().toLowerCase();
console.log(`Tên sách: ${bookName}`);
console.log(`Người mượn: ${borrowerName}`);
if (
    (newStatus !== "có sẵn" && newStatus !== "đã mượn" && newStatus !== "không có sẵn") ||
    (newHasCard !== "có" && newHasCard !== "không") ||
    isNaN(borrowDays) || borrowDays < 0
) {
    console.log("Thông tin không hợp lệ, vui lòng nhập lại");
} else {
    if (newStatus === "có sẵn" && newHasCard === "có") {
        console.log("Chúc mừng, bạn có thể mượn sách này");
    }
    else if (newStatus === "đã mượn" && borrowDays < 30) {
        if (newHasCard === "có") {
            console.log("Sách đang được mượn, vui lòng đợi đến khi trả lại");
        } else {
            console.log("Bạn không thể mượn sách nếu không có thẻ thư viện");
        }
    }
    else if (newStatus === "không có sẵn") {
        console.log("Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau");
    }
    else {
        console.log("Thông tin không hợp lệ, vui lòng nhập lại");
    }
}
