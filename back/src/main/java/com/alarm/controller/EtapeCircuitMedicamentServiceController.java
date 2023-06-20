
package com.alarm.controller;

import java.util.Set;

import javax.inject.Inject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.alarm.dto.implementations.EtapeCircuitMedicamentDto;
import com.alarm.service.interfaces.InterfaceEtapeCircuitMedicamentService;

@RestController
public class EtapeCircuitMedicamentServiceController {

	@Autowired
	InterfaceEtapeCircuitMedicamentService etapeCircuitMedicamentService;

	@GetMapping("/analyse/all")
	public Set<EtapeCircuitMedicamentDto> findAll() {
		return this.etapeCircuitMedicamentService.findAll_metier();
	}
	
	@GetMapping("/analyse/{id}")
	public EtapeCircuitMedicamentDto finById(@PathVariable int id) {
		return this.etapeCircuitMedicamentService.finById_metier(id);
	}

}
