package com.alarm.entity;

import java.io.Serializable;
import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.NamedQuery;


/**
 * The persistent class for the Erreur_medicamenteuse database table.
 * 
 */
@Entity
@NamedQuery(name="Erreur_medicamenteuse.findAll", query="SELECT e FROM Erreur_medicamenteuse e")
public class Erreur_medicamenteuse implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int id;

	@Column(name="commentaire_etat_patient")
	private String commentaireEtatPatient;

	@Column(name="commentaire_voie_administration")
	private String commentaireVoieAdministration;

	@Column(name="date_declaration")
	private Timestamp dateDeclaration;

	@Column(name="date_evenement")
	private Timestamp dateEvenement;

	@Column(name="description_evenement")
	private String descriptionEvenement;

	@Column(name="description_impact")
	private String descriptionImpact;

	@Column(name="enum_degre_realisation")
	private int enumDegreRealisation;

	@Column(name="enum_statut")
	private int enumStatut;

	@Column(name="id_crex")
	private int idCrex;

	@Column(name="id_etape_circuit_medicament")
	private int idEtapeCircuitMedicament;

	@Column(name="id_service")
	private int idService;

	@Column(name="is_patient_risque")
	private byte isPatientRisque;

	@Column(name="is_voie_administration_risque")
	private byte isVoieAdministrationRisque;

	@Column(name="libelle_medicament")
	private String libelleMedicament;

	@Column(name="nom_reporteur")
	private String nomReporteur;

	@Column(name="num_categorie_medicament")
	private int numCategorieMedicament;

	@Column(name="prenom_reporteur")
	private String prenomReporteur;

	public Erreur_medicamenteuse() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCommentaireEtatPatient() {
		return this.commentaireEtatPatient;
	}

	public void setCommentaireEtatPatient(String commentaireEtatPatient) {
		this.commentaireEtatPatient = commentaireEtatPatient;
	}

	public String getCommentaireVoieAdministration() {
		return this.commentaireVoieAdministration;
	}

	public void setCommentaireVoieAdministration(String commentaireVoieAdministration) {
		this.commentaireVoieAdministration = commentaireVoieAdministration;
	}

	public Timestamp getDateDeclaration() {
		return this.dateDeclaration;
	}

	public void setDateDeclaration(Timestamp dateDeclaration) {
		this.dateDeclaration = dateDeclaration;
	}

	public Timestamp getDateEvenement() {
		return this.dateEvenement;
	}

	public void setDateEvenement(Timestamp dateEvenement) {
		this.dateEvenement = dateEvenement;
	}

	public String getDescriptionEvenement() {
		return this.descriptionEvenement;
	}

	public void setDescriptionEvenement(String descriptionEvenement) {
		this.descriptionEvenement = descriptionEvenement;
	}

	public String getDescriptionImpact() {
		return this.descriptionImpact;
	}

	public void setDescriptionImpact(String descriptionImpact) {
		this.descriptionImpact = descriptionImpact;
	}

	public int getEnumDegreRealisation() {
		return this.enumDegreRealisation;
	}

	public void setEnumDegreRealisation(int enumDegreRealisation) {
		this.enumDegreRealisation = enumDegreRealisation;
	}

	public int getEnumStatut() {
		return this.enumStatut;
	}

	public void setEnumStatut(int enumStatut) {
		this.enumStatut = enumStatut;
	}

	public int getIdCrex() {
		return this.idCrex;
	}

	public void setIdCrex(int idCrex) {
		this.idCrex = idCrex;
	}

	public int getIdEtapeCircuitMedicament() {
		return this.idEtapeCircuitMedicament;
	}

	public void setIdEtapeCircuitMedicament(int idEtapeCircuitMedicament) {
		this.idEtapeCircuitMedicament = idEtapeCircuitMedicament;
	}

	public int getIdService() {
		return this.idService;
	}

	public void setIdService(int idService) {
		this.idService = idService;
	}

	public byte getIsPatientRisque() {
		return this.isPatientRisque;
	}

	public void setIsPatientRisque(byte isPatientRisque) {
		this.isPatientRisque = isPatientRisque;
	}

	public byte getIsVoieAdministrationRisque() {
		return this.isVoieAdministrationRisque;
	}

	public void setIsVoieAdministrationRisque(byte isVoieAdministrationRisque) {
		this.isVoieAdministrationRisque = isVoieAdministrationRisque;
	}

	public String getLibelleMedicament() {
		return this.libelleMedicament;
	}

	public void setLibelleMedicament(String libelleMedicament) {
		this.libelleMedicament = libelleMedicament;
	}

	public String getNomReporteur() {
		return this.nomReporteur;
	}

	public void setNomReporteur(String nomReporteur) {
		this.nomReporteur = nomReporteur;
	}

	public int getNumCategorieMedicament() {
		return this.numCategorieMedicament;
	}

	public void setNumCategorieMedicament(int numCategorieMedicament) {
		this.numCategorieMedicament = numCategorieMedicament;
	}

	public String getPrenomReporteur() {
		return this.prenomReporteur;
	}

	public void setPrenomReporteur(String prenomReporteur) {
		this.prenomReporteur = prenomReporteur;
	}

}