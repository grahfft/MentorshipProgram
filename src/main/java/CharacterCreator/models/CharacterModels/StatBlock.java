package CharacterCreator.models.CharacterModels;

import lombok.Getter;

@Getter
public class StatBlock {

    private Integer Strength;

    private Integer StrengthAbilityModifier;

    private Integer Dexterity;

    private Integer DexterityAbilityModifier;

    private Integer Constitution;

    private Integer ConstitutionAbilityModifier;

    private Integer Wisdom;

    private Integer WisdomAbilityModifier;

    private Integer Intelligence;

    private Integer IntelligenceAbilityModifier;

    private Integer Charisma;

    private Integer CharismaAbilityModifier;

    public void setStrength(int value) throws Exception {
        this.Strength = value;
        this.StrengthAbilityModifier = this.calculateModifier(value);
    }

    public void setDexterity(int value) throws Exception {
        this.Dexterity = value;
        this.DexterityAbilityModifier = this.calculateModifier(value);
    }

    public void setConstitution(int value) throws Exception {
        this.Constitution = value;
        this.ConstitutionAbilityModifier = this.calculateModifier(value);
    }

    public void setIntelligence(int value) throws Exception {
        this.Intelligence = value;
        this.IntelligenceAbilityModifier = this.calculateModifier(value);
    }

    public void setWisdom(int value) throws Exception {
        this.Wisdom = value;
        this.WisdomAbilityModifier = this.calculateModifier(value);
    }

    public void setCharisma(int value) throws Exception {
        this.Charisma = value;
        this.CharismaAbilityModifier = this.calculateModifier(value);
    }

    private int calculateModifier(int value) throws Exception {
        switch(value) {
            case 1:
                return -5;
            case 2:
            case 3:
                return -4;
            case 4:
            case 5:
                return -3;
            case 6:
            case 7:
                return -2;
            case 8:
            case 9:
                return -1;
            case 10:
            case 11:
                return 0;
            case 12:
            case 13:
                return 1;
            case 14:
            case 15:
                return 2;
            case 16:
            case 17:
                return 3;
            case 18:
            case 19:
                return 4;
            case 20:
            case 21:
                return 5;
            case 22:
            case 23:
                return 6;
            case 24:
            case 25:
                return 7;
            case 26:
            case 27:
                return 8;
            case 28:
            case 29:
                return 9;
            case 30:
                return 10;
            default:
                throw new Exception("Value outside of range");
        }
    }
}
