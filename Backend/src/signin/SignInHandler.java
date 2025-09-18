package signin;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import database.DatabaseConnection;

import java.io.*;
import java.net.*;
import java.sql.*;

public class SignInHandler implements HttpHandler {

    @Override
    public void handle(HttpExchange exchange) throws IOException {
        if ("POST".equals(exchange.getRequestMethod())) {
            InputStream inputStream = exchange.getRequestBody();
            String requestBody = new String(inputStream.readAllBytes(), "UTF-8");

            // URL-decode the email and password
            String email = null;
            String password = null;

            String[] params = requestBody.split("&");
            for (String param : params) {
                if (param.startsWith("email=")) {
                    email = URLDecoder.decode(param.split("=")[1], "UTF-8");
                } else if (param.startsWith("password=")) {
                    password = URLDecoder.decode(param.split("=")[1], "UTF-8");
                }
            }

            String responseMessage = "{\"status\":\"failure\"}";  // Default response for failure

            // Query database for matching email and password
            try (Connection conn = DatabaseConnection.getConnection()) {
                if (conn == null) {
                    responseMessage = "{\"status\":\"error\", \"message\":\"Database connection failed\"}";
                    System.out.println("Database connection failed.");
                    exchange.getResponseHeaders().set("Content-Type", "application/json");
                    exchange.sendResponseHeaders(500, responseMessage.getBytes().length);
                    OutputStream os = exchange.getResponseBody();
                    os.write(responseMessage.getBytes());
                    os.close();
                    return;
                }
                System.out.println("Database connection established.");
                String sql = "SELECT * FROM \"user\" WHERE \"email\" = ? AND \"password\" = ?";
                try (PreparedStatement stmt = conn.prepareStatement(sql)) {
                    stmt.setString(1, email);
                    stmt.setString(2, password);

                    try (ResultSet rs = stmt.executeQuery()) {
                        if (rs.next()) {
                            System.out.println("User found, sign-in successful.");
                            responseMessage = "{\"status\":\"success\"}";  // Credentials match
                        } else {
                            System.out.println("No matching user found.");
                        }
                    }
                }
            } catch (SQLException e) {
                e.printStackTrace();
                responseMessage = "{\"status\":\"error\", \"message\":\"Database error\"}";  // If DB error occurs
            }

            // Send response to client
            exchange.getResponseHeaders().set("Content-Type", "application/json");
            exchange.sendResponseHeaders(200, responseMessage.getBytes().length);
            OutputStream os = exchange.getResponseBody();
            os.write(responseMessage.getBytes());
            os.close();
        } else {
            // Handle other HTTP methods (e.g., GET)
            String responseMessage = "{\"status\":\"failure\", \"message\":\"Invalid request method\"}";
            exchange.getResponseHeaders().set("Content-Type", "application/json");
            exchange.sendResponseHeaders(405, responseMessage.getBytes().length);  // 405 Method Not Allowed
            OutputStream os = exchange.getResponseBody();
            os.write(responseMessage.getBytes());
            os.close();
        }
    }
}
