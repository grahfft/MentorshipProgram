package CharacterCreator.models.Equipment;

import CharacterCreator.Enums.ArmorProficiency;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Armor extends Item {
    private ArmorProficiency ArmorProficiency;
    private int StrengthRequirement;
    private int BaseArmorClass;
}
