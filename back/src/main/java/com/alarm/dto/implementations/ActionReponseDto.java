package com.alarm.dto.implementations;

import com.alarm.dto.interfaces.Dto;
import com.alarm.entity.Action_reponse;

public class ActionReponseDto implements Dto<Action_reponse>{

	private ActionReponsePkDto id;

	private int numLigne;

	private String reponse;

	private ActionQuestionDto actionQuestion;

	public ActionReponsePkDto getId() {
		return id;
	}

	public void setId(ActionReponsePkDto id) {
		this.id = id;
	}

	public int getNumLigne() {
		return numLigne;
	}

	public void setNumLigne(int numLigne) {
		this.numLigne = numLigne;
	}

	public String getReponse() {
		return reponse;
	}

	public void setReponse(String reponse) {
		this.reponse = reponse;
	}

	public ActionQuestionDto getActionQuestion() {
		return actionQuestion;
	}

	public void setActionQuestion(ActionQuestionDto actionQuestion) {
		this.actionQuestion = actionQuestion;
	}

}
