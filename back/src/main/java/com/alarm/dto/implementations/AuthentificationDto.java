package com.alarm.dto.implementations;

import com.alarm.dto.interfaces.Dto;
import com.alarm.entity.Authentification;

public class AuthentificationDto implements Dto<Authentification>{
	
	private int id;

	private int idPersonne;

	private String login;

	private String mdp;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getIdPersonne() {
		return idPersonne;
	}

	public void setIdPersonne(int idPersonne) {
		this.idPersonne = idPersonne;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getMdp() {
		return mdp;
	}

	public void setMdp(String mdp) {
		this.mdp = mdp;
	}
	
}
