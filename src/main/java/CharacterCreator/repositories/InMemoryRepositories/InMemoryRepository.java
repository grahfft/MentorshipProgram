package CharacterCreator.repositories.InMemoryRepositories;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.UUID;

public abstract class InMemoryRepository {

    protected ObjectMapper objectMapper;

    public InMemoryRepository() {
        this.objectMapper = new ObjectMapper();
    }

    protected String readFromFile(String path) throws IOException {
        Resource resource = new ClassPathResource(path);
        BufferedReader br = new BufferedReader(new InputStreamReader(resource.getInputStream()),1024);
        StringBuilder stringBuilder = new StringBuilder();
        String line;
        while ((line = br.readLine()) != null) {
            stringBuilder.append(line).append('\n');
        }
        br.close();
        return stringBuilder.toString();
    }

    protected String getRandomUuid() {
        return UUID.randomUUID().toString().replace("-", "");
    }

    private void configureObjectMapper() {
        JavaTimeModule timeModule = new JavaTimeModule();
        objectMapper.registerModule(timeModule);
        objectMapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false);
    }

}
