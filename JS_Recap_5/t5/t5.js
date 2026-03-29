async function loadRestaurants() {
  try {
    const response = await fetch(
      "https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants",
    );

    if (!response.ok) {
      throw new Error(`Failed to load restaurants: ${response.status}`);
    }

    const restaurants = await response.json();

    renderRestaurants(restaurants);
  } catch (error) {
    console.error(error);
    document.body.innerHTML = `<p>Could not load restaurants. Check VPN.</p>`;
  }
}

loadRestaurants();

// render the table rows
function renderRestaurants(restaurants) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  restaurants.forEach((r) => {
    const tr = document.createElement("tr");

    const nameTd = document.createElement("td");
    nameTd.textContent = r.name;

    const addressTd = document.createElement("td");
    addressTd.textContent = r.address;

    tr.appendChild(nameTd);
    tr.appendChild(addressTd);

    tr.addEventListener("click", () => openRestaurantDialog(r, tr));

    tbody.appendChild(tr);
  });
}

// fetch the daily menu
async function fetchMenu(id) {
  try {
    const response = await fetch(
      `https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/daily/${id}/fi`,
    );

    if (!response.ok) {
      throw new Error(`Failed to load menu: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

// open dialog with restaurant info + menu
async function openRestaurantDialog(r, tr) {
  const dialog = document.querySelector("dialog");

  // Remove highlights
  document.querySelectorAll("tr").forEach((row) => {
    row.classList.remove("highlight");
  });

  tr.classList.add("highlight");

  dialog.innerHTML = `
    <h2>${r.name}</h2>
    <p><strong>Address:</strong> ${r.address}</p>
    <p><strong>Postal Code:</strong> ${r.postalCode}</p>
    <p><strong>City:</strong> ${r.city}</p>
    <p><strong>Phone:</strong> ${r.phone}</p>
    <p><strong>Company:</strong> ${r.company}</p>

    <h3>Today's Menu</h3>
    <p id="menu-loading">Loading menu...</p>

    <button class="close-btn">Close</button>
  `;

  dialog.showModal();

  dialog.querySelector(".close-btn").addEventListener("click", () => {
    dialog.close();
  });

  // fetch menu using the _id field
  const menu = await fetchMenu(r._id);

  const menuContainer = dialog.querySelector("#menu-loading");

  if (!menu || !menu.courses || menu.courses.length === 0) {
    menuContainer.textContent = "Menu unavailable.";
  } else {
    menuContainer.innerHTML = `
      <ul>
        ${menu.courses
          .map((item) => `<li>${item.name} - ${item.price || ""}</li>`)
          .join("")}
      </ul>
    `;
  }
}
