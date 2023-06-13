package com.alarm.dto.implementations;

import com.alarm.dto.interfaces.Dto;
import com.alarm.entity.Participation;
import com.alarm.entity.ParticipationPK;

public class ParticipationDto implements Dto<Participation>{
	
	private ParticipationPK id;

	public ParticipationPK getId() {
		return id;
	}

	public void setId(ParticipationPK id) {
		this.id = id;
	}

}
