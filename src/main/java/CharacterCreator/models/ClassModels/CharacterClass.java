package CharacterCreator.models.ClassModels;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class CharacterClass {
    private String Name;
    private ClassAbility[] Abilities;

    public CharacterClass(String name) {
        this.Name = name;
    }
}
