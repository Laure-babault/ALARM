package com.alarm.entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

/**
 * The primary key class for the Facteur_reponse database table.
 * 
 */
@Embeddable
public class Facteur_reponsePK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@Column(name="id_analyse")
	private int idAnalyse;

	@Column(name="id_facteur_question")
	private int idFacteurQuestion;

	public Facteur_reponsePK() {
	}
	public int getIdAnalyse() {
		return this.idAnalyse;
	}
	public void setIdAnalyse(int idAnalyse) {
		this.idAnalyse = idAnalyse;
	}
	public int getIdFacteurQuestion() {
		return this.idFacteurQuestion;
	}
	public void setIdFacteurQuestion(int idFacteurQuestion) {
		this.idFacteurQuestion = idFacteurQuestion;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof Facteur_reponsePK)) {
			return false;
		}
		Facteur_reponsePK castOther = (Facteur_reponsePK)other;
		return 
			(this.idAnalyse == castOther.idAnalyse)
			&& (this.idFacteurQuestion == castOther.idFacteurQuestion);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.idAnalyse;
		hash = hash * prime + this.idFacteurQuestion;
		
		return hash;
	}
}