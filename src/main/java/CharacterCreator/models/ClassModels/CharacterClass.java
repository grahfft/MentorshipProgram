package CharacterCreator.models.ClassModels;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class CharacterClass {
    private String Name;
    private CharacterSubclass SubClass;
    private ClassAbility[] Abilities;
}
