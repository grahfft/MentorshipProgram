package CharacterCreator.repositories;

import CharacterCreator.models.ClassModels.CharacterClass;
import CharacterCreator.models.ClassModels.CharacterSubclass;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;

@Repository
public class CharacterClassRepository {
    private List<CharacterClass> CharacterClasses;
    private Map<String, List<CharacterSubclass>> CharacterSubClasses;

    public CharacterClassRepository() {
        this.CharacterClasses = new ArrayList<>();
        this.CharacterSubClasses = new Hashtable<>();
    }

    public List<CharacterClass> getCharacterClassesFromDatabase() {
        return this.CharacterClasses;
    }

    public List<CharacterSubclass> getCharacterSubclassesFromDatabase(String className) {
        return this.CharacterSubClasses.get(className);
    }
}