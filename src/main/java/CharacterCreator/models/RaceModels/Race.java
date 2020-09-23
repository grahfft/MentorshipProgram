package CharacterCreator.models.RaceModels;

import CharacterCreator.Enums.CharacterSize;
import CharacterCreator.models.StatBonuses;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Race {
    private String Name;
    private StatBonuses Bonuses;
    private String[] Abilities;
    private CharacterSize Size;

    public Race(String name) {
        this.Name = name;
    }
}
