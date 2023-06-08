package com.alarm.dto.implementations;

import com.alarm.dto.interfaces.Dto;
import com.alarm.entity.Authentification;

public class AuthentificationDto implements Dto<Authentification>{
	
	private int id;

	private int idPersonne;

	private String login;

	private String mdp;
	
}
