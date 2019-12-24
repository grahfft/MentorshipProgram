package CharacterCreator.controllers;

import CharacterCreator.models.Character;
import CharacterCreator.services.CharacterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CharacterController {

    @Autowired
    CharacterService characterService;

    @GetMapping(value = "/characters")
    public ResponseEntity<List<Character>> GetChracters() {
        List<Character> characters = new ArrayList<Character>();
        return ResponseEntity.ok(this.characterService.GetAllCharacters());
    }

    @GetMapping(value = "/character/{uuid}")
    public ResponseEntity<Character> GetCharacterByUuid(@PathVariable String uuid) {
        return ResponseEntity.ok(this.characterService.GetCharacter(uuid));
    }

    @PostMapping(value = "/character/{uuid}")
    public ResponseEntity<Character> CreateNewCharacter(@RequestBody Character character) {
        return ResponseEntity.ok(this.characterService.CreateCharacter(character));
    }

    @PatchMapping(value = "/character{uuid}")
    public ResponseEntity<?> UpdateNewCharacter(@RequestBody Character character) {
        this.characterService.UpdateCharacter(character);
        return ResponseEntity.ok("Character updated");
    }

    @DeleteMapping(value = "/character{uuid}")
    public ResponseEntity<?> DeleteCharacter(@PathVariable String uuid) {
        this.characterService.DeleteCharacter(uuid);
        return ResponseEntity.ok("Delete Successful");
    }
}
