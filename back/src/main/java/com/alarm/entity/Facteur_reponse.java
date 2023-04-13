package com.alarm.entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.NamedQuery;


/**
 * The persistent class for the Facteur_reponse database table.
 * 
 */
@Entity
@NamedQuery(name="Facteur_reponse.findAll", query="SELECT f FROM Facteur_reponse f")
public class Facteur_reponse implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private Facteur_reponsePK id;

	@Column(name="num_ligne")
	private int numLigne;

	private String reponse;

	public Facteur_reponse() {
	}

	public Facteur_reponsePK getId() {
		return this.id;
	}

	public void setId(Facteur_reponsePK id) {
		this.id = id;
	}

	public int getNumLigne() {
		return this.numLigne;
	}

	public void setNumLigne(int numLigne) {
		this.numLigne = numLigne;
	}

	public String getReponse() {
		return this.reponse;
	}

	public void setReponse(String reponse) {
		this.reponse = reponse;
	}

}