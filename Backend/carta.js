// Handle Add to Cart button click
function handleAddToCart(event) {
    const product = {
        id: event.target.getAttribute('data-id'),
        name: event.target.getAttribute('data-name'),
        price: parseFloat(event.target.getAttribute('data-price')),
        imagePath: event.target.getAttribute('data-imagePath'),
        quantity: parseInt(event.target.getAttribute('data-quantity'))
    };

    // Send the product data to the backend to add it to the cart
    fetch('http://localhost:8080/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to add product to cart');
        }
        return response.json();
    })
    .then(data => {
        console.log('Cart updated:', data);
        alert('Product added to cart!');
        // Optionally update cart display or notify the user
    })
    .catch(error => {
        console.error('Error adding to cart:', error);
        alert('Unable to add product to cart. Please try again.');
    });
}

// Fetch and display the products in the cart
function displayCart() {
    fetch('http://localhost:8080/cart', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch cart');
        }
        return response.json();
    })
    .then(cart => {
        const cartContainer = document.getElementById('cart-items');
        const totalContainer = document.getElementById('total');
        
        cartContainer.innerHTML = ''; // Clear previous cart content
        let totalPrice = 0;

        // Display cart items
        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('col-md-4', 'mb-4');
            cartItemElement.innerHTML = `
                <div class="card">
                    <img src="${item.imagePath}" class="card-img-top" alt="${item.name}" />
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">Price: $${item.price}</p>
                        <p class="card-text">Quantity: ${item.quantity}</p>
                    </div>
                </div>
            `;
            cartContainer.appendChild(cartItemElement);

            // Calculate total price
            totalPrice += item.price * item.quantity;
        });

        // Display the total price
        totalContainer.innerHTML = `<h3>Total: $${totalPrice.toFixed(2)}</h3>`;
    })
    .catch(error => {
        console.error('Error fetching cart:', error);
        alert('Unable to load cart. Please try again later.');
    });
}

// Add event listeners to all Add to Cart buttons when the products are loaded
function setupAddToCartButtons() {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', handleAddToCart);
    });
}

// Initialize functions when the page loads
document.addEventListener('DOMContentLoaded', () => {
    setupAddToCartButtons();
    displayCart();
});
