package CharacterCreator.models.CharacterModels;

import CharacterCreator.Enums.ArmorProficiency;
import CharacterCreator.Enums.WeaponProficiency;
import CharacterCreator.models.ClassModels.CharacterClass;
import CharacterCreator.models.ClassModels.CharacterSubclass;
import CharacterCreator.models.Feat;
import CharacterCreator.models.Race;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class Character {

    private String Uuid;

    private String Name;

    private Integer Level;

    private StatBlock StatBlock;

    private Defenses Defenses;

    private CharacterClass CharacterClass;

    private CharacterSubclass CharacterSubclass;

    private Race Race;

    private List<Feat> Feats;

    private List<ArmorProficiency> ArmorProficiencies;

    private List<WeaponProficiency> WeaponProficiencies;
}
