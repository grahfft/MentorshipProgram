package CharacterCreator.models.CharacterModels;

import CharacterCreator.Enums.ArmorProficiency;
import CharacterCreator.Enums.WeaponProficiency;
import CharacterCreator.models.ClassModels.CharacterClass;
import CharacterCreator.models.ClassModels.CharacterSubclass;
import CharacterCreator.models.Feat;
import CharacterCreator.models.RaceModels.Race;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class Character {

    private Integer Uuid;

    private String Name;

    private Integer Level;

    private StatBlock StatBlock;

    private Defenses Defenses;

    private CharacterClass CharacterClass;

//    private CharacterSubclass CharacterSubclass;

    private Race CharacterRace;

    private List<Feat> Feats;

    private List<ArmorProficiency> ArmorProficiencies;

    private List<WeaponProficiency> WeaponProficiencies;

    public Character(Integer uuid, String name, CharacterClass characterClass, Race characterRace, Integer level) {
        this.Uuid = uuid;
        this.Name = name;
        this.CharacterClass = characterClass;
        this.CharacterRace = characterRace;
        this.Level = level;
    }
}
