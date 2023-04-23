package com.alarm.dao.interfaces;

import java.util.List;

import com.alarm.entity.Erreur_medicamenteuse;

public interface InterfaceErreurMedicamenteuseDAO {
	
	Erreur_medicamenteuse getById(int id);
	
	List<Erreur_medicamenteuse> getAll(); 
	
	void addAnalyse(Erreur_medicamenteuse analyse);
	
	void updateAnalyse(Erreur_medicamenteuse analyse);

}
