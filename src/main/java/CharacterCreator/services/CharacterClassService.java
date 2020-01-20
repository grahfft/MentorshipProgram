package CharacterCreator.services;

import CharacterCreator.models.ClassModels.CharacterClass;
import CharacterCreator.models.ClassModels.CharacterSubclass;
import CharacterCreator.repositories.InMemoryRepositories.CharacterClassRepository;
import CharacterCreator.repositories.Interfaces.ICharacterClassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CharacterClassService {

    private ICharacterClassRepository characterClassRepository;

    @Autowired
    public CharacterClassService(ICharacterClassRepository characterClassRepository) {
        this.characterClassRepository = characterClassRepository;
    }

    public List<CharacterClass> getCharacterClasses() {
        return this.characterClassRepository.getCharacterClassesFromDatabase();
    }

    public List<CharacterSubclass> getCharacterSubclasses(String className) {
        return this.characterClassRepository.getCharacterSubclassesFromDatabase(className);
    }
}
