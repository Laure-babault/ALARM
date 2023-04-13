package com.alarm.entity;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.NamedQuery;


/**
 * The persistent class for the Personne database table.
 * 
 */
@Entity
@NamedQuery(name="Personne.findAll", query="SELECT p FROM Personne p")
public class Personne implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int id;

	private String fonction;

	private String nom;

	private String prenom;

	public Personne() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFonction() {
		return this.fonction;
	}

	public void setFonction(String fonction) {
		this.fonction = fonction;
	}

	public String getNom() {
		return this.nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return this.prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

}