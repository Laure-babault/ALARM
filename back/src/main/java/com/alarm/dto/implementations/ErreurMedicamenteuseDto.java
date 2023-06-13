package com.alarm.dto.implementations;

import java.sql.Timestamp;

import com.alarm.dto.interfaces.Dto;
import com.alarm.entity.Erreur_medicamenteuse;
import com.alarm.enumerations.EnumDegreRealisation;
import com.alarm.enumerations.EnumStatut;

public class ErreurMedicamenteuseDto implements Dto<Erreur_medicamenteuse>{
	
	private int id;

	private String commentaireEtatPatient;

	private String commentaireVoieAdministration;

	private Timestamp dateDeclaration;

	private Timestamp dateEvenement;

	private String descriptionEvenement;

	private String descriptionImpact;

	private EnumDegreRealisation enumDegreRealisation;

	private EnumStatut enumStatut;

	private int idCrex;

	private int idEtapeCircuitMedicament;

	private int idService;

	private boolean isPatientRisque;

	private boolean isVoieAdministrationRisque;

	private String libelleMedicament;

	private String nomReporteur;

	private int numCategorieMedicament;

	private String prenomReporteur;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCommentaireEtatPatient() {
		return commentaireEtatPatient;
	}

	public void setCommentaireEtatPatient(String commentaireEtatPatient) {
		this.commentaireEtatPatient = commentaireEtatPatient;
	}

	public String getCommentaireVoieAdministration() {
		return commentaireVoieAdministration;
	}

	public void setCommentaireVoieAdministration(String commentaireVoieAdministration) {
		this.commentaireVoieAdministration = commentaireVoieAdministration;
	}

	public Timestamp getDateDeclaration() {
		return dateDeclaration;
	}

	public void setDateDeclaration(Timestamp dateDeclaration) {
		this.dateDeclaration = dateDeclaration;
	}

	public Timestamp getDateEvenement() {
		return dateEvenement;
	}

	public void setDateEvenement(Timestamp dateEvenement) {
		this.dateEvenement = dateEvenement;
	}

	public String getDescriptionEvenement() {
		return descriptionEvenement;
	}

	public void setDescriptionEvenement(String descriptionEvenement) {
		this.descriptionEvenement = descriptionEvenement;
	}

	public String getDescriptionImpact() {
		return descriptionImpact;
	}

	public void setDescriptionImpact(String descriptionImpact) {
		this.descriptionImpact = descriptionImpact;
	}

	public EnumDegreRealisation getEnumDegreRealisation() {
		return enumDegreRealisation;
	}

	public void setEnumDegreRealisation(EnumDegreRealisation enumDegreRealisation) {
		this.enumDegreRealisation = enumDegreRealisation;
	}

	public EnumStatut getEnumStatut() {
		return enumStatut;
	}

	public void setEnumStatut(EnumStatut enumStatut) {
		this.enumStatut = enumStatut;
	}

	public int getIdCrex() {
		return idCrex;
	}

	public void setIdCrex(int idCrex) {
		this.idCrex = idCrex;
	}

	public int getIdEtapeCircuitMedicament() {
		return idEtapeCircuitMedicament;
	}

	public void setIdEtapeCircuitMedicament(int idEtapeCircuitMedicament) {
		this.idEtapeCircuitMedicament = idEtapeCircuitMedicament;
	}

	public int getIdService() {
		return idService;
	}

	public void setIdService(int idService) {
		this.idService = idService;
	}

	public boolean isPatientRisque() {
		return isPatientRisque;
	}

	public void setPatientRisque(boolean isPatientRisque) {
		this.isPatientRisque = isPatientRisque;
	}

	public boolean isVoieAdministrationRisque() {
		return isVoieAdministrationRisque;
	}

	public void setVoieAdministrationRisque(boolean isVoieAdministrationRisque) {
		this.isVoieAdministrationRisque = isVoieAdministrationRisque;
	}

	public String getLibelleMedicament() {
		return libelleMedicament;
	}

	public void setLibelleMedicament(String libelleMedicament) {
		this.libelleMedicament = libelleMedicament;
	}

	public String getNomReporteur() {
		return nomReporteur;
	}

	public void setNomReporteur(String nomReporteur) {
		this.nomReporteur = nomReporteur;
	}

	public int getNumCategorieMedicament() {
		return numCategorieMedicament;
	}

	public void setNumCategorieMedicament(int numCategorieMedicament) {
		this.numCategorieMedicament = numCategorieMedicament;
	}

	public String getPrenomReporteur() {
		return prenomReporteur;
	}

	public void setPrenomReporteur(String prenomReporteur) {
		this.prenomReporteur = prenomReporteur;
	}

}
