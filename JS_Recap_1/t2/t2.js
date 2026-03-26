const x1 = Number(prompt("Enter x1:"));
const y1 = Number(prompt("Enter y1:"));
const x2 = Number(prompt("Enter x2:"));
const y2 = Number(prompt("Enter y2:"));

const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

document.getElementById("result").innerHTML = `
    <strong>Point 1:</strong> (${x1}, ${y1})<br>
    <strong>Point 2:</strong> (${x2}, ${y2})<br>
    <strong>Distance:</strong> ${distance.toFixed(2)}
`;
