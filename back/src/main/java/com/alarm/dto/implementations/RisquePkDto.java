package com.alarm.dto.implementations;

import com.alarm.dto.interfaces.Dto;
import com.alarm.entity.RisquePK;

import jakarta.persistence.Column;

public class RisquePkDto implements Dto<RisquePK>{

	private int idNeverEvent;

	private int idErreurMedicamenteuse;
	
}
