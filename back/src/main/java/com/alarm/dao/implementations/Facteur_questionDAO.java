package com.alarm.dao.implementations;

import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.alarm.dao.interfaces.InterfaceFacteur_questionDAO;
import com.alarm.entity.Facteur_question;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

@Component
public class Facteur_questionDAO implements InterfaceFacteur_questionDAO {
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public Facteur_question getById(int id) {
		// TODO Auto-generated method stub
		return entityManager.find(Facteur_question.class, id);
	}

	@Override
	public List<Facteur_question> getAll() {
		// TODO Auto-generated method stub
		String jpql = "SELECT f FROM Facteur_question f";
		TypedQuery<Facteur_question> query = entityManager.createQuery(jpql, Facteur_question.class);
		return query.getResultList();
	}

	@Override
	public void addFacteurQuestion(Facteur_question facteur_question) {
		// TODO Auto-generated method stub
		entityManager.persist(facteur_question);
	}

	@Override
	public void updateFacteurQuestion(Facteur_question facteur_question) {
		// TODO Auto-generated method stub
		entityManager.merge(facteur_question);
	}


}
