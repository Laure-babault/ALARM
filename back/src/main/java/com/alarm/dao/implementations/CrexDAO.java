package com.alarm.dao.implementations;

import java.util.List;

import com.alarm.dao.interfaces.InterfaceCrexDAO;
import com.alarm.entity.Crex;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

public class CrexDAO implements InterfaceCrexDAO {
	
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public Crex getById(int id) {
		// TODO Auto-generated method stub
		return entityManager.find(Crex.class, id);
	}

	@Override
	public List<Crex> getAll() {
		// TODO Auto-generated method stub
		String jpql = "SELECT c FROM Crex c";
		TypedQuery<Crex> query = entityManager.createQuery(jpql, Crex.class);
		return query.getResultList();
	}	

	@Override
	public void addCrex(Crex crex) {
		// TODO Auto-generated method stub
		entityManager.persist(crex);
	}

	@Override
	public void updateCrex(Crex crex) {
		// TODO Auto-generated method stub
		entityManager.merge(crex);
	}

}
