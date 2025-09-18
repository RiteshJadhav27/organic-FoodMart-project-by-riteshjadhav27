package product;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import database.DatabaseConnection;
import java.io.*;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;  // Import the DatabaseConnection class

public class ProductHandler implements HttpHandler {

    @Override
    public void handle(HttpExchange exchange) throws IOException {
        String response = fetchProductsFromDatabase(); // Get products from DB
        exchange.getResponseHeaders().set("Content-Type", "application/json");
        exchange.sendResponseHeaders(200, response.getBytes().length); // HTTP status code 200 for success
        OutputStream os = exchange.getResponseBody();
        os.write(response.getBytes());
        os.close();
    }

    private String fetchProductsFromDatabase() {
        List<Product> productList = new ArrayList<>();
        try (Connection conn = DatabaseConnection.getConnection(); // Ensure connection is properly closed
                 Statement stmt = conn.createStatement()) {

            // Step 2: Execute SQL Query to fetch products
            String query = "SELECT * FROM product"; // Adjust your query if needed
            ResultSet rs = stmt.executeQuery(query);

            // Step 3: Convert result into a list of Product objects
            while (rs.next()) {
                int id = rs.getInt("product_id");
                String name = rs.getString("name");
                double price = rs.getDouble("price");
                String imagePath = rs.getString("image_path");
                productList.add(new Product(id, name, price, imagePath));
            }

            // Step 4: Convert List to JSON
            StringBuilder jsonResponse = new StringBuilder();
            jsonResponse.append("[");
            for (int i = 0; i < productList.size(); i++) {
                Product product = productList.get(i);
                jsonResponse.append("{");
                jsonResponse.append("\"product_id\":").append(product.getId()).append(",");
                jsonResponse.append("\"name\":\"").append(product.getName()).append("\",");
                jsonResponse.append("\"price\":").append(product.getPrice()).append(",");
                jsonResponse.append("\"image_path\":\"").append(product.getImagePath()).append("\"");
                jsonResponse.append("}");

                if (i < productList.size() - 1) {
                    jsonResponse.append(",");
                }
            }
            jsonResponse.append("]");

            return jsonResponse.toString();
        } catch (SQLException e) {
            e.printStackTrace();
            return "{\"error\":\"Failed to fetch products from the database.\"}";
        }
    }
}
