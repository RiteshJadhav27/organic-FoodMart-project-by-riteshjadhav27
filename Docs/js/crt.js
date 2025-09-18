// Function to add product to cart and save to localStorage
function addToCart(product) {
    // Get the current cart from localStorage or initialize an empty array if it's not present
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the new product to the cart
    cart.push(product);

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
}
