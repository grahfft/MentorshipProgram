package CharacterCreator.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Feat {
    private String Name;
    private StatBonuses bonuses;
    private String Description;
}
