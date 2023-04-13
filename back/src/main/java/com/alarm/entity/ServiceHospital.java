package com.alarm.entity;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.NamedQuery;


/**
 * The persistent class for the ServiceHospital database table.
 * 
 */
@Entity
@NamedQuery(name="ServiceHospital.findAll", query="SELECT s FROM ServiceHospital s")
public class ServiceHospital implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int id;

	private String libelle;

	public ServiceHospital() {
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