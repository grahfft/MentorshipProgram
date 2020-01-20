package CharacterCreator.models.CharacterModels;

import CharacterCreator.models.Feat;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class Character {

    private String Uuid;

    private String Name;

    private Integer Level;

    private CharacterCreator.models.CharacterModels.StatBlock StatBlock;

    private CharacterCreator.models.ClassModels.CharacterClass CharacterClass;

    private CharacterCreator.models.Race Race;

    private List<Feat> Feats;
}
