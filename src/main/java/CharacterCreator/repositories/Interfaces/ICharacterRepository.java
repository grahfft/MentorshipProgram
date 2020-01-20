package CharacterCreator.repositories.Interfaces;

import CharacterCreator.models.CharacterModels.Character;
import java.util.List;

public interface ICharacterRepository {
    void saveCharacterToDatabase(Character character);
    List<Character> getAllCharactersFromDatabase();
    Character getCharacterFromDatabase(String uuid);
    void deleteCharacterFromDatabase(String uuid);
}
