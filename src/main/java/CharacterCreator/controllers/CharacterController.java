package CharacterCreator.controllers;

import CharacterCreator.models.CharacterModels.Character;
import CharacterCreator.services.CharacterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class CharacterController {

    private final CharacterService characterService;

    @Autowired
    public CharacterController(CharacterService characterService) {
        this.characterService = characterService;
    }

    @GetMapping(value = "/characters")
    public ResponseEntity<List<Character>> GetCharacters() {
        return ResponseEntity.ok(this.characterService.GetAllCharacters());
    }

    @GetMapping(value = "/character/{uuid}")
    public ResponseEntity<Character> GetCharacterByUuid(@PathVariable int uuid) {
        return ResponseEntity.ok(this.characterService.GetCharacter(uuid));
    }

    @PostMapping(value = "/character", produces = "application/json")
    public ResponseEntity<Character> CreateNewCharacter(@RequestBody Character character) {
        return ResponseEntity.ok(this.characterService.CreateCharacter(character));
    }

    @PatchMapping(value = "/character/{uuid}")
    public ResponseEntity<?> UpdateNewCharacter(@RequestBody Character character) {
        this.characterService.UpdateCharacter(character);
        return ResponseEntity.ok("Character updated");
    }

    @DeleteMapping(value = "/character/{uuid}")
    public ResponseEntity<?> DeleteCharacter(@PathVariable int uuid) {
        this.characterService.DeleteCharacter(uuid);
        return ResponseEntity.ok("Delete Successful");
    }
}
