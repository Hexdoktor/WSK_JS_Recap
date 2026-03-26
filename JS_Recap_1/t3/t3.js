const a = Number(prompt("Enter side a:"));
const b = Number(prompt("Enter side b:"));
const c = Number(prompt("Enter side c:"));

let type;

if (a === b && b === c) {
  type = "Equilateral triangle";
} else if (a === b || b === c || a === c) {
  type = "Isosceles triangle";
} else {
  type = "Scalene triangle";
}

document.getElementById("result").innerHTML = `
    <strong>Sides:</strong>  ${a}, ${b}, ${c}<br>
    <strong>Triangle type:</strong> ${type}
`;
