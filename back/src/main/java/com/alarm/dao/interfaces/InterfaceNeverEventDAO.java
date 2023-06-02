package com.alarm.dao.interfaces;

import java.util.List;

import com.alarm.entity.NeverEvent;

public interface InterfaceNeverEventDAO {
	
	NeverEvent getById(int id);

	List<NeverEvent> getAll();

	void addNeverEvent(NeverEvent neverEvent);

	void updateNeverEvent(NeverEvent neverEvent);

}
