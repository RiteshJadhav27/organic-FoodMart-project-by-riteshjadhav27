package signin;

import database.DatabaseConnection;
// Source code is decompiled from a .class file using FernFlower decompiler.
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

public class SignIn {

    public SignIn() {
    }

    public static void main(String[] var0) throws SQLException {
        Scanner var1 = new Scanner(System.in);

        try {
            System.out.println("Welcome to Organic FoodMart - Sign In");
            System.out.print("Enter Email: ");
            String var2 = var1.nextLine();
            System.out.print("Enter Password: ");
            String var3 = var1.nextLine();
            Connection var4 = DatabaseConnection.getConnection();
            if (var4 != null) {
                String var5 = "SELECT \"name\", \"email\" FROM \"user\" WHERE \"email\" = ? AND \"password\" = ?";

                try {
                    PreparedStatement var6 = var4.prepareStatement(var5);

                    try {
                        var6.setString(1, var2);
                        var6.setString(2, var3);
                        ResultSet var7 = var6.executeQuery();

                        try {
                            if (var7.next()) {
                                String var8 = var7.getString("name");
                                String var9 = var7.getString("email");
                                System.out.println("Sign-In successful! Welcome, " + var8 + "!");
                                System.out.println("Your registered email is: " + var9);
                            } else {
                                System.out.println("Invalid email or password. Please try again.");
                            }
                        } catch (Throwable var27) {
                            if (var7 != null) {
                                try {
                                    var7.close();
                                } catch (Throwable var26) {
                                    var27.addSuppressed(var26);
                                }
                            }

                            throw var27;
                        }

                        if (var7 != null) {
                            var7.close();
                        }
                    } catch (Throwable var28) {
                        if (var6 != null) {
                            try {
                                var6.close();
                            } catch (Throwable var25) {
                                var28.addSuppressed(var25);
                            }
                        }

                        throw var28;
                    }

                    if (var6 != null) {
                        var6.close();
                    }
                } catch (SQLException var29) {
                    System.out.println("Error during SQL operation: " + var29.getMessage());
                } finally {
                    try {
                        var4.close();
                    } catch (SQLException var24) {
                        System.out.println("Error closing connection: " + var24.getMessage());
                    }

                }
            }
        } catch (Throwable var31) {
            try {
                var1.close();
            } catch (Throwable var23) {
                var31.addSuppressed(var23);
            }

            throw var31;
        }

        var1.close();
    }
}
