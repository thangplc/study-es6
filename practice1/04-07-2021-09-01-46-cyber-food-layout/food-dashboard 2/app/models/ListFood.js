export default class ListFood {
  constructor() {
    // init list food empty
    this.listFood = [];
  }
  // Add Food
  addFood(food) {
    this.listFood = [...this.listFood, food];
  }
  // Delete Food
  deleteFood(id) {
    this.listFood.forEach((id) => {});
  }
  // Edit Food
  editFood() {}
}
