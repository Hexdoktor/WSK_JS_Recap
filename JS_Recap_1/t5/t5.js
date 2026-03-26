const n = Number(prompt("Enter a positive integer:"));
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

document.getElementById("result").innerHTML = `
    <strong>Input:</strong> ${n}<br>
    <strong>Sum of natural numbers:</strong> ${sum}
`;
