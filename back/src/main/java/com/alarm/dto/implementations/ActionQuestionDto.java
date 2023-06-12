package com.alarm.dto.implementations;

import java.util.List;

import com.alarm.dto.interfaces.Dto;
import com.alarm.entity.Action_question;

public class ActionQuestionDto implements Dto<Action_question>{

	private int id;

	private String libelle;

	private List<ActionReponseDto> actionReponses;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getLibelle() {
		return libelle;
	}

	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}

	public List<ActionReponseDto> getActionReponses() {
		return actionReponses;
	}

	public void setActionReponses(List<ActionReponseDto> actionReponses) {
		this.actionReponses = actionReponses;
	}

}
