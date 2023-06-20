package com.alarm.mapper.interfaces;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.alarm.dto.implementations.EtapeCircuitMedicamentDto;
import com.alarm.entity.EtapeCircuitMedicament;

@Mapper
public interface EtapeCircuitMedicamentMapper {
	
	EtapeCircuitMedicamentDto entityToDto(EtapeCircuitMedicament etapeCircuitMedicament);

}
