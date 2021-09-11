import Shape from "./Shape.js";
export default class Square extends Shape {
  constructor(bgColor, szX, szY, side) {
    super("Square", bgColor, szX, szY);
    this.side = side;
  }
  calcArea() {
    this.area = Math.pow(this.side, 2);
  }

  draw() {
    const content = `
            <div class="text-center" style="width: ${this.szX}; height: ${this.szY}; background-color: ${this.bgColor}">
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
