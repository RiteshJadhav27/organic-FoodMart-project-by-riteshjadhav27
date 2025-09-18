package carta;

public class CartItem {

    private String id;
    private String name;
    private double price;
    private String imagePath;
    private int quantity;

    // Constructor for easy creation of CartItem objects
    public CartItem(String id, String name, double price, String imagePath, int quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.imagePath = imagePath;
        this.quantity = quantity;
    }

    // Getters and setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        if (price >= 0) {
            this.price = price;
        } else {
            throw new IllegalArgumentException("Price cannot be negative");
        }
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        if (quantity > 0) {
            this.quantity = quantity;
        } else {
            throw new IllegalArgumentException("Quantity must be positive");
        }
    }

    // Override toString() for better debugging
    @Override
    public String toString() {
        return "CartItem{id='" + id + "', name='" + name + "', price=" + price
                + ", imagePath='" + imagePath + "', quantity=" + quantity + "}";
    }
}
