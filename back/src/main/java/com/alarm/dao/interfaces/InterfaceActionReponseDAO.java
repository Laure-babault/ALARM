package com.alarm.dao.interfaces;

import java.util.List;

import com.alarm.entity.Action_reponse;

public interface InterfaceActionReponseDAO {
	
	Action_reponse getById(int id);

	List<Action_reponse> getAll();

	void addAnalyse(Action_reponse analyse);

	void updateAnalyse(Action_reponse analyse);

}
