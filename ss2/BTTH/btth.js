let name = prompt(`Nhap ten nguoi dung`);
let role = prompt(`Nhập vai trò(admin \ student \ guest): `)
let stk = Number(prompt(`Số dư tài khoản (Nhập tiền hoặc để trống nếu hết tiền): `));
let status = prompt(`Trạng thái thẻ thư viện(Nhập "true" nếu đang hoạt động, hoặc để rỗng/nhập khác để coi như bị khóa)`)
let limit = Number(prompt(`Số ngày quá hạn trả sách(Ví dụ: 0 là đúng hạn, 5 là quá hạn 5 ngày): `))

let newRole = role.trim().toLowerCase();

console.log(`Ten nguoi dung la: ${name}`);


switch (newRole){
    case "admin":
        console.log(`Chào Admin, bạn có toàn quyền hệ thống`);
        break;
    case "student":
        console.log(`Chào sinh viên, bạn có thể mượn sách`);
        break;
    case "guest":
        console.log(`Chào khách, bạn chỉ có thể đọc tại chỗ`);
        break;
    default:
    console.log(`Lỗi: Vai trò không hợp lệ!`);
    break;
}

if (
    !name || 
    newRole === "guest" ||
    stk < 0 ||
    status !== "true"
) {
    console.log(`YÊU CẦU BỊ TỪ CHỐI`);
} else {
    console.log(`ĐƯỢC PHÉP MƯỢN SÁCH`);
}


if (limit <= 0) {
    console.log(`Cảm ơn bạn đã trả đúng hạn, không bị phạt`);
} else if (limit >= 1 && limit <= 5) {
    console.log(`Quá hạn ${limit} ngày`);
    console.log(`Phạt ${limit * 5000}đ`);
} else if (limit > 5 && limit < 10) {
    console.log(`Quá hạn ${limit} ngày`);
    console.log(`Phạt ${limit * 10000}đ`);
} else {
    console.log(`Phạt 200.000đ (cố định) - TÀI KHOẢN BỊ KHÓA`);
}
