package com.alarm.dao.interfaces;

import java.util.List;

import com.alarm.entity.Crex;

public interface InterfaceCrexDAO {

	Crex getById(int id);

	List<Crex> getAll();

	void addCrex(Crex crex);

	void updateCrex(Crex crex);

}
