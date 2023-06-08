package com.alarm.dto.implementations;

import com.alarm.dto.interfaces.Dto;
import com.alarm.entity.Personne;

public class PersonneDto implements Dto<Personne>{

	private int id;

	private String fonction;

	private String nom;

	private String prenom;
	
}
