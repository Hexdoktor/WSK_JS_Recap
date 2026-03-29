import { baseUrl } from "./variables.js";
import { fetchData } from "./utils.js";
import { restaurantRow, restaurantModal } from "./components.js";

const table = document.querySelector("table");
const dialog = document.querySelector("dialog");

let allRestaurants = [];

const loadRestaurants = async () => {
  allRestaurants = await fetchData(`${baseUrl}/restaurants`);

  if (!allRestaurants) {
    document.querySelector("tbody").innerHTML =
      "<tr><td colspan='2'>Failed to load restaurants.</td></tr>";
    return;
  }

  renderList(allRestaurants);
};

loadRestaurants();

const renderList = (restaurants) => {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  restaurants.forEach((restaurant) => {
    const row = restaurantRow(restaurant);
    tbody.appendChild(row);

    row.addEventListener("click", () => handleRestaurantClick(row, restaurant));
  });
};

const applyFilter = (company) => {
  if (company === "all") {
    renderList(allRestaurants);
    return;
  }

  const filtered = allRestaurants.filter((r) => r.company === company);

  filtered.length
    ? renderList(filtered)
    : (document.querySelector("tbody").innerHTML =
        `<tr><td colspan="2">No restaurants found.</td></tr>`);
};

document.querySelectorAll("#filters button").forEach((btn) => {
  btn.addEventListener("click", () => {
    applyFilter(btn.dataset.company);
  });
});

const handleRestaurantClick = async (row, restaurant) => {
  table.querySelectorAll("tr").forEach((r) => r.classList.remove("highlight"));
  row.classList.add("highlight");

  dialog.innerHTML = "<p>Loading...</p>";
  dialog.showModal();

  const menu = await fetchData(
    `${baseUrl}/restaurants/daily/${restaurant._id}/fi`,
  );

  dialog.innerHTML = restaurantModal(restaurant, menu);

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "Close";
  closeBtn.addEventListener("click", () => dialog.close());
  dialog.appendChild(closeBtn);
};
