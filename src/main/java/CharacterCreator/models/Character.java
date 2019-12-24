package CharacterCreator.models;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class Character {

    private String Uuid;

    private String Name;

    private Integer Level;

    private Integer Strength;

    private Integer Dexterity;

    private Integer Constitution;

    private Integer Wisdom;

    private Integer Intelligence;

    private Integer Charisma;

    private CharacterClass CharacterClass;

    private Race Race;

    private List<Feat> Feats;
}
