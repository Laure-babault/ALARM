package com.alarm.dao.interfaces;

import java.util.List;

import com.alarm.entity.Erreur_medicamenteuse;

public interface InterfaceErreurMedicamenteuseDAO {
	
	Erreur_medicamenteuse getById(int id);
	
	List<Erreur_medicamenteuse> getAll(); 
	
	void addErreurMedicamenteuse(Erreur_medicamenteuse erreur_medicamenteuse);
	
	void updateErreurMedicamenteuse(Erreur_medicamenteuse erreur_medicamenteuse);

}
