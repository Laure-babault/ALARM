package com.alarm.dao.interfaces;

import java.util.List;

import com.alarm.entity.Analyse;

public interface InterfaceAnalyseDAO{
	
	Analyse getById(int id);
	
	List<Analyse> getAll(); 
	
	void addAnalyse(Analyse analyse);
	
	void updateAnalyse(Analyse analyse);
	
}
