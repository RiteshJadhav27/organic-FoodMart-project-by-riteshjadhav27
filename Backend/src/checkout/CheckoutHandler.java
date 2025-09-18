package checkout;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.google.gson.*;

import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;

public class CheckoutHandler implements HttpHandler {

    @Override
    public void handle(HttpExchange exchange) throws IOException {
        // Set CORS headers for all responses
        exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        exchange.getResponseHeaders().add("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        exchange.getResponseHeaders().add("Access-Control-Allow-Headers", "Content-Type");

        if ("OPTIONS".equals(exchange.getRequestMethod())) {
            // Handle preflight requests for CORS
            exchange.sendResponseHeaders(204, -1); // No Content
            return;
        }

        String response;
        if ("POST".equals(exchange.getRequestMethod())) {
            // Process order details from the request
            try (InputStreamReader isr = new InputStreamReader(exchange.getRequestBody(), "utf-8")) {
                JsonObject orderDetails = JsonParser.parseReader(isr).getAsJsonObject();

                // Extract fields from JSON
                String name = orderDetails.get("name").getAsString();
                String address = orderDetails.get("address").getAsString();
                String phone = orderDetails.get("phone").getAsString();
                String paymentMethod = orderDetails.get("paymentMethod").getAsString();

                // Process the order (e.g., save to database, log, etc.)
                System.out.println("Order Received:");
                System.out.println("Name: " + name);
                System.out.println("Address: " + address);
                System.out.println("Phone: " + phone);
                System.out.println("Payment Method: " + paymentMethod);

                // Success response
                response = "{\"message\":\"Order placed successfully.\"}";
                exchange.getResponseHeaders().add("Content-Type", "application/json; charset=utf-8");
                exchange.sendResponseHeaders(200, response.getBytes().length);
            } catch (JsonSyntaxException e) {
                // Handle JSON parsing errors
                response = "{\"error\":\"Invalid JSON format.\"}";
                exchange.getResponseHeaders().add("Content-Type", "application/json; charset=utf-8");
                exchange.sendResponseHeaders(400, response.getBytes().length);
            }
        } else if ("GET".equals(exchange.getRequestMethod())) {
            // Example GET response (you can modify this to return checkout data)
            response = "{\"message\":\"Checkout handler is working!\"}";
            exchange.getResponseHeaders().add("Content-Type", "application/json; charset=utf-8");
            exchange.sendResponseHeaders(200, response.getBytes().length);
        } else {
            // Method not allowed
            response = "{\"error\":\"Method not allowed.\"}";
            exchange.getResponseHeaders().add("Content-Type", "application/json; charset=utf-8");
            exchange.sendResponseHeaders(405, response.getBytes().length);
        }

        // Send the response
        try (OutputStream os = exchange.getResponseBody()) {
            os.write(response.getBytes());
        }
    }
}
