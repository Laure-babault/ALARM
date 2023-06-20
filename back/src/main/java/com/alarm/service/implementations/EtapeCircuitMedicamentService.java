package com.alarm.service.implementations;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.enterprise.context.RequestScoped;
import javax.enterprise.context.control.ActivateRequestContext;
import javax.inject.Inject;

import org.mapstruct.factory.Mappers;

import com.alarm.dao.implementations.EtapeCircuitMedicamentDAO;
import com.alarm.dto.implementations.EtapeCircuitMedicamentDto;
import com.alarm.entity.EtapeCircuitMedicament;
import com.alarm.mapper.interfaces.EtapeCircuitMedicamentMapper;
import com.alarm.service.interfaces.InterfaceEtapeCircuitMedicamentService;

import jakarta.transaction.Transactional;

@RequestScoped 
@ActivateRequestContext
@Transactional
public class EtapeCircuitMedicamentService implements InterfaceEtapeCircuitMedicamentService{
	
	@Inject
	EtapeCircuitMedicamentDAO etapeCircuitMedicamentDAO;
	
	private final EtapeCircuitMedicamentMapper mapper = Mappers.getMapper(EtapeCircuitMedicamentMapper.class);
	
	
	public List<EtapeCircuitMedicament> test(){ 
		return etapeCircuitMedicamentDAO.getAll();
	}
	
	@Override
	public Set<EtapeCircuitMedicamentDto> findAll_metier() {
		final List<EtapeCircuitMedicament> ecmList = this.test();
		final Set<EtapeCircuitMedicamentDto> ecmListDto = new HashSet<>();
		for (EtapeCircuitMedicament etapeCircuitMedicament : ecmList) {
			ecmListDto.add(mapper.entityToListDto(etapeCircuitMedicament));
		}
		return ecmListDto;
	}

}
