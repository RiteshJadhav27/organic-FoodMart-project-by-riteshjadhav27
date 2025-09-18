// document.addEventListener('DOMContentLoaded', () => {
//     displayCartItems();
  
//     const checkoutBtn = document.getElementById('checkout-btn');
//     checkoutBtn.addEventListener('click', proceedToCheckout);
//   });
  
//   // Function to display cart items
//   function displayCartItems() {
//     const cartList = document.getElementById('cart-list');
//     const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
  
//     if (!cart.length) {
//       cartList.innerHTML = '<p class="text-warning text-center">Your cart is empty.</p>';
//       return;
//     }
  
//     cartList.innerHTML = cart.map(item => `
//       <div class="cart-item col-md-4">
//         <img src="${item.image}" alt="${item.name}" class="cart-item-image">
//         <div class="cart-item-info">
//           <h4 class="cart-item-name">${item.name}</h4>
//           <p class="cart-item-price">Price: ₹${item.price}</p>
//           <p class="cart-item-quantity">Quantity: ${item.quantity}</p>
//           <button class="remove-item-btn" data-id="${item.id}">Remove</button>
//         </div>
//       </div>
//     `).join('');
  
//     document.querySelectorAll('.remove-item-btn').forEach(button => {
//       button.addEventListener('click', removeCartItem);
//     });
//   }
  
//   // Function to remove an item from the cart
//   function removeCartItem(event) {
//     const productId = event.target.dataset.id;
//     let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
//     cart = cart.filter(item => item.id !== productId);
//     localStorage.setItem('cartItems', JSON.stringify(cart));
//     displayCartItems();
//   }
  
//   // Function to proceed to checkout
//   function proceedToCheckout() {
//     const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
//     if (!cart.length) {
//       alert('Your cart is empty!');
//       return;
//     }
  
//     // Save cart data to sessionStorage
//     sessionStorage.setItem('checkoutItems', JSON.stringify(cart));
  
//     // Navigate to checkout.html
//     window.location.href = '../Frontend/checkout.html';
//   }
  



//   function addToCart(productId, productName, productPrice, productImage, quantity) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve the existing cart from localStorage, or initialize an empty array

//     // Check if the product already exists in the cart
//     const existingProduct = cart.find(item => item.productId === productId);
//     if (existingProduct) {
//         existingProduct.quantity += quantity; // If the product is already in the cart, update the quantity
//     } else {
//         // Otherwise, add the new product to the cart
//         cart.push({
//             productId,
//             productName,
//             productPrice,
//             productImage,
//             quantity
//         });
//     }

//     // Save the updated cart back to localStorage
//     localStorage.setItem('cart', JSON.stringify(cart));

//     // Show a success message
//     alert(`${productName} has been added to your cart.`);
// }


// document.addEventListener('DOMContentLoaded', () => {
//   const cart = JSON.parse(localStorage.getItem('cart')) || [];
//   const cartListContainer = document.getElementById('cart-list');
  
//   cart.forEach(item => {
//     const cartItem = document.createElement('div');
//     cartItem.classList.add('cart-item');
//     cartItem.innerHTML = `
//       <img src="${item.productImage}" alt="${item.productName}" class="cart-item-image">
//       <div class="cart-item-info">
//         <h4>${item.productName}</h4>
//         <p>Price: ${item.productPrice}</p>
//         <p>Quantity: ${item.quantity}</p>
//       </div>
//       <button class="remove-item-btn" onclick="removeFromCart(${item.productId})">Remove</button>
//     `;
//     cartListContainer.appendChild(cartItem);
//   });
// });

// function removeFromCart(productId) {
//   let cart = JSON.parse(localStorage.getItem('cart')) || [];
//   cart = cart.filter(item => item.productId !== productId);
//   localStorage.setItem('cart', JSON.stringify(cart));
//   location.reload(); // Reload to update the cart page
// }

// Another correct code 
// document.addEventListener('DOMContentLoaded', () => {
//   displayCartItems();

//   const checkoutBtn = document.getElementById('checkout-btn');
//   if (checkoutBtn) {
//       checkoutBtn.addEventListener('click', proceedToCheckout);
//   }
// });

// // Function to display cart items
// function displayCartItems() {
//   const cartList = document.getElementById('cart-list');
//   const cart = JSON.parse(localStorage.getItem('cart')) || []; // Use consistent key: 'cart'

//   if (!cart.length) {
//       cartList.innerHTML = '<p class="text-warning text-center">Your cart is empty.</p>';
//       return;
//   }

//   cartList.innerHTML = cart.map(item => `
//       <div class="cart-item col-md-4">
//           <img src="${item.productImage}" alt="${item.productName}" class="cart-item-image">
//           <div class="cart-item-info">
//               <h4 class="cart-item-name">${item.productName}</h4>
//               <p class="cart-item-price">Price: ₹${item.productPrice}</p>
//               <p class="cart-item-quantity">Quantity: ${item.quantity}</p>
//               <button class="remove-item-btn" data-id="${item.productId}">Remove</button>
//           </div>
//       </div>
//   `).join('');

//   // Attach event listeners to remove buttons
//   document.querySelectorAll('.remove-item-btn').forEach(button => {
//       button.addEventListener('click', removeCartItem);
//   });
// }

// // Function to remove an item from the cart
// function removeCartItem(event) {
//   const productId = parseInt(event.target.dataset.id, 10); // Ensure productId is an integer
//   let cart = JSON.parse(localStorage.getItem('cart')) || [];
//   cart = cart.filter(item => item.productId !== productId);
//   localStorage.setItem('cart', JSON.stringify(cart));
//   displayCartItems(); // Refresh the cart display
// }

// // Function to add an item to the cart
// function addToCart(productId, productName, productPrice, productImage, quantity) {
//   let cart = JSON.parse(localStorage.getItem('cart')) || [];

//   // Check if the product already exists in the cart
//   const existingProduct = cart.find(item => item.productId === productId);
//   if (existingProduct) {
//       existingProduct.quantity += quantity;
//   } else {
//       cart.push({
//           productId,
//           productName,
//           productPrice,
//           productImage,
//           quantity
//       });
//   }

//   localStorage.setItem('cart', JSON.stringify(cart));
//   alert(`${productName} has been added to your cart.`);
// }

// // Function to proceed to checkout
// function proceedToCheckout() {
//   const cart = JSON.parse(localStorage.getItem('cart')) || [];
//   if (!cart.length) {
//       alert('Your cart is empty!');
//       return;
//   }

//   // Save cart data to sessionStorage
//   sessionStorage.setItem('checkoutItems', JSON.stringify(cart));

//   // Navigate to checkout.html
//   window.location.href = '../Frontend/checkout.html'; // Adjust path as necessary
// }

document.addEventListener('DOMContentLoaded', () => {
  displayCartItems();

  // Checkout button event listener
  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', proceedToCheckout);
  }
});

// Function to display cart items
function displayCartItems() {
  const cartList = document.getElementById('cart-list');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (!cart.length) {
    cartList.innerHTML = '<p class="text-warning text-center">Your cart is empty.</p>';
    return;
  }

  cartList.innerHTML = cart.map(item => `
    <div class="cart-item col-md-4">
      <img src="${item.productImage || 'placeholder.jpg'}" alt="${item.productName || 'Unnamed Product'}" class="cart-item-image">
      <div class="cart-item-info">
        <h4 class="cart-item-name">${item.productName || 'Unnamed Product'}</h4>
        <p class="cart-item-price">Price: ₹${item.productPrice || '0'}</p>
        <p class="cart-item-quantity">Quantity: ${item.quantity || 1}</p>
        <button class="remove-item-btn btn btn-danger btn-sm" data-id="${item.productId}">Remove</button>
      </div>
    </div>
  `).join('');

  // Attach event listeners to remove buttons
  document.querySelectorAll('.remove-item-btn').forEach(button => {
    button.addEventListener('click', removeCartItem);
  });
}

// Function to remove an item from the cart
function removeCartItem(event) {
  const productId = parseInt(event.target.dataset.id, 10); // Ensure productId is an integer
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(item => item.productId !== productId); // Remove item by productId
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCartItems(); // Refresh the cart display
}

// Function to add an item to the cart
function addToCart(productId, productName, productPrice, productImage, quantity) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if the product already exists in the cart
  const existingProduct = cart.find(item => item.productId === productId);
  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    cart.push({
      productId,
      productName,
      productPrice,
      productImage,
      quantity
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
  alert(`${productName} has been added to your cart.`);
}

// Function to proceed to checkout
function proceedToCheckout() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (!cart.length) {
    alert('Your cart is empty!');
    return;
  }

  // Save cart data to sessionStorage for checkout
  sessionStorage.setItem('checkoutItems', JSON.stringify(cart));

  // Navigate to checkout.html
  window.location.href = '../Frontend/checkout.html'; // Adjust path if necessary
}
