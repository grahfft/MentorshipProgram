package CharacterCreator.models;

import CharacterCreator.Enums.CharacterSize;
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
}
