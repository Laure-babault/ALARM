package com.alarm.dao.interfaces;

import java.util.List;

import com.alarm.entity.Action_question;

public interface InterfaceActionQuestionDAO {

	Action_question getById(int id);

	List<Action_question> getAll();

	void addActionQuestion(Action_question action_question);

	void updateActionQuestion(Action_question action_question);

}
