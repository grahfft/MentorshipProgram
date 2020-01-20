package CharacterCreator.services;

import CharacterCreator.models.CharacterModels.Character;
import CharacterCreator.repositories.InMemoryRepositories.CharacterRepository;
import CharacterCreator.repositories.Interfaces.ICharacterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CharacterService {

    ICharacterRepository characterRepository;

    @Autowired
    public CharacterService(ICharacterRepository characterRepository) {
        this.characterRepository = characterRepository;
    }

    public List<Character> GetAllCharacters() {
        return this.characterRepository.getAllCharactersFromDatabase();
    }

    public Character GetCharacter(String uuid) {
        return this.characterRepository.getCharacterFromDatabase(uuid);
    }

    public Character CreateCharacter(Character character) {
        character.setUuid(this.getRandomUuid());

        //TODO spin up new thread to save
        this.characterRepository.saveCharacterToDatabase(character);
        return character;
    }

    public void UpdateCharacter(Character character) {
        // TODO spin up new thread to save character
        this.characterRepository.saveCharacterToDatabase(character);
    }

    public void DeleteCharacter(String uuid) {
        // TODO spin up new thread to delete character
        this.characterRepository.deleteCharacterFromDatabase(uuid);
    }

    protected String getRandomUuid() {
        return UUID.randomUUID().toString().replace("-", "");
    }
}
