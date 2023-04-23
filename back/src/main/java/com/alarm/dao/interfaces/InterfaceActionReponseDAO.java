package com.alarm.dao.interfaces;

import java.util.List;

import com.alarm.entity.Action_reponse;

public interface InterfaceActionReponseDAO {
	
	Action_reponse getById(int id);

	List<Action_reponse> getAll();

	void addActionReponse(Action_reponse action_response);

	void updateActionReponse(Action_reponse action_response);

}
