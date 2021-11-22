import { getData } from "./getData.js";
import { renderProducts } from "./renderProducts.js";

export const createProducts = async (url) => {
  const products = await getData(url);
  renderProducts(products);
  console.log("Products Created");
};
