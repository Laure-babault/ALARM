package com.alarm.dao.implementations;

import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.alarm.dao.interfaces.InterfacePersonneDAO;
import com.alarm.entity.Personne;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

@Component
public class PersonneDAO implements InterfacePersonneDAO{
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public Personne getById(int id) {
		// TODO Auto-generated method stub
		return entityManager.find(Personne.class, id);
	}

	@Override
	public List<Personne> getAll() {
		// TODO Auto-generated method stub
		String jpql = "SELECT p FROM Personne p";
		TypedQuery<Personne> query = entityManager.createQuery(jpql, Personne.class);
		return query.getResultList();
	}

	@Override
	public void addPersonne(Personne personne) {
		// TODO Auto-generated method stub
		entityManager.persist(personne);
	}

	@Override
	public void updatePersonne(Personne personne) {
		// TODO Auto-generated method stub
		entityManager.merge(personne);
	}

	
}
