package com.alarm.dao.implementations;

import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.alarm.dao.interfaces.InterfaceFacteur_reponseDAO;
import com.alarm.entity.Facteur_reponse;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

@Component
public class Facteur_reponseDAO implements InterfaceFacteur_reponseDAO{
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public Facteur_reponse getById(int id) {
		// TODO Auto-generated method stub
		return entityManager.find(Facteur_reponse.class, id);
	}

	@Override
	public List<Facteur_reponse> getAll() {
		// TODO Auto-generated method stub
		String jpql = "SELECT f FROM Facteur_reponse f";
		TypedQuery<Facteur_reponse> query = entityManager.createQuery(jpql, Facteur_reponse.class);
		return query.getResultList();
	}

	@Override
	public void addFacteurReponse(Facteur_reponse facteur_reponse) {
		// TODO Auto-generated method stub
		entityManager.persist(facteur_reponse);
	}

	@Override
	public void updateFacteurReponse(Facteur_reponse facteur_reponse) {
		// TODO Auto-generated method stub
		entityManager.merge(facteur_reponse);
	}
	
}


