import { createProducts } from "./utils/createProducts.js";
import { renderButtons } from "./utils/renderBtns.js";

window.addEventListener("DOMContentLoaded", () => {
  renderButtons();
  createProducts("https://fakestoreapi.com/products?limit=8");
  console.log("Cargado");
});

const btnsSection = document.querySelector(".filter-buttons");

btnsSection.addEventListener("click", (e) => {
  const param = e.target.id;
  const URL = `https://fakestoreapi.com/products/category/${param}`;
  createProducts(URL);
});
