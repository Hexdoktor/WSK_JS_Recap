const numbers = [];
let input;

while (true) {
  input = prompt("Enter a number (or 'done' to finish):");

  if (input === null) break;
  if (input.toLowerCase() === "done") break;

  const num = Number(input);

  if (!isNaN(num)) {
    numbers.push(num);
  }
}

const evens = [];

for (const num of numbers) {
  if (num % 2 === 0) {
    evens.push(num);
  }
}

const output = document.getElementById("output");

if (evens.length > 0) {
  output.innerHTML = `Even numbers: ${evens.join(", ")}`;
} else {
  output.innerHTML = "Even numbers: None";
}
