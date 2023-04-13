package com.alarm.entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

/**
 * The primary key class for the Participation database table.
 * 
 */
@Embeddable
public class ParticipationPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@Column(name="id_personne")
	private int idPersonne;

	@Column(name="id_crex")
	private int idCrex;

	public ParticipationPK() {
	}
	public int getIdPersonne() {
		return this.idPersonne;
	}
	public void setIdPersonne(int idPersonne) {
		this.idPersonne = idPersonne;
	}
	public int getIdCrex() {
		return this.idCrex;
	}
	public void setIdCrex(int idCrex) {
		this.idCrex = idCrex;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof ParticipationPK)) {
			return false;
		}
		ParticipationPK castOther = (ParticipationPK)other;
		return 
			(this.idPersonne == castOther.idPersonne)
			&& (this.idCrex == castOther.idCrex);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.idPersonne;
		hash = hash * prime + this.idCrex;
		
		return hash;
	}
}