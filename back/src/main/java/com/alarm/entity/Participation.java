package com.alarm.entity;

import java.io.Serializable;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.NamedQuery;


/**
 * The persistent class for the Participation database table.
 * 
 */
@Entity
@NamedQuery(name="Participation.findAll", query="SELECT p FROM Participation p")
public class Participation implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private ParticipationPK id;

	public Participation() {
	}

	public ParticipationPK getId() {
		return this.id;
	}

	public void setId(ParticipationPK id) {
		this.id = id;
	}

}