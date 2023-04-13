package com.alarm.entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.NamedQuery;


/**
 * The persistent class for the Authentification database table.
 * 
 */
@Entity
@NamedQuery(name="Authentification.findAll", query="SELECT a FROM Authentification a")
public class Authentification implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int id;

	@Column(name="id_personne")
	private int idPersonne;

	private String login;

	private String mdp;

	public Authentification() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getIdPersonne() {
		return this.idPersonne;
	}

	public void setIdPersonne(int idPersonne) {
		this.idPersonne = idPersonne;
	}

	public String getLogin() {
		return this.login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getMdp() {
		return this.mdp;
	}

	public void setMdp(String mdp) {
		this.mdp = mdp;
	}

}