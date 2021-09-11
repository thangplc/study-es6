import ListFood from "../models/ListFood.js";
import Food from "../models/Food.js";

const getEl = (id) => document.getElementById(id);
const foods = new ListFood();

//  Hidden btn CapNhat
getEl("btnThem").addEventListener("click", () => {
  getEl("btnCapNhat").style.display = "none";
  getEl("btnThemMon").style.display = "block";
});
// Render info food into table
const render = (listFood) => {
  //   debugger;
  let content = "";
  listFood.forEach((food) => {
    const { id, name, type, price, promotion, pricePromotion, status } = food;
    content += `
            <tr>
                <td>${id}</td>
                <td>${name}</td>            
                <td>${type === "loai1" ? "Chay" : "Mặn"}</td>
                <td>${price}</td>
                <td>${promotion}</td>
                <td>${pricePromotion}</td>
                <td>${status === 1 ? "Còn" : "Hết"}</td>
                <td>
                    <button class="btn btn-primary">Sửa</button>
                    <button class="btn btn-danger">Xóa</button>
                </td>
            </tr>
            `;
  });
  getEl("tbodyFood").innerHTML = content;
};
// Set, Get local storage
// const setLocalStorage = (listFood) => {
//   localStorage.setItem("Foods", JSON.stringify(listFood));
// };
// const getLocalStorage = () => {
//   if (localStorage.getItem("Foods")) {
//     foods.listFood = JSON.parse(localStorage.getItem("Foods"));
//   }
//   //   render(foods.listFood);
// };
// Add food
const addFood = () => {
  // Get info
  let id = getEl("foodID").value;
  let name = getEl("tenMon").value;
  let type = getEl("loai").value;
  let price = getEl("giaMon").value;
  let promotion = getEl("khuyenMai").value;
  let status = getEl("tinhTrang").value;
  let pic = getEl("hinhMon").value;
  let desc = getEl("moTa").value;

  // init obj Food from class obj ListFood
  const food = new Food(id, name, type, +price, +promotion, status, pic, desc);
  food.calcPricePromotion();
  foods.addFood(food);
  console.log(foods);

  // Render Food
  //   setLocalStorage(foods.listFood);
  render(foods.listFood);
};

// getLocalStorage();
getEl("btnThemMon").addEventListener("click", addFood);
