export const products = [
  {
    productId: 0,
    productName: "Hybrid Tomato (Tamata)",
    productPrice: 14.00,
    productImage: "./assets/images/image1.png",
  },
  {
    productId: 1,
    productName: "Organic Apple",
    productPrice: 2.50,
    productImage: "./assets/images/apple.jpg", // Ensure this path is correct
  },
  {
    productId: 2,
    productName: "Organic Banana",
    productPrice: 1.20,
    productImage: "./assets/images/banana.jpg",
  },
  {
    productId: 3,
    productName: "Organic Carrot",
    productPrice: 1.80,
    productImage: "./assets/images/carrot.jpg",
  },
  {
    productId: 4,
    productName: "Organic Tomato",
    productPrice: 3.00,
    productImage: "./assets/images/tomato.jpg",
  },
];


// Example product data
const product = {
  name: "Apple",
  price: 50,
  quantity: 2,
  image: "apple.jpg" // Or any image URL for the product
};

// Add product to cart
addToCart(product);
