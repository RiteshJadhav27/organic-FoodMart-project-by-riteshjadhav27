package carta;

import java.util.ArrayList;
import java.util.List;

public class Cart {

    private final List<CartItem> items = new ArrayList<>();

    public List<CartItem> getItems() {
        return items;
    }

    public void addItem(CartItem item) {
        // Check if the item is already in the cart
        for (CartItem cartItem : items) {
            if (cartItem.getId().equals(item.getId())) { // Compare by ID
                // Optionally, update quantity if you allow quantity in the cart
                cartItem.setQuantity(cartItem.getQuantity() + item.getQuantity());
                return; // Item already exists, no need to add it again
            }
        }
        items.add(item); // Add new item if it doesn't exist already
    }

    public void removeItem(String itemId) {
        items.removeIf(item -> item.getId().equals(itemId));  // Remove item by product ID
    }

    public void clearCart() {
        items.clear();  // Clears all items from the cart
    }

    public double getTotal() {
        double total = 0.0;
        for (CartItem item : items) {
            total += item.getPrice() * item.getQuantity();  // Assuming CartItem has getPrice() and getQuantity() methods
        }
        return total;
    }
}
