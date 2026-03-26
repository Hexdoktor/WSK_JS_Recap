function sortArray(numbers, order) {
  const sorted = [...numbers];

  if (order === "asc") {
    sorted.sort((a, b) => a - b);
  } else if (order === "desc") {
    sorted.sort((a, b) => b - a);
  } else {
    console.log("Invalid order. Use 'asc' or 'desc'.");
  }

  return sorted;
}

const numbers = [5, 2, 8, 1, 9];

console.log("Original:", numbers);
console.log("Ascending:", sortArray(numbers, "asc"));
console.log("Descending:", sortArray(numbers, "desc"));
