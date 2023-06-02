package com.alarm.dao.interfaces;

import java.util.List;

import com.alarm.entity.Participation;

public interface InterfaceParticipationDAO {
	
	Participation getById(int id);

	List<Participation> getAll();

	void addParticipation(Participation participation);

	void updateParticipation(Participation participation);

}
