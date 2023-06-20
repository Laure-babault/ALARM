
package com.alarm.controller;

import java.util.Set;

import javax.inject.Inject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.alarm.dto.implementations.EtapeCircuitMedicamentDto;
import com.alarm.service.interfaces.InterfaceEtapeCircuitMedicamentService;

@RestController
public class EtapeCircuitMedicamentServiceController {

	@Autowired
	InterfaceEtapeCircuitMedicamentService etapeCircuitMedicamentService;

	@GetMapping("/etapeCircuitMedicament/all")
	public Set<EtapeCircuitMedicamentDto> findAll() {
		return this.etapeCircuitMedicamentService.findAll_metier();
	}
	
	@GetMapping("/etapeCircuitMedicament/{id}")
	public EtapeCircuitMedicamentDto finById(@PathVariable int id) {
		return this.etapeCircuitMedicamentService.finById_metier(id);
	}
	
	@PostMapping(value="/etapeCircuitMedicament/ajout", consumes = {"*/*"})
	EtapeCircuitMedicamentDto addEtapeCircuitMedicament(@RequestBody EtapeCircuitMedicamentDto newEtapeCircuitMedicament) {
	    return etapeCircuitMedicamentService.create_metier(newEtapeCircuitMedicament);
	  }

}
