let warriors = [
  { id: "W001", name: "Musashi", class: "Samurai", attack: 85, defense: 60 },
  { id: "W002", name: "Ragnar", class: "Viking", attack: 92, defense: 70 },
  { id: "W003", name: "Spartacus", class: "Gladiator", attack: 80, defense: 65 },
  { id: "W004", name: "Lancelot", class: "Knight", attack: 75, defense: 85 },
  { id: "W005", name: "Leonidas", class: "Spartan", attack: 88, defense: 72 }
];

let choice;
const displayerMenu = () => {
    choice = +prompt(`
        ===========================================
            ANCIENT WARRIORS GUILD - QUẢN LÝ GUILD
        ===========================================
        1. Hiển thị danh sách chiến binh hiện tại
        2. Thêm chiến binh mới
        3. Xóa chiến binh
        4. Cập nhật thông tin chiến binh
        5. Tìm kiếm chiến binh (theo tên hoặc class)
        6. Tính tổng sức mạnh guild (attack + defense)
        7. Sắp xếp danh sách theo attack
        8. Kiểm tra độ cân bằng guild theo class
        9. Mô phỏng trận chiến 1v1
        0. Thoát chương trình
        ===========================================
        `)
};
//case 1:Khởi tạo hiển thị danh sách
const list = () => {
    warriors.forEach((element,index) => {
        console.log(`${index + 1} ${element.id} - ${element.name} -ATK: ${element.class} -DEF: ${element.attack} - ${element.defense}`);
    });
};

//case 2: Thêm chiến binh và điều kiện để duyệt chiên binh
const updatePlayer = (listPlayer) => {
    
    //tạo ra 1 mảng chỉ chứa id
    let arrayID = listPlayer.map((element) => {
        return element.id.toLocalCase();
    });
let id;
    while(arrayID.include(id.toLocalCase().trim()) == true || !id){
         id = +prompt(`Nhập id`);
        //include trả về giá trị true false
    if(arrayID.include(id.toLocalCase().trim()) == true ){
            alert(`id đã tồn tại`)
    }else if(!id){
            alert(`Trống`);
        }
    }







    const upID = prompt(`Nhập ID mới: `);
    const upName = prompt(`Nhập tên mới: `);
    
    let upAttack;
    while(!Number.isInteger(upAttack)){
        upAttack = +prompt(`NHập chỉ số tấn công: `);

        if(!Number.isInteger(upAttack)){
            alert(`lỗi`)
        }
    }

    

    const upDefender = +prompt(`Chỉ số phòng thủ: `);
    const upClass = prompt(`Class: `); 
    const updateWarios = {
        id : upID,
        name: upName,
        attack: upAttack,
        defense: upDefender,
        class: upClass,
    };
    warriors.push(updateWarios);
    alert( `Đã thêm chiếun binh ${updateWarios.name}`);
    console.log(`
        -Mã: ${updateWarios.id}
        -Tên: ${updateWarios.name}
        -Tấn công: ${updateWarios.attack}
        -Phòng thủ: ${updateWarios.defense}
        -class: ${updateWarios.class}
        `);
};
//case 3: xoá chiến binh 
const DeletePlayer = () => {
    const deleteWarios = prompt(`Tên cần xoá: `);
    const searchdelete = warriors.findIndex((player) => {
        return player.name === deleteWarios
    });
    if(searchdelete !== -1 ){// nếu thấy tên sẽ được in ra
        let warriorsName = warriors[searchdelete].name;
        let sure = prompt(`Bạn có chắc xoá nhân vật ${warriorsName.name}`);
        
        if(sure){
            warriors.splice(searchdelete,1)
            alert(`Đã xoá chiến binh ${warriors.name}`)
        }else{
            alert(`Đã huỷ lượt xoá`)
        }
    }else{
        alert(`Không tìm thấy chiến binh `)
    }
};
//case 4: Cập nhập thông tin
const UpdateInformation = () => {
    const nameNeedUpdate = prompt(`Nhập tên cần tìm kiếm: `);
    const searchNameUpdate = warriors.findIndex((player) => {
        return player.name === nameNeedUpdate;
    });
    if(searchNameUpdate !== -1)//néu có sẽ được in ra để xác định tồn tại hay không
        let warriorsUpName = warriors[searchNameUpdate].

};







do {
    displayerMenu();
    switch (choice) {
        case 1:
            list();
            break;
        case 2:
            updatePlayer();
            break;
        case 3:
            DeletePlayer();
            break;
        case 4:
            
            break;
        case 5:
            
            break;
        case 6:
            
            break;
        case 7:
            
            break;
        case 8:
            
            break;
        case 9:
            
            break;
        case 0:
            alert(`Cảm ơn vì đã dùng !`)
            break;
        case 1:
            
            break;
    
        default:
            break;
    }
} while (choice !== 0);