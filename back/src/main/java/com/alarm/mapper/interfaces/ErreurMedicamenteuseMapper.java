package com.alarm.mapper.interfaces;

import org.mapstruct.Mapper;

import com.alarm.dto.implementations.ErreurMedicamenteuseDto;
import com.alarm.entity.Erreur_medicamenteuse;

@Mapper
public interface ErreurMedicamenteuseMapper {
	
	ErreurMedicamenteuseDto entityToDto(Erreur_medicamenteuse erreur_medicamenteuse);

	Erreur_medicamenteuse dtoToEntity(ErreurMedicamenteuseDto erreurMedicamenteuseDto);

}
