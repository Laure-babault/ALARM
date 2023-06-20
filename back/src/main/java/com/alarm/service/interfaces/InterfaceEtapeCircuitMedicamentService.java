package com.alarm.service.interfaces;

import java.util.Set;

import com.alarm.dto.implementations.EtapeCircuitMedicamentDto;

public interface InterfaceEtapeCircuitMedicamentService {
	
	Set<EtapeCircuitMedicamentDto> findAll_metier();
	
	EtapeCircuitMedicamentDto finById_metier(int id);

}
