package CharacterCreator.controllers;

import CharacterCreator.models.CharacterModels.Character;
import CharacterCreator.services.CharacterService;
import com.sun.tools.javac.comp.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
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

    @PutMapping(value = "/character/{uuid}")
    public ResponseEntity<Character> UpdateNewCharacter(@PathVariable String uuid, @RequestBody Character character) {
        Character updatedChar = this.characterService.UpdateCharacter(character);
        return new ResponseEntity<>(updatedChar, HttpStatus.OK);
    }

    @DeleteMapping(value = "/character/{uuid}")
    public ResponseEntity<?> DeleteCharacter(@PathVariable int uuid) {
        this.characterService.DeleteCharacter(uuid);
        return ResponseEntity.ok("Delete Successful");
    }
}
