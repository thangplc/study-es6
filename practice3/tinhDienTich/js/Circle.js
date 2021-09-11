import Shape from "./Shape.js";
export default class Circle extends Shape {
  constructor(bgColor, szX, szY, radius) {
    super("Circle", bgColor, szX, szY);
    this.radius = radius;
  }
  calcArea() {
    const PI = 3.14;
    this.area = PI * (this.radius * this.radius);
  }
  draw() {
    const content = `
       <div class="text-center rounded-circle" style="width: ${this.sizeX}; height: ${this.sizeY}; background-color: ${this.bgColor}">
                <p>
                    Name: ${this.name}
                    <br>
                    Area: ${this.area}
                </p>
            </div>
      `;
    document.getElementById("main").innerHTML = content;
  }
}
