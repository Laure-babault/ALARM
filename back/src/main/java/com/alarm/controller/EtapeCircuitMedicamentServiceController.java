package com.alarm.controller;

import java.util.Set;

import javax.inject.Inject;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alarm.dto.implementations.EtapeCircuitMedicamentDto;
import com.alarm.service.interfaces.InterfaceEtapeCircuitMedicamentService;

@RestController
public class EtapeCircuitMedicamentServiceController {
	
	@Inject
	InterfaceEtapeCircuitMedicamentService etapeCircuitMedicamentService;

	
	@GetMapping("/analyse/all")
	public Set<EtapeCircuitMedicamentDto> findAll(){
		return etapeCircuitMedicamentService.findAll_metier();
	}
	
}
