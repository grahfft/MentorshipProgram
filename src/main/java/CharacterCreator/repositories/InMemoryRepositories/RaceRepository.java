package CharacterCreator.repositories.InMemoryRepositories;

import CharacterCreator.models.Race;
import CharacterCreator.repositories.Interfaces.IRaceRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;

@Repository
public class RaceRepository implements IRaceRepository {

    private Map<String, Race> races;

    public RaceRepository() {
        this.races = new Hashtable<>();
    }

    public List<Race> getRacesFromDatabase() {
        return new ArrayList<>(this.races.values());
    }
}
