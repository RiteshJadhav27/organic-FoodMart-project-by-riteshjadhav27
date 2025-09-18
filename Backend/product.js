import { products } from "../Frontend/products.js";

// Function to display products
function displayProducts(products) {
  const productList = document.getElementById("product-list");
  if (!productList) {
    console.error("Product list container not found.");
    return;
  }

  let productHTML = "";
  products.forEach((product) => {
    const { id, name, price, imagePath } = product;
    productHTML += `
      <div class="product-card">
        <img src="${imagePath}" alt="${name}" class="product-image">
        <div class="product-info">
          <h3 class="product-name">${name}</h3>
          <p class="product-price">₹${price}</p>
          <button class="add-to-cart-btn" 
                  data-id="${id}" 
                  data-name="${name}" 
                  data-price="${price}" 
                  data-image="${imagePath}">Add to Cart</button>
        </div>
      </div>
    `;
  });

  productList.innerHTML = productHTML;

  // Attach event listeners to "Add to Cart" buttons
  document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const { id, name, price, image } = button.dataset;
      addToCart(id, name, parseFloat(price), image);
    });
  });
}

// Function to handle adding items to the cart
function addToCart(id, name, price, image) {
  const cart = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Check if product already exists in the cart
  const existingProduct = cart.find((item) => item.id === id);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ id, name, price, image, quantity: 1 });
  }

  localStorage.setItem("cartItems", JSON.stringify(cart));
  alert(`${name} has been added to the cart.`);
}

// On page load, display products
document.addEventListener("DOMContentLoaded", () => {
  displayProducts(products);
});

function addToCart(productId, productName, productPrice, productImage, quantity) {
  let cart = JSON.parse(localStorage.getItem('cart')) || []; // Get cart from localStorage

  // Check if the product is already in the cart
  const existingProduct = cart.find(item => item.productId === productId);
  if (existingProduct) {
    existingProduct.quantity += quantity; // Update quantity if product exists
  } else {
    // Add new product to the cart
    cart.push({
      productId,
      productName,
      productPrice,
      productImage,
      quantity
    });
  }

  // Save the updated cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Show success message
  alert(`${productName} has been added to your cart.`);
}
