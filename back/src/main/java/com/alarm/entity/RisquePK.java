package com.alarm.entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

/**
 * The primary key class for the Risque database table.
 * 
 */
@Embeddable
public class RisquePK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@Column(name="id_never_event")
	private int idNeverEvent;

	@Column(name="id_erreur_medicamenteuse")
	private int idErreurMedicamenteuse;

	public RisquePK() {
	}
	public int getIdNeverEvent() {
		return this.idNeverEvent;
	}
	public void setIdNeverEvent(int idNeverEvent) {
		this.idNeverEvent = idNeverEvent;
	}
	public int getIdErreurMedicamenteuse() {
		return this.idErreurMedicamenteuse;
	}
	public void setIdErreurMedicamenteuse(int idErreurMedicamenteuse) {
		this.idErreurMedicamenteuse = idErreurMedicamenteuse;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof RisquePK)) {
			return false;
		}
		RisquePK castOther = (RisquePK)other;
		return 
			(this.idNeverEvent == castOther.idNeverEvent)
			&& (this.idErreurMedicamenteuse == castOther.idErreurMedicamenteuse);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.idNeverEvent;
		hash = hash * prime + this.idErreurMedicamenteuse;
		
		return hash;
	}
}