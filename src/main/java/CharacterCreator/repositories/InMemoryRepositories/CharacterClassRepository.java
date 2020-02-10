package CharacterCreator.repositories.InMemoryRepositories;

import CharacterCreator.models.CharacterModels.Character;
import CharacterCreator.models.ClassModels.CharacterClass;
import CharacterCreator.models.ClassModels.CharacterSubclass;

import CharacterCreator.repositories.Interfaces.ICharacterClassRepository;
import org.springframework.stereotype.Repository;

import java.io.IOException;
import java.util.*;

@Repository
public class CharacterClassRepository extends InMemoryRepository implements ICharacterClassRepository {
    private List<CharacterClass> CharacterClasses;
    private Map<String, List<CharacterSubclass>> CharacterSubClasses;

    public CharacterClassRepository() throws IOException {
        this.CharacterClasses = new ArrayList<>();
        this.CharacterSubClasses = new Hashtable<>();
        this.loadFromFile();
    }

    public List<CharacterClass> getCharacterClassesFromDatabase() {
        return this.CharacterClasses;
    }

    public List<CharacterSubclass> getCharacterSubclassesFromDatabase(String className) {
        return this.CharacterSubClasses.get(className);
    }

    private void loadFromFile() throws IOException {
       this.loadClassesFromFile();
       this.loadSubClassesFromFile();
    }

    private void loadClassesFromFile() throws IOException {
        String classesFromFile = this.readFromFile("Classes.json");
        this.CharacterClasses = Arrays.asList(this.objectMapper.readValue(classesFromFile, CharacterClass[].class));

        for(CharacterClass characterClass: this.CharacterClasses) {
            this.CharacterSubClasses.put(characterClass.getName(), new ArrayList<>());
        }
    }

    private void loadSubClassesFromFile() throws IOException {
        String subClassesFromFile = this.readFromFile("Subclasses.json");
        List<CharacterSubclass> subclasses = Arrays.asList(this.objectMapper.readValue(subClassesFromFile, CharacterSubclass[].class));

        for(CharacterSubclass subClass: subclasses) {
            List<CharacterSubclass> subclassByClass = this.CharacterSubClasses.get(subClass.getMainCharacterClass());
            subclassByClass.add(subClass);
        }
    }
}
