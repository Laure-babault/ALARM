package com.alarm.dto.implementations;

import java.sql.Timestamp;

import com.alarm.dto.interfaces.Dto;
import com.alarm.entity.Crex;

public class CrexDto implements Dto<Crex>{

	private int id;

	private Timestamp dateDebut;

	private Timestamp dateFin;

	private byte isArchive;

	
}
