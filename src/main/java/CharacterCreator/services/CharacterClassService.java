package CharacterCreator.services;

import CharacterCreator.models.CharacterClass;
import CharacterCreator.models.CharacterSubclass;
import CharacterCreator.repositories.CharacterClassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CharacterClassService {

    private CharacterClassRepository characterClassRepository;

    @Autowired
    public CharacterClassService(CharacterClassRepository characterClassRepository) {
        this.characterClassRepository = characterClassRepository;
    }

    public List<CharacterClass> getCharacterClasses() {
        return this.characterClassRepository.getCharacterClassesFromDatabase();
    }

    public List<CharacterSubclass> getCharacterSubclasses(String className) {
        return this.characterClassRepository.getCharacterSubclassesFromDatabase(className);
    }
}
