package CharacterCreator.models.Equipment;

import CharacterCreator.Enums.DamageType;
import CharacterCreator.Enums.WeaponProficiency;
import CharacterCreator.Enums.WeaponProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class Weapon extends Item {
    private DamageType DamageType;
    private String DamageDie;
    private List<WeaponProperty> Properties;
    private WeaponProficiency Proficiency;
}
