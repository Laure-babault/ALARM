package com.alarm.dto.implementations;

import java.util.List;

import com.alarm.dto.interfaces.Dto;
import com.alarm.entity.Action_question;

public class ActionQuestionDto implements Dto<Action_question>{

	private int id;

	private String libelle;

	private List<ActionReponseDto> actionReponses;

}
