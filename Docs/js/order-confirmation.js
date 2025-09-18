// Function to display the order summary
function displayOrderConfirmation() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const orderSummary = document.getElementById('orderConfirmationList');
    const orderTotal = document.getElementById('orderConfirmationTotal');

    orderSummary.innerHTML = ''; // Clear previous summary
    let total = 0;

    // If the cart is empty, show a message
    if (cartItems.length === 0) {
        orderSummary.innerHTML = `<li class="list-group-item">No items in your order.</li>`;
        orderTotal.textContent = '0.00';
        return;
    }

    // Display each cart item in the order confirmation summary
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between');
        li.innerHTML = `
            <div>
                <h6 class="my-0">${item.name}</h6>
                <small>Quantity: ${item.quantity}</small>
            </div>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        `;
        orderSummary.appendChild(li);
        total += item.price * item.quantity;
    });

    // Update the total price
    orderTotal.textContent = total.toFixed(2);
}

// Call the function to display the order confirmation when the page loads
window.onload = displayOrderConfirmation;
