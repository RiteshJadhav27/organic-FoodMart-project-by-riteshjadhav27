// Base URL for API endpoints
const API_BASE_URL = 'http://localhost:8080/product';

// Function to fetch data from an API with error handling
async function fetchAPI(url, options = {}) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch API Error:', error);
    throw error;
  }
}

// Function to display products
function displayProducts(products) {
  const productList = document.getElementById('product-list');
  if (!productList) return console.error('Product list container not found.');

  if (!products.length) {
    productList.innerHTML = '<p class="text-warning">No products available.</p>';
    return;
  }

  let productHTML = '';
  products.forEach(product => {
    const image_path = product.image_path || 'assets/images/default-product.png';  // Default image if none exists
    productHTML += `
      <div class="product-card">
        <img src="${image_path}" alt="${product.name}" class="product-image">
        <div class="product-info">
          <h3 class="product-name">${product.name}</h3>
          <p class="product-price">₹${product.price}</p>
          <button class="add-to-cart-btn" 
                  data-id="${product.product_id}" 
                  data-name="${product.name}" 
                  data-price="${product.price}" 
                  data-image="${image_path}">Add to Cart</button>
        </div>
      </div>
    `;
  });

  productList.innerHTML = productHTML;

  // Attach event listeners to "Add to Cart" buttons
  document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
      const { id, name, price, image } = button.dataset;
      addToCart(id, name, parseFloat(price), image);
    });
  });
}

// Function to fetch and display products on the page
async function fetchAndDisplayProducts() {
  try {
    const products = await fetchAPI(`${API_BASE_URL}/product`);
    displayProducts(products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

// Event Listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  fetchAndDisplayProducts();
});

response.setContentType("application/json");
response.getWriter().write(new Gson().toJson(products));

async function fetchAPI(url, options = {}) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Log the response body to check its format
    const responseText = await response.text();
    console.log('Response Text:', responseText);

    return JSON.parse(responseText);  // Try to parse JSON
  } catch (error) {
    console.error('Fetch API Error:', error);
    throw error;
  }
}


// Function to handle the "Add to Cart" functionality
function addToCart(id, name, price, image) {
  const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
  
  // Check if product already exists in the cart
  const existingProduct = cart.find(item => item.id === id);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ id, name, price, image, quantity: 1 });
  }

  localStorage.setItem('cartItems', JSON.stringify(cart));
  alert(`${name} has been added to the cart.`);
}
