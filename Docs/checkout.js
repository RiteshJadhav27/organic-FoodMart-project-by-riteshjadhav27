// document.addEventListener('DOMContentLoaded', () => {
//   displayCheckoutItems();
  
//   // Event listener for confirming the order
//   document.getElementById('confirm-order-btn').addEventListener('click', confirmOrder);
  
//   // Event listener for going back to the homepage
//   document.getElementById('go-home-btn').addEventListener('click', () => {
//     window.location.href = 'index.html'; // Redirect to homepage
//   });
// });

// // Function to display checkout items
// function displayCheckoutItems() {
//   const checkoutList = document.getElementById('checkout-list');
//   const checkoutItems = JSON.parse(sessionStorage.getItem('checkoutItems')) || [];

//   if (!checkoutItems.length) {
//     checkoutList.innerHTML = '<p class="text-warning text-center">No items to checkout.</p>';
//     return;
//   }

//   checkoutList.innerHTML = checkoutItems.map(item => `
//     <div class="checkout-item col-md-4">
//       <img src="${item.image}" alt="${item.name}" class="checkout-item-image">
//       <div class="checkout-item-info">
//         <h4 class="checkout-item-name">${item.name}</h4>
//         <p class="checkout-item-price">Price: ₹${item.price}</p>
//         <p class="checkout-item-quantity">Quantity: ${item.quantity}</p>
//       </div>
//     </div>
//   `).join('');
// }

// // Function to handle order confirmation
// function confirmOrder() {
//   const address = document.getElementById('address').value;
//   const mobile = document.getElementById('mobile').value;
//   const payment = document.getElementById('payment').value;

//   // Simple validation
//   if (!address || !mobile || !payment) {
//     alert('Please fill all the details.');
//     return;
//   }

//   // Show loader and hide the order form
//   document.getElementById('order-form').style.display = 'none';
//   document.getElementById('loader').style.display = 'block';

//   // Simulate order processing (e.g., 3 seconds delay)
//   setTimeout(() => {
//     // Hide the loader
//     document.getElementById('loader').style.display = 'none';
    
//     // Show confirmation message
//     document.getElementById('confirmation').style.display = 'block';

//     // Clear sessionStorage (or you can keep it if you need to)
//     sessionStorage.removeItem('checkoutItems');
//   }, 3000); // Simulate 3 seconds delay
// }

// // For comfirm-order page
// document.getElementById("confirm-order-btn").addEventListener("click", () => {
//   // Retrieve checkout details
//   const address = document.getElementById("address").value.trim();
//   const mobile = document.getElementById("mobile").value.trim();
//   const payment = document.getElementById("payment").value.trim();

//   if (!address || !mobile || !payment) {
//     alert("Please fill all the required details.");
//     return;
//   }

//   // Generate a random order number
//   const orderNumber = Math.floor(100000 + Math.random() * 900000);

//   // Prepare order summary
//   const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//   const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

//   // Store order details in localStorage
//   localStorage.setItem("orderDetails", JSON.stringify({
//     orderNumber,
//     address,
//     mobile,
//     payment,
//     cartItems,
//     totalAmount
//   }));

//   // Redirect to Order Confirmation page
//   window.location.href = "order-confirmation.html";
// });

// document.addEventListener('DOMContentLoaded', () => {
//   displayCheckoutItems();

//   // Confirm order button event
//   document.getElementById('confirm-order-btn').addEventListener('click', confirmOrder);

//   // Go back to the homepage
//   document.getElementById('go-home-btn').addEventListener('click', () => {
//       window.location.href = 'index.html'; // Redirect to homepage
//   });
// });

// // Function to display checkout items
// function displayCheckoutItems() {
//   const checkoutList = document.getElementById('checkout-list');
//   const checkoutItems = JSON.parse(sessionStorage.getItem('checkoutItems')) || [];

//   if (!checkoutItems.length) {
//       checkoutList.innerHTML = '<p class="text-warning text-center">No items to checkout.</p>';
//       return;
//   }

//   checkoutList.innerHTML = checkoutItems.map(item => `
//       <div class="checkout-item col-md-4">
//           <img src="${item.image || 'placeholder.jpg'}" alt="${item.name || 'Unnamed Product'}" class="checkout-item-image">
//           <div class="checkout-item-info">
//               <h4 class="checkout-item-name">${item.name || 'Unnamed Product'}</h4>
//               <p class="checkout-item-price">Price: ₹${item.price || '0'}</p>
//               <p class="checkout-item-quantity">Quantity: ${item.quantity || '1'}</p>
//           </div>
//       </div>
//   `).join('');
// }

// // Function to confirm the order
// function confirmOrder() {
//   const address = document.getElementById('address').value.trim();
//   const mobile = document.getElementById('mobile').value.trim();
//   const payment = document.getElementById('payment').value.trim();

//   if (!address || !mobile || !payment) {
//       alert('Please fill all the details.');
//       return;
//   }

//   // Simulate order processing
//   document.getElementById('order-form').style.display = 'none';
//   document.getElementById('loader').style.display = 'block';

//   setTimeout(() => {
//       document.getElementById('loader').style.display = 'none';
//       document.getElementById('confirmation').style.display = 'block';

//       // Clear the checkout session data
//       sessionStorage.removeItem('checkoutItems');
//   }, 3000);
// }


// document.addEventListener('DOMContentLoaded', () => {
//   displayCheckoutItems();

//   // Confirm order button event
//   document.getElementById('confirm-order-btn').addEventListener('click', confirmOrder);

//   // Go back to the homepage
//   document.getElementById('go-home-btn').addEventListener('click', () => {
//     window.location.href = 'index.html'; // Redirect to homepage
//   });
// });

// // Function to display checkout items
// function displayCheckoutItems() {
//   const checkoutList = document.getElementById('checkout-list');
//   const checkoutItems = JSON.parse(sessionStorage.getItem('checkoutItems')) || [];

//   if (!checkoutItems.length) {
//     checkoutList.innerHTML = '<p class="text-warning text-center">No items to checkout.</p>';
//     return;
//   }

//   checkoutList.innerHTML = checkoutItems.map(item => `
//     <div class="checkout-item col-md-4">
//       <img src="${item.image || 'placeholder.jpg'}" alt="${item.name || 'Unnamed Product'}" class="checkout-item-image">
//       <div class="checkout-item-info">
//         <h4 class="checkout-item-name">${item.name || 'Unnamed Product'}</h4>
//         <p class="checkout-item-price">Price: ₹${item.price || '0'}</p>
//         <p class="checkout-item-quantity">Quantity: ${item.quantity || '1'}</p>
//       </div>
//     </div>
//   `).join('');
// }

// // Function to confirm the order
// function confirmOrder() {
//   const address = document.getElementById('address').value.trim();
//   const mobile = document.getElementById('mobile').value.trim();
//   const payment = document.getElementById('payment').value.trim();

//   if (!address || !mobile || !payment) {
//     alert('Please fill all the details.');
//     return;
//   }

//   // Simulate order processing
//   document.getElementById('order-form').style.display = 'none';
//   document.getElementById('loader').style.display = 'block';

//   setTimeout(() => {
//     document.getElementById('loader').style.display = 'none';
//     document.getElementById('confirmation').style.display = 'block';

//     // Clear the checkout session data
//     sessionStorage.removeItem('checkoutItems');
//   }, 3000);
// }


// correct code 
// document.addEventListener('DOMContentLoaded', () => {
//   displayCheckoutItems();

//   // Confirm order button event
//   document.getElementById('confirm-order-btn').addEventListener('click', confirmOrder);

//   // Go back to the homepage
//   document.getElementById('go-home-btn').addEventListener('click', () => {
//     window.location.href = 'index.html'; // Redirect to homepage
//   });
// });

// // Function to display checkout items
// function displayCheckoutItems() {
//   const checkoutList = document.getElementById('checkout-list');
//   const checkoutItems = JSON.parse(sessionStorage.getItem('checkoutItems')) || [];

//   if (!checkoutItems.length) {
//     checkoutList.innerHTML = '<p class="text-warning text-center">No items to checkout.</p>';
//     return;
//   }

//   checkoutList.innerHTML = checkoutItems.map(item => `
//     <div class="checkout-item col-md-4">
//       <img src="${item.productImage || 'placeholder.jpg'}" alt="${item.productName || 'Unnamed Product'}" class="checkout-item-image">
//       <div class="checkout-item-info">
//         <h4 class="checkout-item-name">${item.productName || 'Unnamed Product'}</h4>
//         <p class="checkout-item-price">Price: ₹${item.productPrice || '0'}</p>
//         <p class="checkout-item-quantity">Quantity: ${item.quantity || 1}</p>
//       </div>
//     </div>
//   `).join('');
// }

// // Function to confirm the order
// function confirmOrder() {
//   const address = document.getElementById('address').value.trim();
//   const mobile = document.getElementById('mobile').value.trim();
//   const payment = document.getElementById('payment').value.trim();

//   if (!address || !mobile || !payment) {
//     alert('Please fill all the details.');
//     return;
//   }

//   // Simulate order processing
//   document.getElementById('order-form').style.display = 'none';
//   document.getElementById('loader').style.display = 'block';

//   setTimeout(() => {
//     document.getElementById('loader').style.display = 'none';
//     document.getElementById('confirmation').style.display = 'block';

//     // Clear the checkout session data
//     sessionStorage.removeItem('checkoutItems');
//   }, 3000);
// }

// document.addEventListener('DOMContentLoaded', () => {
//   displayCheckoutItems();

//   // Confirm order button event
//   document.getElementById('confirm-order-btn').addEventListener('click', confirmOrder);

//   // Go back to the homepage
//   document.getElementById('go-home-btn').addEventListener('click', () => {
//     window.location.href = 'index.html'; // Redirect to homepage
//   });
// });

// // Function to display checkout items
// function displayCheckoutItems() {
//   const checkoutList = document.getElementById('checkout-list');
//   const checkoutItems = JSON.parse(sessionStorage.getItem('checkoutItems')) || [];

//   if (!checkoutItems.length) {
//     checkoutList.innerHTML = '<p class="text-warning text-center">No items to checkout.</p>';
//     return;
//   }

//   // Calculate total price
//   let totalPrice = 0;

//   checkoutList.innerHTML = checkoutItems.map(item => {
//     totalPrice += item.productPrice * item.quantity;
//     return `
//       <div class="checkout-item row">
//         <div class="checkout-item-image col-md-2">
//           <img src="${item.productImage || 'placeholder.jpg'}" alt="${item.productName || 'Unnamed Product'}" class="checkout-item-img">
//         </div>
//         <div class="checkout-item-info col-md-10">
//           <h4 class="checkout-item-name">${item.productName || 'Unnamed Product'}</h4>
//           <p class="checkout-item-price">Price: ₹${item.productPrice || '0'}</p>
//           <p class="checkout-item-quantity">Quantity: ${item.quantity || 1}</p>
//         </div>
//       </div>
//     `;
//   }).join('');

//   // Update total price
//   document.getElementById('total-price').innerText = totalPrice;
// }

// // Function to confirm the order
// function confirmOrder() {
//   const address = document.getElementById('address').value.trim();
//   const mobile = document.getElementById('mobile').value.trim();
//   const payment = document.getElementById('payment').value.trim();

//   if (!address || !mobile || !payment) {
//     alert('Please fill all the details.');
//     return;
//   }

//   // Simulate order processing
//   document.getElementById('order-form').style.display = 'none';
//   document.getElementById('loader').style.display = 'block';

//   setTimeout(() => {
//     document.getElementById('loader').style.display = 'none';
//     document.getElementById('confirmation').style.display = 'block';

//     // Clear the checkout session data
//     sessionStorage.removeItem('checkoutItems');
//   }, 3000);
// }

document.addEventListener('DOMContentLoaded', () => {
  displayCheckoutItems();

  // Confirm order button event
  document.getElementById('confirm-order-btn').addEventListener('click', confirmOrder);

  // Payment method change event
  document.getElementById('payment-method').addEventListener('change', handlePaymentMethodChange);

  // Go back to the homepage
  document.getElementById('go-home-btn').addEventListener('click', () => {
    window.location.href = 'index.html'; // Redirect to homepage
  });
});

// Function to handle payment method change
function handlePaymentMethodChange() {
  const paymentMethod = document.getElementById('payment-method').value;

  // Hide all payment details sections initially
  document.getElementById('card-details').style.display = 'none';
  document.getElementById('upi-details').style.display = 'none';

  // Show relevant payment details based on selected method
  if (paymentMethod === 'credit-card') {
    document.getElementById('card-details').style.display = 'block';
  } else if (paymentMethod === 'upi') {
    document.getElementById('upi-details').style.display = 'block';
  }
}

// Function to display checkout items
function displayCheckoutItems() {
  const checkoutList = document.getElementById('checkout-list');
  const checkoutItems = JSON.parse(sessionStorage.getItem('checkoutItems')) || [];

  if (!checkoutItems.length) {
    checkoutList.innerHTML = '<p class="text-warning text-center">No items to checkout.</p>';
    return;
  }

  // Calculate total price
  let totalPrice = 0;

  checkoutList.innerHTML = checkoutItems.map(item => {
    totalPrice += item.productPrice * item.quantity;
    return `
      <div class="checkout-item row">
        <div class="checkout-item-image col-md-2">
          <img src="${item.productImage || 'placeholder.jpg'}" alt="${item.productName || 'Unnamed Product'}" class="checkout-item-img">
        </div>
        <div class="checkout-item-info col-md-10">
          <h4 class="checkout-item-name">${item.productName || 'Unnamed Product'}</h4>
          <p class="checkout-item-price">Price: ₹${item.productPrice || '0'}</p>
          <p class="checkout-item-quantity">Quantity: ${item.quantity || 1}</p>
        </div>
      </div>
    `;
  }).join('');

  // Update total price
  document.getElementById('total-price').innerText = totalPrice;
}

// Function to confirm the order
function confirmOrder() {
  const address = document.getElementById('address').value.trim();
  const mobile = document.getElementById('mobile').value.trim();
  const paymentMethod = document.getElementById('payment-method').value;
  let paymentDetails = '';

  if (!address || !mobile || !paymentMethod) {
    alert('Please fill all the details.');
    return;
  }

  // Get the payment details based on the selected method
  if (paymentMethod === 'credit-card') {
    const cardNumber = document.getElementById('card-number').value.trim();
    const expiryDate = document.getElementById('expiry-date').value.trim();
    const cvv = document.getElementById('cvv').value.trim();
    if (!cardNumber || !expiryDate || !cvv) {
      alert('Please provide valid card details.');
      return;
    }
    paymentDetails = `Card Number: ${cardNumber}, Expiry Date: ${expiryDate}, CVV: ${cvv}`;
  } else if (paymentMethod === 'upi') {
    const upiId = document.getElementById('upi-id').value.trim();
    if (!upiId) {
      alert('Please provide your UPI ID.');
      return;
    }
    paymentDetails = `UPI ID: ${upiId}`;
  } else if (paymentMethod === 'cod') {
    paymentDetails = 'Cash on Delivery';
  }

  // Simulate order processing
  document.getElementById('order-form').style.display = 'none';
  document.getElementById('loader').style.display = 'block';

  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';

    // Log payment details (just for confirmation)
    console.log(`Order confirmed with payment method: ${paymentMethod}`);
    console.log(`Payment Details: ${paymentDetails}`);

    // Clear the checkout session data
    sessionStorage.removeItem('checkoutItems');
  }, 3000);
}
