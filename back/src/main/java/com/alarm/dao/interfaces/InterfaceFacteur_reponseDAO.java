package com.alarm.dao.interfaces;

import java.util.List;

import com.alarm.entity.Facteur_reponse;

public interface InterfaceFacteur_reponseDAO {
	
	Facteur_reponse getById(int id);

	List<Facteur_reponse> getAll();

	void addFacteurReponse(Facteur_reponse facteur_reponse);

	void updateFacteurReponse(Facteur_reponse facteur_reponse);

}
