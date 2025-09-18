document.addEventListener("DOMContentLoaded", () => {
    const orderDetails = JSON.parse(localStorage.getItem("orderDetails"));
  
    if (!orderDetails) {
      alert("No order details found. Redirecting to homepage.");
      window.location.href = "index.html";
      return;
    }
  
    // Display order number
    const orderNumberEl = document.createElement("h5");
    orderNumberEl.innerText = `Order Number: ${orderDetails.orderNumber}`;
    document.querySelector(".container").insertBefore(orderNumberEl, document.querySelector(".alert"));
  
    // Display cart items
    const orderList = document.getElementById("orderConfirmationList");
    orderDetails.cartItems.forEach(item => {
      const listItem = document.createElement("li");
      listItem.className = "list-group-item d-flex justify-content-between align-items-center";
      listItem.innerText = item.name;
      const priceSpan = document.createElement("span");
      priceSpan.className = "badge bg-primary rounded-pill";
      priceSpan.innerText = `$${item.price.toFixed(2)}`;
      listItem.appendChild(priceSpan);
      orderList.appendChild(listItem);
    });
  
    // Display total amount
    document.getElementById("orderConfirmationTotal").innerText = orderDetails.totalAmount.toFixed(2);
  
    // Clear cart after confirmation
    localStorage.removeItem("cartItems");
  });
  