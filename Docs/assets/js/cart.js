// cart.js

// Initialize the cart array (this will be session-based, meaning it will reset when the page is refreshed)
let cartItems = [];

// Function to add a product to the cart
function addToCart(id, name, price, image, quantity) {
    // Check if the product is already in the cart
    const existingItem = cartItems.find(item => item.id === id);
    
    if (existingItem) {
        // Update quantity if the item already exists in the cart
        existingItem.quantity += quantity;
    } else {
        // Add the new item to the cart
        const newItem = { id, name, price, image, quantity };
        cartItems.push(newItem);
    }

    // Update the cart icon and the cart list
    updateCart();
}

// Function to update the cart display (cart icon, list, etc.)
function updateCart() {
    const cartIcon = document.getElementById('cart-icon');  // Cart icon element
    const cartItemCount = document.getElementById('cart-item-count');  // Item count on the cart icon

    // Calculate total number of items in the cart
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    cartItemCount.textContent = totalItems > 0 ? totalItems : ''; // Display item count or hide if 0
}

// Function to update the quantity of a product in the cart (increase or decrease)
function updateQuantity(id, change) {
    const item = cartItems.find(i => i.id === id);

    if (item) {
        item.quantity += change;

        if (item.quantity <= 0) {
            cartItems = cartItems.filter(i => i.id !== id); // Remove item if quantity becomes 0 or negative
        }
    }

    updateCart(); // Refresh the cart icon and the cart list
}


// Function to update the cart display (cart list, item count, total price, etc.)
function updateCart() {
    const cartItemList = document.getElementById('cartItemsList'); // Cart items list element in the cart page
    const cartItemCount = document.getElementById('cart-item-count');  // Cart icon item count
    const cartTotal = document.getElementById('cartTotal');  // Total price display on the cart page

    // Clear the previous list
    cartItemList.innerHTML = '';

    // Calculate the total number of items and price
    let totalItems = 0;
    let totalPrice = 0;

    // Loop through the cart items to add them to the list
    cartItems.forEach(item => {
        totalItems += item.quantity;
        totalPrice += item.quantity * item.price;

        // Create a list item for each cart product
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        listItem.innerHTML = `
            <div>
                <img src="${item.image}" alt="${item.name}" width="50" class="me-3">
                ${item.name} - Quantity: ${item.quantity}
            </div>
            <span>$${(item.quantity * item.price).toFixed(2)}</span>
        `;
        cartItemList.appendChild(listItem);
    });

    // Update the cart item count on the icon
    cartItemCount.textContent = totalItems > 0 ? totalItems : '';

    // Update the total price on the cart page
    cartTotal.textContent = totalPrice.toFixed(2);
}

// Initial cart display when the page loads (on the cart.html page)
window.onload = updateCart;


// Add a delete button next to the product in the cart item 
const listItem = document.createElement('li');
listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
listItem.innerHTML = `
    <div>
        <img src="${item.image}" alt="${item.name}" width="50" class="me-3">
        ${item.name} - Quantity: ${item.quantity}
    </div>
    <span>$${(item.quantity * item.price).toFixed(2)}</span>
    <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">Remove</button>
`;

function removeFromCart(id) {
    cartItems = cartItems.filter(item => item.id !== id); // Remove item from the cart
    updateCart(); // Refresh the cart display
}

// Function to update the cart display (cart list, item count, total price, etc.)
function updateCart() {
    const cartItemList = document.getElementById('cartItemsList'); // Cart items list element in the cart page
    const cartItemCount = document.getElementById('cart-item-count');  // Cart icon item count
    const cartTotal = document.getElementById('cartTotal');  // Total price display on the cart page

    // Clear the previous list
    cartItemList.innerHTML = '';

    // Calculate the total number of items and price
    let totalItems = 0;
    let totalPrice = 0;

    // Loop through the cart items to add them to the list
    cartItems.forEach(item => {
        totalItems += item.quantity;
        totalPrice += item.quantity * item.price;

        // Create a list item for each cart product
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        listItem.innerHTML = `
            <div>
                <img src="${item.image}" alt="${item.name}" width="50" class="me-3">
                ${item.name} - Quantity: ${item.quantity}
            </div>
            <span>$${(item.quantity * item.price).toFixed(2)}</span>
            <!-- Remove Button -->
            <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemList.appendChild(listItem);
    });

    // Update the cart item count on the icon
    cartItemCount.textContent = totalItems > 0 ? totalItems : '';

    // Update the total price on the cart page
    cartTotal.textContent = totalPrice.toFixed(2);
}

// Function to remove an item from the cart
function removeFromCart(id) {
    // Remove the item with the matching id from the cartItems array
    cartItems = cartItems.filter(item => item.id !== id);

    // Update the cart display (re-render the cart)
    updateCart();

    // Optionally, update the cart count on the icon
    updateCartIcon();
}
