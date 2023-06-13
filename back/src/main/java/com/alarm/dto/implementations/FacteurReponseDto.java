package com.alarm.dto.implementations;

import com.alarm.dto.interfaces.Dto;
import com.alarm.entity.Facteur_reponse;

public class FacteurReponseDto implements Dto<Facteur_reponse>{

	private FacteurReponsePkDto id;

	private int numLigne;

	private String reponse;

	public FacteurReponsePkDto getId() {
		return id;
	}

	public void setId(FacteurReponsePkDto id) {
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

}
