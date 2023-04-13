package com.alarm.entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.NamedQuery;


/**
 * The persistent class for the Analyse database table.
 * 
 */
@Entity
@NamedQuery(name="Analyse.findAll", query="SELECT a FROM Analyse a")
public class Analyse implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int id;

	@Column(name="action_premiere")
	private String actionPremiere;

	@Column(name="defense_manquante")
	private String defenseManquante;

	@Column(name="enum_gravite")
	private int enumGravite;

	@Column(name="enum_niveau_maitrise")
	private int enumNiveauMaitrise;

	@Column(name="enum_occurrence")
	private int enumOccurrence;

	@Column(name="enum_type_medicament")
	private int enumTypeMedicament;

	@Column(name="evite_em")
	private String eviteEm;

	@Column(name="id_erreur_medicamenteuse")
	private int idErreurMedicamenteuse;

	@Column(name="libelle_dysfonctionnement")
	private String libelleDysfonctionnement;

	@Column(name="libelle_probleme")
	private String libelleProbleme;

	public Analyse() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getActionPremiere() {
		return this.actionPremiere;
	}

	public void setActionPremiere(String actionPremiere) {
		this.actionPremiere = actionPremiere;
	}

	public String getDefenseManquante() {
		return this.defenseManquante;
	}

	public void setDefenseManquante(String defenseManquante) {
		this.defenseManquante = defenseManquante;
	}

	public int getEnumGravite() {
		return this.enumGravite;
	}

	public void setEnumGravite(int enumGravite) {
		this.enumGravite = enumGravite;
	}

	public int getEnumNiveauMaitrise() {
		return this.enumNiveauMaitrise;
	}

	public void setEnumNiveauMaitrise(int enumNiveauMaitrise) {
		this.enumNiveauMaitrise = enumNiveauMaitrise;
	}

	public int getEnumOccurrence() {
		return this.enumOccurrence;
	}

	public void setEnumOccurrence(int enumOccurrence) {
		this.enumOccurrence = enumOccurrence;
	}

	public int getEnumTypeMedicament() {
		return this.enumTypeMedicament;
	}

	public void setEnumTypeMedicament(int enumTypeMedicament) {
		this.enumTypeMedicament = enumTypeMedicament;
	}

	public String getEviteEm() {
		return this.eviteEm;
	}

	public void setEviteEm(String eviteEm) {
		this.eviteEm = eviteEm;
	}

	public int getIdErreurMedicamenteuse() {
		return this.idErreurMedicamenteuse;
	}

	public void setIdErreurMedicamenteuse(int idErreurMedicamenteuse) {
		this.idErreurMedicamenteuse = idErreurMedicamenteuse;
	}

	public String getLibelleDysfonctionnement() {
		return this.libelleDysfonctionnement;
	}

	public void setLibelleDysfonctionnement(String libelleDysfonctionnement) {
		this.libelleDysfonctionnement = libelleDysfonctionnement;
	}

	public String getLibelleProbleme() {
		return this.libelleProbleme;
	}

	public void setLibelleProbleme(String libelleProbleme) {
		this.libelleProbleme = libelleProbleme;
	}

}