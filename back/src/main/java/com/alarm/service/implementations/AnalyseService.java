
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

import com.alarm.dao.implementations.AnalyseDAO;
import com.alarm.dao.implementations.EtapeCircuitMedicamentDAO;
import com.alarm.dto.implementations.AnalyseDto;
import com.alarm.dto.implementations.EtapeCircuitMedicamentDto;
import com.alarm.entity.Analyse;
import com.alarm.entity.EtapeCircuitMedicament;
import com.alarm.mapper.interfaces.AnalyseMapper;
import com.alarm.mapper.interfaces.EtapeCircuitMedicamentMapper;
import com.alarm.service.interfaces.InterfaceAnalyseService;
import com.alarm.service.interfaces.InterfaceEtapeCircuitMedicamentService;

import jakarta.transaction.Transactional;  
  @Service
  public class AnalyseService implements InterfaceAnalyseService{
  	
  	@Autowired
  	AnalyseDAO analyseDAO;
  	
  	private final AnalyseMapper mapper = Mappers.getMapper(AnalyseMapper.class);
  	
	public List<Analyse> findAllAnalyse(){ 
		return analyseDAO.getAll();
	}
  	
  	@Override
  	public Set<AnalyseDto> findAllAnalyse_metier() {
  		final List<Analyse> ecmList = this.findAllAnalyse();
  		final Set<AnalyseDto> ecmListDto = new HashSet<>();
  		for (Analyse analyse : ecmList) {
  			ecmListDto.add(mapper.entityToDto(analyse));
  		}
  		return ecmListDto;
  	}
  	
  	public Analyse findAnalyseById(final int id) {
  		// TODO Auto-generated method stub
  		return analyseDAO.getById(id);
  	}

  	@Override
  	public AnalyseDto findAnalyseById_metier(final int id) {
  		// TODO Auto-generated method stub
  		return mapper.entityToDto(this.findAnalyseById(id));
  	}

  }