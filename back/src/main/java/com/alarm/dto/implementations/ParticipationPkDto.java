package com.alarm.dto.implementations;

import com.alarm.dto.interfaces.Dto;
import com.alarm.entity.ParticipationPK;

public class ParticipationPkDto implements Dto<ParticipationPK>{

	private int idPersonne;

	private int idCrex;

	public int getIdPersonne() {
		return idPersonne;
	}

	public void setIdPersonne(int idPersonne) {
		this.idPersonne = idPersonne;
	}

	public int getIdCrex() {
		return idCrex;
	}

	public void setIdCrex(int idCrex) {
		this.idCrex = idCrex;
	}
	
}
