
import com.google.gson.Gson;

public class GsonTest {

    public static void main(String[] args) {
        Gson gson = new Gson();
        String json = gson.toJson(new int[]{1, 2, 3});
        System.out.println("JSON: " + json);
    }
}
