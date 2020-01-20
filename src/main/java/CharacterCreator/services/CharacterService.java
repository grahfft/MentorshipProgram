package CharacterCreator.services;

import CharacterCreator.models.CharacterModels.Character;
import CharacterCreator.repositories.CharacterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CharacterService {

    @Autowired
    CharacterRepository characterRepository;

    public List<Character> GetAllCharacters() {
        return this.characterRepository.getAllCharacters();
    }

    public Character GetCharacter(String uuid) {
        return this.characterRepository.getCharacter(uuid);
    }

    public Character CreateCharacter(Character character) {
        character.setUuid(this.getRandomUuid());

        //TODO spin up new thread to save
        this.characterRepository.saveCharacter(character);

        return character;
    }

    public void UpdateCharacter(Character character) {
        // TODO spin up new thread to save character
        this.characterRepository.saveCharacter(character);
    }

    public void DeleteCharacter(String uuid) {
        // TODO spin up new thread to delete character
        this.characterRepository.deleteCharacter(uuid);
    }

    protected String getRandomUuid() {
        return UUID.randomUUID().toString().replace("-", "");
    }
}
