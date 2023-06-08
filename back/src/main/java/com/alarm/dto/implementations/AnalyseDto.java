package com.alarm.dto.implementations;

import com.alarm.dto.interfaces.Dto;
import com.alarm.entity.Analyse;

public class AnalyseDto implements Dto<Analyse>{
	
	private int id;

	private String actionPremiere;

	private String defenseManquante;

	private int enumGravite;

	private int enumNiveauMaitrise;

	private int enumOccurrence;

	private int enumTypeMedicament;

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

	public int getEnumGravite() {
		return enumGravite;
	}

	public void setEnumGravite(int enumGravite) {
		this.enumGravite = enumGravite;
	}

	public int getEnumNiveauMaitrise() {
		return enumNiveauMaitrise;
	}

	public void setEnumNiveauMaitrise(int enumNiveauMaitrise) {
		this.enumNiveauMaitrise = enumNiveauMaitrise;
	}

	public int getEnumOccurrence() {
		return enumOccurrence;
	}

	public void setEnumOccurrence(int enumOccurrence) {
		this.enumOccurrence = enumOccurrence;
	}

	public int getEnumTypeMedicament() {
		return enumTypeMedicament;
	}

	public void setEnumTypeMedicament(int enumTypeMedicament) {
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
