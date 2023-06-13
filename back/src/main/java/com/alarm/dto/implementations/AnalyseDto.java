package com.alarm.dto.implementations;

import com.alarm.dto.interfaces.Dto;
import com.alarm.entity.Analyse;
import com.alarm.enumerations.EnumGravite;
import com.alarm.enumerations.EnumNiveauMaitrise;
import com.alarm.enumerations.EnumOccurrence;
import com.alarm.enumerations.EnumTypeMedicament;

import jakarta.persistence.Column;

public class AnalyseDto implements Dto<Analyse>{
	
	private int id;

	private String actionPremiere;

	private String defenseManquante;

	private EnumGravite enumGravite;

	private EnumNiveauMaitrise enumNiveauMaitrise;

	private EnumOccurrence enumOccurrence;

	private EnumTypeMedicament enumTypeMedicament;

	private String eviteEm;

	private int idErreurMedicamenteuse;

	private String libelleDysfonctionnement;
	
	private String libelleProbleme;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getActionPremiere() {
		return actionPremiere;
	}

	public void setActionPremiere(String actionPremiere) {
		this.actionPremiere = actionPremiere;
	}

	public String getDefenseManquante() {
		return defenseManquante;
	}

	public void setDefenseManquante(String defenseManquante) {
		this.defenseManquante = defenseManquante;
	}

	public EnumGravite getEnumGravite() {
		return enumGravite;
	}

	public void setEnumGravite(EnumGravite enumGravite) {
		this.enumGravite = enumGravite;
	}

	public EnumNiveauMaitrise getEnumNiveauMaitrise() {
		return enumNiveauMaitrise;
	}

	public void setEnumNiveauMaitrise(EnumNiveauMaitrise enumNiveauMaitrise) {
		this.enumNiveauMaitrise = enumNiveauMaitrise;
	}

	public EnumOccurrence getEnumOccurrence() {
		return enumOccurrence;
	}

	public void setEnumOccurrence(EnumOccurrence enumOccurrence) {
		this.enumOccurrence = enumOccurrence;
	}

	public EnumTypeMedicament getEnumTypeMedicament() {
		return enumTypeMedicament;
	}

	public void setEnumTypeMedicament(EnumTypeMedicament enumTypeMedicament) {
		this.enumTypeMedicament = enumTypeMedicament;
	}

	public String getEviteEm() {
		return eviteEm;
	}

	public void setEviteEm(String eviteEm) {
		this.eviteEm = eviteEm;
	}

	public int getIdErreurMedicamenteuse() {
		return idErreurMedicamenteuse;
	}

	public void setIdErreurMedicamenteuse(int idErreurMedicamenteuse) {
		this.idErreurMedicamenteuse = idErreurMedicamenteuse;
	}

	public String getLibelleDysfonctionnement() {
		return libelleDysfonctionnement;
	}

	public void setLibelleDysfonctionnement(String libelleDysfonctionnement) {
		this.libelleDysfonctionnement = libelleDysfonctionnement;
	}

	public String getLibelleProbleme() {
		return libelleProbleme;
	}

	public void setLibelleProbleme(String libelleProbleme) {
		this.libelleProbleme = libelleProbleme;
	}

}
