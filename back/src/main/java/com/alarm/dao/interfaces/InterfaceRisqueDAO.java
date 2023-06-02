package com.alarm.dao.interfaces;

import java.util.List;

import com.alarm.entity.Risque;

public interface InterfaceRisqueDAO {
	
	Risque getById(int id);

	List<Risque> getAll();

	void addRisque(Risque risque);

	void updateRisque(Risque risque);

}
