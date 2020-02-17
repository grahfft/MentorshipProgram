package CharacterCreator.repositories.InMemoryRepositories;

import CharacterCreator.RaceModels.Race;
import CharacterCreator.RaceModels.Subrace;
import CharacterCreator.repositories.Interfaces.IRaceRepository;
import org.springframework.stereotype.Repository;

import java.io.IOException;
import java.util.*;

@Repository
public class RaceRepository extends InMemoryRepository implements IRaceRepository {

    private Map<String, Race> races;
    private Map<String, List<Subrace>> subRaces;

    public RaceRepository() throws IOException {
        this.races = new Hashtable<>();
        this.subRaces = new Hashtable<>();
        this.loadFromFile();
    }

    public List<Race> getRacesFromDatabase() {
        return new ArrayList<>(this.races.values());
    }

    public List<Subrace> getSubracesFromDatabase(String raceName) { return this.subRaces.get(raceName); }

    private void loadFromFile() throws IOException {
        String racesFromFile = this.readFromFile("Races.json");
        List<Race> convertedRaces = Arrays.asList(this.objectMapper.readValue(racesFromFile, Race[].class));

        for(Race race: convertedRaces) {
            this.races.put(race.getName(), race);
            this.subRaces.put(race.getName(), new ArrayList<>());
        }

        String subracesFromFile = this.readFromFile("Subraces.json");
        List<Subrace> convertedSubraces = Arrays.asList(this.objectMapper.readValue(subracesFromFile, Subrace[].class));

        for(Subrace subrace: convertedSubraces) {
            List<Subrace> currentSubraces = this.subRaces.get(subrace.getMainRace());
            currentSubraces.add(subrace);
        }
    }
}
