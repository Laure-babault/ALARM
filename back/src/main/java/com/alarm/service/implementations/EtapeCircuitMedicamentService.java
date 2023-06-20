package com.alarm.service.implementations;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.enterprise.context.RequestScoped;
import javax.enterprise.context.control.ActivateRequestContext;
import javax.inject.Inject;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alarm.dao.implementations.EtapeCircuitMedicamentDAO;
import com.alarm.dto.implementations.EtapeCircuitMedicamentDto;
import com.alarm.entity.EtapeCircuitMedicament;
import com.alarm.mapper.interfaces.EtapeCircuitMedicamentMapper;
import com.alarm.service.interfaces.InterfaceEtapeCircuitMedicamentService;

import jakarta.transaction.Transactional;

@Service
public class EtapeCircuitMedicamentService implements InterfaceEtapeCircuitMedicamentService{
	
	@Autowired
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
			ecmListDto.add(mapper.entityToDto(etapeCircuitMedicament));
		}
		return ecmListDto;
	}
	   public EtapeCircuitMedicament finById(final int id) {
			// TODO Auto-generated method stub
			return etapeCircuitMedicamentDAO.getById(id);
		}

	@Override
	public EtapeCircuitMedicamentDto finById_metier(final int id) {
		// TODO Auto-generated method stub
		return mapper.entityToDto(this.finById(id));
	}
	
	public EtapeCircuitMedicament create(EtapeCircuitMedicament newEtapeCircuitMedicamentDto) {
		// TODO Auto-generated method stub
		return etapeCircuitMedicamentDAO.addEtapeCircuitMedicament(newEtapeCircuitMedicamentDto);
	}

	@Override
	public EtapeCircuitMedicamentDto create_metier(EtapeCircuitMedicamentDto newEtapeCircuitMedicamentDto) {
		EtapeCircuitMedicament newEtapeCircuitMedicament = this.create(mapper.dtoToEntity(newEtapeCircuitMedicamentDto));
		return mapper.entityToDto(newEtapeCircuitMedicament);
	}

}
