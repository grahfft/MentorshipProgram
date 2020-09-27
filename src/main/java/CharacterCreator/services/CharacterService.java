package CharacterCreator.services;

import CharacterCreator.models.CharacterModels.Character;
import CharacterCreator.models.ClassModels.CharacterClass;
import CharacterCreator.models.RaceModels.Race;
import CharacterCreator.repositories.InMemoryRepositories.CharacterRepository;
import CharacterCreator.repositories.Interfaces.ICharacterRepository;
import com.sun.tools.javac.comp.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class CharacterService {

    ICharacterRepository characterRepository;

    private static final List<Character> characters = new ArrayList<>();
    private static int idCounter = 0;

    static {
        characters.add(new Character(++idCounter, "Bill", new CharacterClass("Fighter"), new Race("Half-Orc"),3));
        characters.add(new Character(++idCounter, "Ted", new CharacterClass("Bard"), new Race("Elf"), 6));
        characters.add(new Character(++idCounter, "Mary", new CharacterClass("Sorcerer"), new Race("Human"), 1));
        characters.add(new Character(++idCounter, "Phyllis", new CharacterClass("Cleric"), new Race("Half-Elf"), 2));
    }

    @Autowired
    public CharacterService(ICharacterRepository characterRepository) {
        this.characterRepository = characterRepository;
    }

    public List<Character> GetAllCharacters() {
//        return this.characterRepository.getAllCharactersFromDatabase();
        return characters;
    }

    public Character GetCharacter(int uuid) {
        for(Character character: characters) {
            if(character.getUuid() == uuid) return character;
        }
        return null;
//        return this.characterRepository.getCharacterFromDatabase(uuid);
    }

    public Character CreateCharacter(Character character) {
//        character.setUuid(this.getRandomUuid());

        //TODO spin up new thread to save
        this.characterRepository.saveCharacterToDatabase(character);
        return character;
    }

    public void UpdateCharacter(Character character) {
        // TODO spin up new thread to save character
        this.characterRepository.saveCharacterToDatabase(character);
    }

    public void DeleteCharacter(int uuid) {
        // TODO spin up new thread to delete character
        Character character = GetCharacter(uuid);
        if(character != null) characters.remove(character);
//        this.characterRepository.deleteCharacterFromDatabase(uuid);
    }

    protected String getRandomUuid() {
        return UUID.randomUUID().toString().replace("-", "");
    }
}
