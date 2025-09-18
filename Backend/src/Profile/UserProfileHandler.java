package profile;

import database.DatabaseConnection;
import com.google.gson.JsonObject;  // Use Gson's JsonObject instead of org.json
import java.sql.*;
import java.io.*;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

public class UserProfileHandler implements HttpHandler {

    @Override
    public void handle(HttpExchange exchange) throws IOException {
        String response = fetchUserProfile();
        exchange.getResponseHeaders().set("Content-Type", "application/json");
        exchange.sendResponseHeaders(200, response.getBytes().length);  // HTTP status code 200
        OutputStream os = exchange.getResponseBody();
        os.write(response.getBytes());
        os.close();
    }

    private String fetchUserProfile() {
        String query = "SELECT name, email FROM users ORDER BY id DESC LIMIT 1";  // Assuming you have a 'users' table
        JsonObject jsonResponse = new JsonObject();

        try (Connection conn = DatabaseConnection.getConnection(); Statement stmt = conn.createStatement(); ResultSet rs = stmt.executeQuery(query)) {

            if (rs.next()) {
                String name = rs.getString("name");
                String email = rs.getString("email");
                jsonResponse.addProperty("name", name);
                jsonResponse.addProperty("email", email);
            }
        } catch (SQLException e) {
            e.printStackTrace();
            jsonResponse.addProperty("error", "Failed to fetch profile data.");
        }

        return jsonResponse.toString();
    }
}
