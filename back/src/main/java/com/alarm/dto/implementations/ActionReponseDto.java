package com.alarm.dto.implementations;

import com.alarm.dto.interfaces.Dto;
import com.alarm.entity.Action_reponse;

public class ActionReponseDto implements Dto<Action_reponse>{

	private ActionReponsePkDto id;

	private int numLigne;

	private String reponse;

	private ActionQuestionDto actionQuestion;

}
