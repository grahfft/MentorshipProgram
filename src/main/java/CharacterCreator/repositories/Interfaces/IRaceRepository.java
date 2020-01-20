package CharacterCreator.repositories.Interfaces;

import CharacterCreator.models.Race;
import java.util.List;

public interface IRaceRepository {
    List<Race> getRacesFromDatabase();
}
