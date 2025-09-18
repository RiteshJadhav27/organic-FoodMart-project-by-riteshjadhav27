package carta;

import com.google.gson.Gson;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;

public class CartHandler implements HttpHandler {

    private static final Cart cart = new Cart(); // Use the Cart class to manage cart items
    private final Gson gson = new Gson();

    @Override
    public void handle(HttpExchange exchange) throws IOException {
        try {
            // Set CORS headers
            exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
            exchange.getResponseHeaders().add("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
            exchange.getResponseHeaders().add("Access-Control-Allow-Headers", "Content-Type");

            if ("OPTIONS".equalsIgnoreCase(exchange.getRequestMethod())) {
                // Respond to preflight requests
                exchange.sendResponseHeaders(204, -1);
                return;
            }

            String response;
            if ("GET".equalsIgnoreCase(exchange.getRequestMethod())) {
                // Return cart items as JSON
                response = gson.toJson(cart.getItems());
                sendResponse(exchange, 200, response);
            } else if ("POST".equalsIgnoreCase(exchange.getRequestMethod())) {
                // Add item to cart
                try (InputStream is = exchange.getRequestBody()) {
                    String body = new String(is.readAllBytes(), StandardCharsets.UTF_8);
                    CartItem item = gson.fromJson(body, CartItem.class);
                    cart.addItem(item); // Add the product to the cart

                    // Return the updated cart as a response
                    response = gson.toJson(cart.getItems());
                    sendResponse(exchange, 200, response);
                } catch (Exception e) {
                    response = "{\"error\":\"Invalid JSON format\"}";
                    sendResponse(exchange, 400, response);
                }
            } else {
                response = "{\"error\":\"Method Not Allowed\"}";
                sendResponse(exchange, 405, response);
            }
        } catch (Exception e) {
            String response = "{\"error\":\"Internal Server Error\"}";
            sendResponse(exchange, 500, response);
        }
    }

    private void sendResponse(HttpExchange exchange, int statusCode, String response) throws IOException {
        exchange.getResponseHeaders().add("Content-Type", "application/json");
        exchange.sendResponseHeaders(statusCode, response.getBytes(StandardCharsets.UTF_8).length);
        try (OutputStream os = exchange.getResponseBody()) {
            os.write(response.getBytes(StandardCharsets.UTF_8));
        }
    }
}
