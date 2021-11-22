import { getData } from "./getData.js";

const btnsSection = document.querySelector(".filter-buttons");

export async function renderButtons() {
  const categories = await getData(
    "https://fakestoreapi.com/products/categories"
  );

  const btnsHTML = categories
    .map((category) => {
      return `<button id="${category}" class="filter-btn btn">${category}</button
        >`;
    })
    .join("");

  btnsSection.innerHTML = btnsHTML;
}
