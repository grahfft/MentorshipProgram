package CharacterCreator.controllers;

import CharacterCreator.RaceModels.Race;
import CharacterCreator.RaceModels.Subrace;
import CharacterCreator.services.RaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api")
public class RaceController {

    private RaceService raceService;

    @Autowired
    public RaceController(RaceService raceService) {
        this.raceService = raceService;
    }

    @GetMapping("/races")
    public ResponseEntity<List<Race>> getAllRaces() {
        return ResponseEntity.ok(this.raceService.getRaces());
    }

    @GetMapping("/subraces/{raceName}")
    public ResponseEntity<List<Subrace>> getSubraces(@PathVariable String raceName) { return ResponseEntity.ok(this.raceService.getSubraces(raceName)); }
}
