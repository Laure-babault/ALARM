package com.alarm.dao.interfaces;

import java.util.List;

import com.alarm.entity.Authentification;

public interface InterfaceAuthentificationDAO {
	Authentification getById(int id);

	List<Authentification> getAll();

	void addAuthentification(Authentification authentification);

	void updateAuthentification(Authentification authentification);
}
