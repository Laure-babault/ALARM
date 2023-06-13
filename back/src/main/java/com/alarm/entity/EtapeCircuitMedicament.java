package com.alarm.entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.NamedQuery;


/**
 * The persistent class for the EtapeCircuitMedicament database table.
 * 
 */
@Entity
@NamedQuery(name="EtapeCircuitMedicament.findAll", query="SELECT e FROM EtapeCircuitMedicament e")
public class EtapeCircuitMedicament implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int id;

	@Column(name="is_default")
	private boolean isDefault;

	private String libelle;

	public EtapeCircuitMedicament() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public boolean getIsDefault() {
		return this.isDefault;
	}

	public void setIsDefault(boolean isDefault) {
		this.isDefault = isDefault;
	}

	public String getLibelle() {
		return this.libelle;
	}

	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}

}