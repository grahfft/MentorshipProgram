package CharacterCreator.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Race {
    private String Name;
    private StatBonuses Bonuses;
    private String[] Abilities;
}
