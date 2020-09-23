//package CharacterCreator.controllers;
//
//import CharacterCreator.models.ClassModels.CharacterClass;
//import CharacterCreator.models.ClassModels.CharacterSubclass;
//import CharacterCreator.services.CharacterClassService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api")
//@CrossOrigin(origins = "http://localhost:3000")
//public class CharacterClassController {
//
//    private CharacterClassService characterClassService;
//
//    @Autowired
//    public CharacterClassController(CharacterClassService characterClassService) {
//        this.characterClassService = characterClassService;
//    }
//
//    @GetMapping("/classes")
//    public ResponseEntity<List<CharacterClass>> GetCharacterClasses() {
//        return ResponseEntity.ok(this.characterClassService.getCharacterClasses());
//    }
//
//    @GetMapping("/classes/{className}")
//    public ResponseEntity<List<CharacterSubclass>> GetCharacterSubclasses(@PathVariable String className) {
//        return ResponseEntity.ok(this.characterClassService.getCharacterSubclasses(className));
//    }
//}
