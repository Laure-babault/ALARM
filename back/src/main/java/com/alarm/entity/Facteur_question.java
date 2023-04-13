package com.alarm.entity;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.NamedQuery;


/**
 * The persistent class for the Facteur_question database table.
 * 
 */
@Entity
@NamedQuery(name="Facteur_question.findAll", query="SELECT f FROM Facteur_question f")
public class Facteur_question implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int id;

	private String libelle;

	public Facteur_question() {
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