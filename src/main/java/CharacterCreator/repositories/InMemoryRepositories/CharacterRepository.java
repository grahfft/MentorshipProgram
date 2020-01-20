package CharacterCreator.repositories.InMemoryRepositories;

import CharacterCreator.models.CharacterModels.Character;
import CharacterCreator.repositories.Interfaces.ICharacterRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;

@Repository
public class CharacterRepository implements ICharacterRepository {
    private Map<String, Character> SavedCharacters;

    public CharacterRepository() {
        this.SavedCharacters = new Hashtable<>();
    }

    public void saveCharacterToDatabase(Character character) {
        this.SavedCharacters.put(character.getUuid(), character);
    }

    public List<Character> getAllCharactersFromDatabase() {
        return new ArrayList<>(this.SavedCharacters.values());
    }

    public Character getCharacterFromDatabase(String uuid) {
        return this.SavedCharacters.get(uuid);
    }

    public void deleteCharacterFromDatabase(String uuid) {
        this.SavedCharacters.remove(uuid);
    }
}
