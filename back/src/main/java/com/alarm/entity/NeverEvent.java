package com.alarm.entity;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.NamedQuery;


/**
 * The persistent class for the NeverEvent database table.
 * 
 */
@Entity
@NamedQuery(name="NeverEvent.findAll", query="SELECT n FROM NeverEvent n")
public class NeverEvent implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int id;

	private String libelle;

	public NeverEvent() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getLibelle() {
		return this.libelle;
	}

	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}

}