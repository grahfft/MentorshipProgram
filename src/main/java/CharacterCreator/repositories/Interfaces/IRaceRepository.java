package CharacterCreator.repositories.Interfaces;

import CharacterCreator.RaceModels.Race;
import java.util.List;

public interface IRaceRepository {
    List<Race> getRacesFromDatabase();
}
