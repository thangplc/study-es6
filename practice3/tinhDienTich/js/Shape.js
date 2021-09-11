export default class Shape {
  constructor(name, bgColor, szX, szY) {
    this.name = name;
    this.bgColor = bgColor;
    this.szX = szX;
    this.szY = szY;
  }
  calcArea() {
    this.area = 0;
  }
  draw() {
    const content = `
        <div class = "alert alert-primary" >Chua co dien tich</div>
      `;
    document.getElementById("main").innerHTML = content;
  }
}
