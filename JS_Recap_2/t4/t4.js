function sortArray(numbers) {
  return [...numbers].sort((a, b) => a - b);
}

const original = [5, 4, 9, 1, 7];

console.log("Original array:", original);
console.log("Sorted array:", sortArray(original));
