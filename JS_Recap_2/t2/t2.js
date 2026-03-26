const numbers = [];

for (let i = 1; i <= 5; i++) {
  const num = Number(prompt(`Enter number ${i}:`));
  numbers.push(num);
}

console.log("Numbers:", numbers);

const searchNum = Number(prompt("Enter a number to search:"));

if (numbers.includes(searchNum)) {
  console.log(`Number ${searchNum} is found in the array.`);
} else {
  console.log(`Number ${searchNum} is NOT found in the array.`);
}

numbers.pop();
console.log("Updated Numbers array:", numbers);

numbers.sort((a, b) => a - b);
console.log("Sorted Numbers array:", numbers);
