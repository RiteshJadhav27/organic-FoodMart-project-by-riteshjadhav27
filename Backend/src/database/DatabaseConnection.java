package database;  // Ensure it's in the correct package

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {

    private static final String URL = "jdbc:postgresql://localhost:5432/organic_foodmart";  // Replace with your database URL
    private static final String USER = "postgres";  // Replace with your username
    private static final String PASSWORD = "admin123";  // Replace with your password

    public static Connection getConnection() throws SQLException {
        try {
            // Load PostgreSQL driver (optional for modern JDBC)
            Class.forName("org.postgresql.Driver");
            return DriverManager.getConnection(URL, USER, PASSWORD);
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
            throw new SQLException("Failed to connect to the database.");
        }
    }
}
