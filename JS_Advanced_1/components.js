export const restaurantRow = ({ name, address }) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${name}</td>
    <td>${address}</td>
  `;
  return tr;
};

export const restaurantModal = (restaurant, menu) => {
  const { name, address, postalCode, city, phone, company } = restaurant;

  const { courses = [] } = menu;

  const menuHtml = courses.length
    ? `<ul>${courses
        .map(
          ({ name, price, diets }) =>
            `<li>${name}, ${price || "?€"}. ${diets || ""}</li>`,
        )
        .join("")}</ul>`
    : "<p>No menu available today.</p>";

  return `
    <h1>${name}</h1>
    <p>${address}</p>
    <p>${postalCode}, ${city}</p>
    <p>${phone}</p>
    <p>${company}</p>
    ${menuHtml}
  `;
};
