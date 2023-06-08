package com.alarm.dto.implementations;

import java.sql.Timestamp;

import com.alarm.dto.interfaces.Dto;
import com.alarm.entity.Erreur_medicamenteuse;

public class ErreurMedicamenteuseDto implements Dto<Erreur_medicamenteuse>{
	
	private int id;

	private String commentaireEtatPatient;

	private String commentaireVoieAdministration;

	private Timestamp dateDeclaration;

	private Timestamp dateEvenement;

	private String descriptionEvenement;

	private String descriptionImpact;

	private int enumDegreRealisation;

	private int enumStatut;

	private int idCrex;

	private int idEtapeCircuitMedicament;

	private int idService;

	private byte isPatientRisque;

	private byte isVoieAdministrationRisque;

	private String libelleMedicament;

	private String nomReporteur;

	private int numCategorieMedicament;

	private String prenomReporteur;

}
