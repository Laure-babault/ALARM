package com.alarm.entity;

import java.io.Serializable;
import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.NamedQuery;


/**
 * The persistent class for the CREX database table.
 * 
 */
@Entity
@NamedQuery(name="Crex.findAll", query="SELECT c FROM Crex c")
public class Crex implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int id;

	@Column(name="date_debut")
	private Timestamp dateDebut;

	@Column(name="date_fin")
	private Timestamp dateFin;

	@Column(name="is_archive")
	private byte isArchive;

	public Crex() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Timestamp getDateDebut() {
		return this.dateDebut;
	}

	public void setDateDebut(Timestamp dateDebut) {
		this.dateDebut = dateDebut;
	}

	public Timestamp getDateFin() {
		return this.dateFin;
	}

	public void setDateFin(Timestamp dateFin) {
		this.dateFin = dateFin;
	}

	public byte getIsArchive() {
		return this.isArchive;
	}

	public void setIsArchive(byte isArchive) {
		this.isArchive = isArchive;
	}

}