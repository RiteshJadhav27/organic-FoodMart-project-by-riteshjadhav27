// Product data array
const products = [
    {
      id: 1,
      name: "Whole Wheat Sandwich Bread",
      category: "Breads",
      price: "180",
      oldPrice: "240.00",
      description: "Whole Wheat Sandwich Bread made with organic whole wheat flour.",
      image: "assets/images/product-thumb-1.png",
    },
    {
      id: 2,
      name: "Whole Grain Oatmeal",
      category: "Cereals",
      price: "350.00",
      oldPrice: "250.00",
      description: "Organic whole grain oatmeal for a healthy breakfast.",
      image: "assets/images/product-thumb-2.png",
    },
    {
      id: 3,
      name: "Sharp Cheddar Cheese Block",
      category: "Cheese",
      price: "90",
      oldPrice: "150",
      description: "Fresh, juicy organic tomatoes perfect for salads and cooking.",
      image: "assets/images/product-thumb-3.png",
    },
    {
      id: 4,
      name: "Organic Baby Spinach",
      category: "Dairy Alternatives",
      price: "120",
      oldPrice: "220",
      description: "Creamy, nutritious almond milk made from organic almonds.",
      image: "assets/images/product-thumb-4.png",
    },
    // Add more products here as needed...
  ];
  
  // Function to get the product by ID
  function getProductById(id) {
    return products.find(product => product.id === id);
  }
  
  // Display product details on the product-details page
  function displayProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id")); // Get product ID from URL
  
    const product = getProductById(productId);
  
    if (product) {
      // Populate the HTML elements with product data
      document.getElementById("product-name").textContent = product.name;
      document.getElementById("product-category").textContent = `Category: ${product.category}`;
      document.getElementById("product-price").innerHTML = `<strong>Price:</strong> ${product.price}`;
      document.getElementById("product-description").textContent = product.description;
      document.getElementById("product-image").src = product.image;
    } else {
      // If the product isn't found, show an error message
      document.getElementById("product-details").innerHTML = `<p>Product not found!</p>`;
    }
  }
  
  // Call the function to display the product details when the page loads
  window.onload = displayProductDetails;
  