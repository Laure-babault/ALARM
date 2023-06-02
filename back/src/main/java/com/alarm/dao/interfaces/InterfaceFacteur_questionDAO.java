package com.alarm.dao.interfaces;

import java.util.List;

import com.alarm.entity.Facteur_question;

public interface InterfaceFacteur_questionDAO {
	
	Facteur_question getById(int id);

	List<Facteur_question> getAll();

	void addFacteurQuestion(Facteur_question facteur_question);

	void updateFacteurQuestion(Facteur_question facteur_question);

}
