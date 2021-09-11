import Shape from "./Shape.js";
import Square from "./Square.js";
import Circle from "./Circle.js";
import Rectangle from "./Rectangle.js";
const shape = new Shape();
shape.draw();
const circle = new Circle();
const rectangle = new Rectangle();

const handleSquare = () => {
  const side = +document.getElementById("side").value;
  const sizeX = +document.getElementById("squareX").value + "px";
  const sizeY = +document.getElementById("squareY").value + "px";
  const bgColor = document.getElementById("squareColor").value;
  const square = new Square(bgColor, sizeX, sizeY, side);
  square.calcArea();
  square.draw();
};
document.getElementById("areaSquare").onclick = handleSquare;

const handleCircle = () => {
  const radius = +document.getElementById("radius").value;
  const sizeX = document.getElementById("cirX").value + "px";
  const sizeY = document.getElementById("cirY").value + "px";
  const bgColor = document.getElementById("cirColor").value;
  const circle = new Circle(bgColor, sizeX, sizeY, radius);
  circle.calcArea();
  circle.draw();
};
document.getElementById("areaCircle").onclick = handleCircle;
