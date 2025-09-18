
import checkout.CheckoutHandler;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;
import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.file.Files;
import product.ProductHandler;
import signin.SignInHandler;
import signup.SignUpHandler;

public class HttpServerExample {

    public static void main(String[] args) {
        try {
            HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);

            // Register handlers for other routes
            server.createContext("/signup", new SignUpHandler());
            server.createContext("/signin", new SignInHandler());

            // Register handlers for various routes with CORS
            server.createContext("/product", new CORSHandler(new ProductHandler()));  // Register products endpoint
            //server.createContext("/cart", new CORSHandler(new CartHandler()));  // Cart endpoint

            // Register handler for homepage
            server.createContext("/", new HomeHandler());  // Serve homepage at root URL

            // Checkout route
            server.createContext("/checkout", new CORSHandler(new CheckoutHandler()));  // Register checkout endpoint

            // Serve static files from the "Frontend" directory
            server.createContext("/static", new StaticFileHandler("C:\\Users\\Ritesh\\Documents\\Project_plan\\organic-1.0.0\\Frontend"));

            // Add the profile handler here
            // Start the server
            server.setExecutor(null); // Default executor
            server.start();
            System.out.println("Server started on http://localhost:8080");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Handler for the / route to serve the homepage
    static class HomeHandler implements HttpHandler {

        @Override
        public void handle(HttpExchange exchange) throws IOException {
            // Ensure this handler only processes requests for "/"
            if (!exchange.getRequestURI().getPath().equals("/")) {
                String errorMessage = "404 Not Found";
                exchange.sendResponseHeaders(404, errorMessage.getBytes().length);
                OutputStream os = exchange.getResponseBody();
                os.write(errorMessage.getBytes());
                os.close();
                return;
            }

            // Path to your index.html file
            File file = new File("C:\\Users\\Ritesh\\Documents\\Project_plan\\organic-1.0.0\\Frontend\\index.html");

            if (!file.exists()) {
                String errorMessage = "404 Not Found";
                exchange.sendResponseHeaders(404, errorMessage.getBytes().length);
                OutputStream os = exchange.getResponseBody();
                os.write(errorMessage.getBytes());
                os.close();
                return;
            }

            byte[] fileBytes = Files.readAllBytes(file.toPath());

            // Set response headers and send file content
            exchange.sendResponseHeaders(200, fileBytes.length);
            OutputStream os = exchange.getResponseBody();
            os.write(fileBytes);
            os.close();
        }
    }

    // Middleware-like CORS handler to wrap other handlers
    static class CORSHandler implements HttpHandler {

        private final HttpHandler wrappedHandler;

        public CORSHandler(HttpHandler handler) {
            this.wrappedHandler = handler;
        }

        @Override
        public void handle(HttpExchange exchange) throws IOException {
            sendCORSHeaders(exchange);

            // Handle preflight OPTIONS requests for CORS
            if ("OPTIONS".equals(exchange.getRequestMethod())) {
                exchange.sendResponseHeaders(200, -1);
                return;
            }

            // Pass the request to the actual handler
            wrappedHandler.handle(exchange);
        }
    }

    // In HttpServerExample.java
// Handler to serve static files
    static class StaticFileHandler implements HttpHandler {

        private final String basePath;

        public StaticFileHandler(String basePath) {
            this.basePath = basePath;
        }

        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String requestPath = exchange.getRequestURI().getPath().replaceFirst("/static", "");

            // Adjust the path to refer to your Frontend directory from the Backend
            File file = new File(basePath, requestPath);

            if (!file.exists() || file.isDirectory()) {
                String errorMessage = "404 Not Found";
                exchange.sendResponseHeaders(404, errorMessage.getBytes().length);
                OutputStream os = exchange.getResponseBody();
                os.write(errorMessage.getBytes());
                os.close();
                return;
            }

            byte[] fileBytes = Files.readAllBytes(file.toPath());

            // Set MIME type based on the file extension
            String mimeType = Files.probeContentType(file.toPath());
            if (mimeType == null) {
                mimeType = "application/octet-stream";
            }

            exchange.getResponseHeaders().add("Content-Type", mimeType);
            exchange.sendResponseHeaders(200, fileBytes.length);
            OutputStream os = exchange.getResponseBody();
            os.write(fileBytes);
            os.close();
        }
    }

    // Helper method to add CORS headers
    private static void sendCORSHeaders(HttpExchange exchange) {
        exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        exchange.getResponseHeaders().add("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        exchange.getResponseHeaders().add("Access-Control-Allow-Headers", "Content-Type");
    }
}
