const productsSection = document.querySelector(".products");

export const renderProducts = (productsData) => {
  const productsHTML = productsData
    .map((product) => {
      return `<div class="product" data-id="${product.id}">
        <div class="img-container">
          <img
            id="product-img"
            class="img"
            src="${product.image}"
            alt="${product.title}"
          />
        </div>
        <div class="product-info">
          <h5 id="product-title" class="product-title">
            ${product.title}
          </h5>
          <small id="product-description" class="product-description">
            ${product.description}
          </small>
          <div class="product-numbers">
            <small id="product-price" class="product-price">$${product.price}</small>
            <small id="product-rating" class="product-rating"
              ><i class="far fa-star rating-icon"></i>${product.rating.rate}</small
            >
          </div>
        </div>
      </div>`;
    })
    .join("");

  productsSection.innerHTML = productsHTML;
  console.log("Products rendered.");
};
