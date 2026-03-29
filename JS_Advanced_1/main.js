import { baseUrl } from "./variables.js";
import { fetchData } from "./utils.js";
import { restaurantRow, restaurantModal } from "./components.js";

const table = document.querySelector("table");
const dialog = document.querySelector("dialog");

const loadRestaurants = async () => {
  const restaurants = await fetchData(`${baseUrl}/restaurants`);

  restaurants.forEach((restaurant) => {
    const row = restaurantRow(restaurant);
    table.appendChild(row);

    row.addEventListener("click", () => handleRestaurantClick(row, restaurant));
  });
};

loadRestaurants();

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
