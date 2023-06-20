package com.alarm.mapper.interfaces;

import org.mapstruct.Mapper;

import com.alarm.dto.implementations.ParticipationDto;
import com.alarm.entity.Participation;

@Mapper
public interface ParticipationMapper {
	
	ParticipationDto entityToDto(Participation participation);

	Participation dtoToEntity(ParticipationDto participationDto);

}
