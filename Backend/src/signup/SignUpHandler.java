package signup;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import database.DatabaseConnection;
import java.io.*;
import java.net.*;
import java.sql.*;

public class SignUpHandler implements HttpHandler {

    @Override
    public void handle(HttpExchange exchange) throws IOException {
        if ("POST".equals(exchange.getRequestMethod())) {
            InputStream inputStream = exchange.getRequestBody();
            String requestBody = new String(inputStream.readAllBytes(), "UTF-8");

            // URL-decode the email, name, and password
            String name = null;
            String email = null;
            String password = null;

            String[] params = requestBody.split("&");
            for (String param : params) {
                if (param.startsWith("name=")) {
                    name = URLDecoder.decode(param.split("=")[1], "UTF-8");
                } else if (param.startsWith("email=")) {
                    email = URLDecoder.decode(param.split("=")[1], "UTF-8");
                } else if (param.startsWith("password=")) {
                    password = URLDecoder.decode(param.split("=")[1], "UTF-8");
                }
            }

            String responseMessage = "{\"status\":\"failure\"}";  // Default response for failure

            // Insert new user into database
            try (Connection conn = DatabaseConnection.getConnection()) {
                System.out.println("Database connection established.");
                String sql = "INSERT INTO \"user\" (\"name\", \"email\", \"password\") VALUES (?, ?, ?)";
                try (PreparedStatement stmt = conn.prepareStatement(sql)) {
                    stmt.setString(1, name);
                    stmt.setString(2, email);
                    stmt.setString(3, password);

                    int rowsInserted = stmt.executeUpdate();
                    if (rowsInserted > 0) {
                        System.out.println("Sign-up successful.");
                        responseMessage = "{\"status\":\"success\"}";  // Sign-up successful
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
        }
    }
}
