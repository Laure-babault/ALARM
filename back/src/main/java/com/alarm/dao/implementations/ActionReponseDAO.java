package com.alarm.dao.implementations;

import java.util.List;

import com.alarm.dao.interfaces.InterfaceActionReponseDAO;
import com.alarm.entity.Action_reponse;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

public class ActionReponseDAO implements InterfaceActionReponseDAO{
	
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public Action_reponse getById(int id) {
		// TODO Auto-generated method stub
		return entityManager.find(Action_reponse.class, id);
	}

	@Override
	public List<Action_reponse> getAll() {
		// TODO Auto-generated method stub
		String jpql = "SELECT a FROM Action_reponse a";
		TypedQuery<Action_reponse> query = entityManager.createQuery(jpql, Action_reponse.class);
		return query.getResultList();
	}

	@Override
	public void addActionReponse(Action_reponse action_response) {
		// TODO Auto-generated method stub
		entityManager.persist(action_response);
	}

	@Override
	public void updateActionReponse(Action_reponse action_response) {
		// TODO Auto-generated method stub
		entityManager.merge(action_response);
	}

}
