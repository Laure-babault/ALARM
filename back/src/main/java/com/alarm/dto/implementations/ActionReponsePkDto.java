package com.alarm.dto.implementations;

import com.alarm.dto.interfaces.Dto;
import com.alarm.entity.Action_reponsePK;

public class ActionReponsePkDto implements Dto<Action_reponsePK>{
	
	private int idAnalyse;

	private int idActionQuestion;

	public int getIdAnalyse() {
		return idAnalyse;
	}

	public void setIdAnalyse(int idAnalyse) {
		this.idAnalyse = idAnalyse;
	}

	public int getIdActionQuestion() {
		return idActionQuestion;
	}

	public void setIdActionQuestion(int idActionQuestion) {
		this.idActionQuestion = idActionQuestion;
	}

}
