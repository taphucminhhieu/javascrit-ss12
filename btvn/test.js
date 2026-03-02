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
    // 1. Kiểm tra ID
    let id;
    let arrayID = listPlayer.map(element => element.id.toLowerCase());
    
    while (true) {
        id = prompt("Nhập ID mới:").trim();
        if (!id) {
            alert("Trống");
        } else if (arrayID.includes(id.toLowerCase())) {
            alert("id đã tồn tại");
        } else {
            break; // ID hợp lệ
        }
    }

    // 2. Kiểm tra Name (Không phân biệt hoa thường)
    let upName;
    let arrayName = listPlayer.map(element => element.name.toLowerCase());
    
    while (true) {
        upName = prompt("Nhập tên mới:").trim();
        if (!upName) {
            alert("Vui lòng không để trống tên");
        } else if (arrayName.includes(upName.toLowerCase())) {
            alert("Tên chiến binh đã có trong guild.");
        } else {
            break; // Tên hợp lệ
        }
    }

    // 3. Kiểm tra Attack (1 -> 100)
    let upAttack;
    while (true) {
        upAttack = +prompt("Nhập chỉ số tấn công (1-100):");
        if (isNaN(upAttack) || upAttack < 1 || upAttack > 100) {
            alert("thông báo chỉ số tấn công không hợp lệ");
        } else {
            break;
        }
    }

    // 4. Kiểm tra Defense (Số và >= 0)
    let upDefender;
    while (true) {
        upDefender = +prompt("Chỉ số phòng thủ (>= 0):");
        if (isNaN(upDefender) || upDefender < 0) {
            alert("không thỏa mãn");
        } else {
            break;
        }
    }

    // 5. Kiểm tra Class
    let upClass;
    const validClasses = ['Samurai', 'Viking', 'Gladiator', 'Ninja', 'Knight', 'Spartan'];
    while (true) {
        upClass = prompt(`Nhập Class (${validClasses.join(", ")}):`).trim();
        if (!validClasses.includes(upClass)) {
            alert("Lỗi: Class không hợp lệ");
        } else {
            break;
        }
    }

    // 6. Tạo đối tượng và thêm vào mảng
    const updateWarios = {
        id: id,
        name: upName,
        attack: upAttack,
        defense: upDefender,
        class: upClass,
    };

    
warriors.push(updateWarios);
    alert(`Đã thêm chiến binh: ${updateWarios.name} vào guild!`);
    console.log(`Đã thêm chiến binh: ${updateWarios.name} vào guild!`);
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
    const nameNeedUpdate = prompt(`Nhập tên cần tìm kiếm: `).trim();
    const index = warriors.findIndex((player) => {
        return player.name.toLowerCase() === nameNeedUpdate.toLowerCase();
    });
    if(index === -1){//néu 0 có sẽ được in ra để xác định 0 tồn tại
        alert(`Chiến binh ${nameNeedUpdate} không có trong guild`);
        return; //dừng hàm nếu không thấy 
        }else{
            alert(`Đã tìm thấy chiến binh ${warriors[index].name}!`);
        }
            
    let upAttack = +prompt("Nhập chỉ số Attack mới (1-100):");
    let upDefense = +prompt("Nhập chỉ số Defense mới (>= 0):");

    if (upAttack >= 1 && upAttack <= 100 && !isNaN(upDefense) && upDefense >= 0) {

        warriors[index].attack = upAttack;
        warriors[index].defense = upDefense;

        alert(`Cập nhật thành công cho ${warriors[index].name}`);
        console.log(`Thông tin mới:
            Tên: ${warriors[index].name}
            ATK: ${warriors[index].attack}
            DEF: ${warriors[index].defense}`);
    } else {
        alert("Chỉ số nhập vào không hợp lệ. Cập nhật thất bại!");
    }
};
//case 5:tìm kiếm
const seacrhName = () => {
    const findName = prompt(`Nhập tên cần tìm vào đây: `);
    if(findName == null || findName.trim() ===""){
        alert("Nhập lại");
        return;
    };
    const check = warriors.find((player) => {
        return player.name.toLowerCase() == findName;
    });
    if(!check){
            alert(`Không tìm thấy chiến binh ${findName}`);   
    }else {

            alert(`Chiến binh:${check.name},Class: ${check.class},ATK: ${check.attack},DEF: ${check.defense}`)
    }
};
//case 6: tolta
const toltal =() => {
    const toltaAllAtk = warriors.reduce((player,index) => {
        return player + index.attack
    },0);
    alert(`Tổng tấn công của toàn người chơi: ${toltaAllAtk}`);
    
    const toltalAlldefender = warriors.reduce((player,index) => {
        return player + index.defense
    },0);
    alert(`Tổng phòng thủ: ${toltalAlldefender}`);

    alert(`tổng sức mạnh hiện đại:
        ATK: ${toltaAllAtk} 
        DEF: ${toltalAlldefender}`);
};
//case 7 sắp xếp 
const lowAndHight = () => {

    warriors.sort((a, b) => a.attack - b.attack);
    
    console.log("--- DANH SÁCH TĂNG DẦN THEO ATTACK ---");
    warriors.forEach(p => {
        console.log(`Tên: ${p.name} | ATK: ${p.attack}`);
    });

    warriors.sort((a, b) => b.attack - a.attack);
    
    console.log("--- DANH SÁCH GIẢM DẦN THEO ATTACK ---");
    warriors.forEach(p => {
        console.log(`Tên: ${p.name} | ATK: ${p.attack}`);
    });
    
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
            UpdateInformation();
            break;
        case 5:
            seacrhName();
            break;
        case 6:
            toltal();
            break;
        case 7:
            lowAndHight();
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