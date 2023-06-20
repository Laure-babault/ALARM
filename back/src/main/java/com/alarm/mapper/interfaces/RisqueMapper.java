package com.alarm.mapper.interfaces;

import org.mapstruct.Mapper;

import com.alarm.dto.implementations.RisqueDto;
import com.alarm.entity.Risque;

@Mapper
public interface RisqueMapper {

	RisqueDto entityToDto(Risque risque);

	Risque dtoToEntity(RisqueDto risqueDto);
	
}
