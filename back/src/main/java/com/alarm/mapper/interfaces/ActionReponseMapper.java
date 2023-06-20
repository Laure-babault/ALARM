package com.alarm.mapper.interfaces;

import org.mapstruct.Mapper;

import com.alarm.dto.implementations.ActionReponseDto;
import com.alarm.entity.Action_reponse;

@Mapper
public interface ActionReponseMapper {

	ActionReponseDto entityToDto(Action_reponse action_reponse);

	Action_reponse dtoToEntity(ActionReponseDto actionReponseDto);
}
