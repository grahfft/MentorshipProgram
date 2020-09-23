package CharacterCreator.repositories.Interfaces;

import CharacterCreator.models.RaceModels.Race;
import java.util.List;

public interface IRaceRepository {
    List<Race> getRacesFromDatabase();
}
