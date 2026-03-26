const n = Number(prompt("Enter a positive integer:"));

let html = "<table border ='1' cellpadding ='5'>";

for (let row = 1; row <= n; row++) {
  html += "<tr>";

  for (let col = 1; col <= n; col++) {
    html += `<td>${row * col}</td>`;
  }

  html += "</tr>";
}

html += "</table>";

document.getElementById("table-container").innerHTML = html;
