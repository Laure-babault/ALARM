package com.alarm.dto.implementations;

import com.alarm.dto.interfaces.Dto;
import com.alarm.entity.Risque;

public class RisqueDto implements Dto<Risque>{
	
	private RisquePkDto id;

	public RisquePkDto getId() {
		return id;
	}

	public void setId(RisquePkDto id) {
		this.id = id;
	}

}
