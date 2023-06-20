
package com.alarm.controller;

import java.util.Set;

import javax.inject.Inject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.alarm.dto.implementations.AnalyseDto;
import com.alarm.dto.implementations.EtapeCircuitMedicamentDto;
import com.alarm.service.interfaces.InterfaceAnalyseService;
import com.alarm.service.interfaces.InterfaceEtapeCircuitMedicamentService;

@RestController
public class AnalyseController {

	@Autowired
	InterfaceAnalyseService analyseService;

	@GetMapping("/analyse/all")
	public Set<AnalyseDto> findAll() {
		return this.analyseService.findAllAnalyse_metier();
	}
	
	@GetMapping("/analyse/{id}")
	public AnalyseDto finById(@PathVariable int id) {
		return this.analyseService.findAnalyseById_metier(id);
	}

}
