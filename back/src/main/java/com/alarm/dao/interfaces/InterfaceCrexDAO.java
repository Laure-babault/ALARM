package com.alarm.dao.interfaces;

import java.util.List;

import com.alarm.entity.Crex;

public interface InterfaceCrexDAO {

	Crex getById(int id);

	List<Crex> getAll();

	void addAnalyse(Crex analyse);

	void updateAnalyse(Crex analyse);

}
