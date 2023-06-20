package com.alarm.mapper.interfaces;

import org.mapstruct.Mapper;

import com.alarm.dto.implementations.PersonneDto;
import com.alarm.entity.Personne;

@Mapper
public interface PersonneMapper {
	
	PersonneDto entityToDto(Personne personne);

	Personne dtoToEntity(PersonneDto personneDto);
}
