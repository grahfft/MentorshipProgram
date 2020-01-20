package CharacterCreator.repositories.InMemoryRepositories;

import CharacterCreator.models.Race;
import CharacterCreator.repositories.Interfaces.IRaceRepository;
import org.springframework.stereotype.Repository;

import java.io.IOException;
import java.util.*;

@Repository
public class RaceRepository extends InMemoryRepository implements IRaceRepository {

    private Map<String, Race> races;

    public RaceRepository() throws IOException {
        this.races = new Hashtable<>();
        this.loadFromFile();
    }

    public List<Race> getRacesFromDatabase() {
        return new ArrayList<>(this.races.values());
    }

    private void loadFromFile() throws IOException {
        String racesFromFile = this.readFromFile("Races.json");
        List<Race> convertedRaces = Arrays.asList(this.objectMapper.readValue(racesFromFile, Race[].class));

        for(Race race: convertedRaces) {
            this.races.put(race.getName(), race);
        }
    }
}
