package CharacterCreator.repositories.Interfaces;

import CharacterCreator.models.ClassModels.CharacterClass;
import CharacterCreator.models.ClassModels.CharacterSubclass;

import java.util.List;

public interface ICharacterClassRepository {
    List<CharacterClass> getCharacterClassesFromDatabase();

    List<CharacterSubclass> getCharacterSubclassesFromDatabase(String className);
}
