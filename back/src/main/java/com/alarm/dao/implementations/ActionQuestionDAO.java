package com.alarm.dao.implementations;

import java.util.List;

import org.springframework.stereotype.Component;

import com.alarm.dao.interfaces.InterfaceActionQuestionDAO;
import com.alarm.entity.Action_question;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

@Component
public class ActionQuestionDAO implements InterfaceActionQuestionDAO{
	
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public Action_question getById(int id) {
		// TODO Auto-generated method stub
		return entityManager.find(Action_question.class, id);
	}

	@Override
	public List<Action_question> getAll() {
		// TODO Auto-generated method stub
		String jpql = "SELECT a FROM Action_question a";
		TypedQuery<Action_question> query = entityManager.createQuery(jpql, Action_question.class);
		return query.getResultList();
	}

	@Override
	public void addActionQuestion(Action_question action_question) {
		// TODO Auto-generated method stub
		entityManager.persist(action_question);
	}

	@Override
	public void updateActionQuestion(Action_question action_question) {
		// TODO Auto-generated method stub
		entityManager.merge(action_question);
	}

}
