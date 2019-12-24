package CharacterCreator.repositories;

import CharacterCreator.models.Character;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;

@Repository
public class CharacterRepository {
    private Map<String, Character> SavedCharacters;

    public CharacterRepository() {
        this.SavedCharacters = new Hashtable<>();
    }

    public void saveCharacter(Character character) {
        this.SavedCharacters.put(character.getUuid(), character);
    }

    public List<Character> getAllCharacters() {
        return new ArrayList<>(this.SavedCharacters.values());
    }

    public Character getCharacter(String uuid) {
        return this.SavedCharacters.get(uuid);
    }

    public void deleteCharacter(String uuid) {
        this.SavedCharacters.remove(uuid);
    }
}
