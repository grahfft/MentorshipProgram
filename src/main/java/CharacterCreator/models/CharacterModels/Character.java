package CharacterCreator.models.CharacterModels;

import CharacterCreator.models.ClassModels.CharacterClass;
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

    private CharacterClass CharacterClass;

    private Race Race;

    private List<Feat> Feats;
}
