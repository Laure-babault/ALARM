package com.alarm.dto.implementations;

import com.alarm.dto.interfaces.Dto;
import com.alarm.entity.Facteur_reponse;

public class FacteurReponseDto implements Dto<Facteur_reponse>{

	private FacteurReponsePkDto id;

	private int numLigne;

	private String reponse;

}
