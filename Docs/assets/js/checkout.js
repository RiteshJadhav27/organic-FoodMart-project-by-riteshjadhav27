// checkout.js

// Display the order summary on the checkout page
function displayOrderSummary() {
  const orderSummary = document.getElementById('orderSummary');
  const orderTotal = document.getElementById('orderTotal');

  // Clear the previous order summary
  orderSummary.innerHTML = '';

  let total = 0;

  // If there are no cart items, display an empty message
  if (cartItems.length === 0) {
      orderSummary.innerHTML = '<li>Your cart is empty!</li>';
      orderTotal.textContent = '0.00';
      return;
  }

  // Loop through the cart items and display each one
  cartItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - Quantity: ${item.quantity} - Price: $${(item.price * item.quantity).toFixed(2)}`;
      orderSummary.appendChild(li);
      total += item.price * item.quantity;
  });

  // Update the total price
  orderTotal.textContent = total.toFixed(2);
}

// Call the function when the page loads
window.onload = displayOrderSummary;
