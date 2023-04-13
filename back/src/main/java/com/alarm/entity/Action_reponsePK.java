package com.alarm.entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

/**
 * The primary key class for the Action_reponse database table.
 * 
 */
@Embeddable
public class Action_reponsePK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@Column(name="id_analyse")
	private int idAnalyse;

	@Column(name="id_action_question")
	private int idActionQuestion;

	public Action_reponsePK() {
	}
	public int getIdAnalyse() {
		return this.idAnalyse;
	}
	public void setIdAnalyse(int idAnalyse) {
		this.idAnalyse = idAnalyse;
	}
	public int getIdActionQuestion() {
		return this.idActionQuestion;
	}
	public void setIdActionQuestion(int idActionQuestion) {
		this.idActionQuestion = idActionQuestion;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof Action_reponsePK)) {
			return false;
		}
		Action_reponsePK castOther = (Action_reponsePK)other;
		return 
			(this.idAnalyse == castOther.idAnalyse)
			&& (this.idActionQuestion == castOther.idActionQuestion);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.idAnalyse;
		hash = hash * prime + this.idActionQuestion;
		
		return hash;
	}
}