package com.alarm.mapper.interfaces;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.alarm.dto.implementations.EtapeCircuitMedicamentDto;
import com.alarm.entity.EtapeCircuitMedicament;

@Mapper
public interface EtapeCircuitMedicamentMapper {
	
	@Mapping(target="id", source="etapeCircuitMedicament.id") 
	EtapeCircuitMedicamentDto entityToListDto(EtapeCircuitMedicament etapeCircuitMedicament);

}
