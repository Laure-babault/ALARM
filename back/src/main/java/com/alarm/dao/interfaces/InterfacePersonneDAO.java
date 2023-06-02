package com.alarm.dao.interfaces;

import java.util.List;

import com.alarm.entity.Personne;

public interface InterfacePersonneDAO {
	
	Personne getById(int id);

	List<Personne> getAll();

	void addPersonne(Personne personne);

	void updatePersonne(Personne personne);

}
