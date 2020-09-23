package CharacterCreator.services;

import CharacterCreator.models.RaceModels.Race;
import CharacterCreator.models.RaceModels.Subrace;
import CharacterCreator.repositories.InMemoryRepositories.RaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import java.util.List;
//
//@Service
//public class RaceService {
//
//    private RaceRepository raceRepository;
//
//    @Autowired
//    public RaceService(RaceRepository raceRepository) {
//        this.raceRepository = raceRepository;
//    }
//
//    public List<Race> getRaces() {
//        return this.raceRepository.getRacesFromDatabase();
//    }
//
//    public List<Subrace> getSubraces(String raceName) { return this.raceRepository.getSubracesFromDatabase(raceName); }
//}
