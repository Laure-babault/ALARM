package com.alarm.dao.interfaces;

import java.util.List;

import com.alarm.entity.Action_question;

public interface InterfaceActionQuestionDAO {

	Action_question getById(int id);

	List<Action_question> getAll();

	void addAnalyse(Action_question analyse);

	void updateAnalyse(Action_question analyse);

}
