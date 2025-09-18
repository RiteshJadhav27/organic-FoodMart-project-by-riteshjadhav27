package signup;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

import database.DatabaseConnection;

public class SignUp {

    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.println("Welcome to Organic FoodMart - Sign Up");

            // Get user input
            System.out.print("Enter Full Name: ");
            String name = scanner.nextLine();

            System.out.print("Enter Email: ");
            String email = scanner.nextLine();

            System.out.print("Enter Password: ");
            String password = scanner.nextLine();

            // Insert user into the database
            Connection connection = DatabaseConnection.getConnection();
            if (connection != null) {
                // Change the query to INSERT instead of SELECT
                String sql = "INSERT INTO \"user\" (\"name\", \"email\", \"password\") VALUES (?, ?, ?)";

                try (PreparedStatement statement = connection.prepareStatement(sql)) {
                    // Set the values for the placeholders
                    statement.setString(1, name);      // full_name
                    statement.setString(2, email);     // email
                    statement.setString(3, password);  // password

                    // Execute the query to insert data
                    int rowsInserted = statement.executeUpdate();
                    if (rowsInserted > 0) {
                        System.out.println("Sign-Up successful!");
                    } else {
                        System.out.println("Sign-Up failed. Please try again.");
                    }
                } catch (SQLException e) {
                    System.out.println("Error during SQL operation: " + e.getMessage());
                } finally {
                    connection.close();  // Make sure to close the connection
                }
            }
        } catch (SQLException e) {
            System.out.println("Database error: " + e.getMessage());
        }
    }
}
