let weirdMoments = [
    {
        id: 1,
        date: "2026-02-15",
        description: 
            "Con mèo hàng xóm ngồi trên bờ tường nhìn chằm chằm mình qua cửa sổ suốt 20 phút, không chớp mắt một lần nào",
        weirdLevel: 7,
        location: "Nhà riêng, ban công tầng 3, quận Cầu Giấy",
        tags: ["động vật", "creepy", "hàng xóm"],
        reaction:
            "Cười 5 phút rồi chạy vào nhà đóng rèm, tối đó không dám ra ban công nữa",
    },
    {
        id: 2,
        date: "2026-02-20",
        description:
            "Bà cụ lạ mặt mặc áo dài trắng, đứng giữa công viên hỏi mình: 'Con có phải là người trong giấc mơ tối qua của bà không?' rồi quay lưng bỏ đi ngay",
        weirdLevel: 9,
        location: "Công viên Cầu Giấy, gần hồ điều hòa",
        tags: ["người lạ", "siêu thực", "Hà Nội", "giấc mơ"],
        reaction:
            "Đứng hình 30 giây, sau đó cười như điên rồi chạy về nhà kể cho bạn nghe",
    },
    {
        id: 3,
        date: "2026-03-02",
        description:
            "Đang xếp hàng mua trà sữa thì ông chú đứng trước mặt tự nhiên quay lại nói: 'Cậu giống hệt thằng cháu trai tôi... mà nó mất tích năm 2008 rồi'",
        weirdLevel: 8,
        location: "Quán Phúc Long, phố Nguyễn Khuyến",
        tags: ["người lạ", "giống nhau", "creepy", "trà sữa"],
        reaction: "Cười gượng, giả vờ nghe điện thoại rồi lùi ra sau hàng",
    },
    {
        id: 4,
        date: "2026-03-10",
        description:
            "Lúc 2h sáng đi bộ về nhà, nghe rõ tiếng ai đó huýt sáo giai điệu bài 'Happy Birthday' ngay sau lưng, quay lại thì không thấy ai, chỉ có gió",
        weirdLevel: 6,
        location: "Ngõ nhỏ phố Hàng Bông, Hoàn Kiếm",
        tags: ["âm thanh lạ", "đêm khuya", "ma quái nhẹ", "Hà Nội cổ"],
        reaction:
            "Đi nhanh hơn, vừa đi vừa tự hát to 'Happy birthday to me' để át tiếng huýt sáo",
    },
];
let choice;
const displayerMenu = () => {
    choice = +prompt(
        `
        1-xem danh sách
        2-Thêm khoảng khắc mới
        3-Tìm theo ID
        4-Cập nhật khoảng khắc
        5-Xoá khoảng khắc
        6-Thoát
    `)
};

//case 1: xem danh sách
const checkList = () => {
weirdMoments.forEach((element) =>{
        console.log(`[${element.id}] ${element.date} - ${element.description} (${element.tags})`);
    });
};
//case 2:update : thêm khoảng khắc mới



do {
    displayerMenu();
    switch (choice) {
        case 1:
            checkList();
            break;
        case 2:
            UpdateNews();
            break;
        case 3:
            findID();
            break;
        case 4:
            
            break;
        case 5:
            
            break;
        case 6:
            
            break;
    
        default:
            break;
    }
} while (choice !== 6);