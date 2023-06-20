package com.alarm.dao.implementations;

import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.alarm.dao.interfaces.InterfaceAuthentificationDAO;
import com.alarm.entity.Authentification;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

@Component
public class AuthentificationDAO implements InterfaceAuthentificationDAO{
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public Authentification getById(int id) {
		// TODO Auto-generated method stub
		return entityManager.find(Authentification.class, id);
	}

	@Override
	public List<Authentification> getAll() {
		// TODO Auto-generated method stub
		String jpql = "SELECT c FROM Authentification c";
		TypedQuery<Authentification> query = entityManager.createQuery(jpql, Authentification.class);
		return query.getResultList();
	}	

	@Override
	public void addAuthentification(Authentification authentification) {
		// TODO Auto-generated method stub
		entityManager.persist(authentification);
	}

	@Override
	public void updateAuthentification(Authentification authentification) {
		// TODO Auto-generated method stub
		entityManager.merge(authentification);
	}
}
