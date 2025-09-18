// Function to update the cart count in the navbar
function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartCount = document.getElementById('cart-count');  // This is the cart icon badge

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    // Update the badge with the total number of items in the cart
    cartCount.textContent = totalItems;
}

// Call this function on page load to set the initial cart count
window.onload = function() {
    updateCartCount();
};
