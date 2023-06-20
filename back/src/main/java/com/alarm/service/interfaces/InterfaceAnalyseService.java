package com.alarm.service.interfaces;

import java.util.Set;

import com.alarm.dto.implementations.AnalyseDto;
import com.alarm.dto.implementations.EtapeCircuitMedicamentDto;

public interface InterfaceAnalyseService {
	
	Set<AnalyseDto> findAllAnalyse_metier();
	
	AnalyseDto findAnalyseById_metier(int id);

}
