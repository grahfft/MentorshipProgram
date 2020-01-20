package CharacterCreator.services;

import CharacterCreator.models.CharacterModels.Character;
import CharacterCreator.models.Race;
import CharacterCreator.repositories.RaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RaceService {

    private RaceRepository raceRepository;

    @Autowired
    public RaceService(RaceRepository raceRepository) {
        this.raceRepository = raceRepository;
    }

    public List<Race> getRaces() {
        return this.raceRepository.getRacesFromDatabase();
    }
}