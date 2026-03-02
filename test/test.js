let products = [
  { id: "P01", name: "Laptop MacBook Pro M3", price: 2000, category: "Laptop", inStock: true },
  { id: "P02", name: "Chuột không dây Logitech", price: 45, category: "Phụ kiện", inStock: true },
  { id: "P03", name: "Bàn phím cơ Keychron", price: 95, category: "Phụ kiện", inStock: false },
  { id: "P04", name: "Màn hình Dell UltraSharp", price: 450, category: "Màn hình", inStock: true },
  { id: "P05", name: "Tai nghe Sony WH-1000XM5", price: 350, category: "Phụ kiện", inStock: true }
];


const checkList =  products.filter((element) => {
        return element.inStock === true;
    });
        checkList.forEach((element,index) => {
            console.log(`Các sản phẩm còn hàng: ${element.name}`);
        });
checkList(element);


console.log(`--------`)
const list = products.filter((element) => {
    return element.category === "Phụ kiện"
});
list.forEach((element,index) => {
    console.log(`${element.name}`);
});

console.log(`--------`)
const toltal =products.reduce((element,index) => {
    return element + index.price
},0);
console.log(`Tổng: ${toltal}`)

