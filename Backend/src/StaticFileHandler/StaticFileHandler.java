package StaticFileHandler;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Files;

public class StaticFileHandler implements HttpHandler {

    private final String rootDirectory;

    public StaticFileHandler(String rootDirectory) {
        this.rootDirectory = rootDirectory;
    }

    @Override
    public void handle(HttpExchange exchange) throws IOException {
        // Get the requested file path
        String requestedFile = exchange.getRequestURI().getPath();

        // Ensure it points to a file within the root directory (no directory traversal allowed)
        if (requestedFile.contains("..")) {
            sendErrorResponse(exchange, 403, "Forbidden");
            return;
        }

        // Ensure we serve the correct file from the root directory
        File file = new File(rootDirectory + requestedFile);
        if (!file.exists()) {
            sendErrorResponse(exchange, 404, "Not Found");
            return;
        }

        // Determine the content type (MIME type) based on the file extension
        String mimeType = Files.probeContentType(file.toPath());
        if (mimeType == null) {
            mimeType = "application/octet-stream";  // Default MIME type if not found
        }

        // Set response headers
        exchange.getResponseHeaders().set("Content-Type", mimeType);
        exchange.sendResponseHeaders(200, file.length());

        // Send the file content in the response
        try (FileInputStream fileStream = new FileInputStream(file); OutputStream os = exchange.getResponseBody()) {

            byte[] buffer = new byte[1024];
            int bytesRead;
            while ((bytesRead = fileStream.read(buffer)) != -1) {
                os.write(buffer, 0, bytesRead);
            }
        }
    }

    private void sendErrorResponse(HttpExchange exchange, int statusCode, String message) throws IOException {
        String responseMessage = "{\"status\":\"" + message + "\"}";
        exchange.sendResponseHeaders(statusCode, responseMessage.getBytes().length);
        try (OutputStream os = exchange.getResponseBody()) {
            os.write(responseMessage.getBytes());
        }
    }
}
