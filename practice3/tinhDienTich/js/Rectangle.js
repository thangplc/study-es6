import Shape from "./Shape.js";
export default class Rectangle extends Shape {
  constructor(bgColor, szX, szY, lenght, width) {
    super("Rectangle", bgColor, szX, szY);
    this.lenght = lenght;
    this.width = width;
  }
  calcArea() {
    this.area = this.width * this.lenght;
  }
  draw() {
    const content = `
        <div class = "alert alert-primary" >Hinh chu nhat</div>
      `;
    document.getElementById("main").innerHTML = content;
  }
}
