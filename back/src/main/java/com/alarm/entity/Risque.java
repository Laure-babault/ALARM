package com.alarm.entity;

import java.io.Serializable;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.NamedQuery;


/**
 * The persistent class for the Risque database table.
 * 
 */
@Entity
@NamedQuery(name="Risque.findAll", query="SELECT r FROM Risque r")
public class Risque implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private RisquePK id;

	public Risque() {
	}

	public RisquePK getId() {
		return this.id;
	}

	public void setId(RisquePK id) {
		this.id = id;
	}

}