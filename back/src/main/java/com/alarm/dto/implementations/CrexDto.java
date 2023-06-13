package com.alarm.dto.implementations;

import java.sql.Timestamp;

import com.alarm.dto.interfaces.Dto;
import com.alarm.entity.Crex;

public class CrexDto implements Dto<Crex>{

	private int id;

	private Timestamp dateDebut;

	private Timestamp dateFin;

	private boolean isArchive;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Timestamp getDateDebut() {
		return dateDebut;
	}

	public void setDateDebut(Timestamp dateDebut) {
		this.dateDebut = dateDebut;
	}

	public Timestamp getDateFin() {
		return dateFin;
	}

	public void setDateFin(Timestamp dateFin) {
		this.dateFin = dateFin;
	}

	public boolean isArchive() {
		return isArchive;
	}

	public void setArchive(boolean isArchive) {
		this.isArchive = isArchive;
	}
	
}
