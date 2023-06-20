package com.alarm.dao.implementations;

import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.alarm.dao.interfaces.InterfaceRisqueDAO;
import com.alarm.entity.Risque;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

@Component
public class RisqueDAO implements InterfaceRisqueDAO{
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public Risque getById(int id) {
		// TODO Auto-generated method stub
		return entityManager.find(Risque.class, id);
	}

	@Override
	public List<Risque> getAll() {
		// TODO Auto-generated method stub
		String jpql = "SELECT r FROM Risque r";
		TypedQuery<Risque> query = entityManager.createQuery(jpql, Risque.class);
		return query.getResultList();
	}

	@Override
	public void addRisque(Risque risque) {
		// TODO Auto-generated method stub
		entityManager.persist(risque);
	}

	@Override
	public void updateRisque(Risque risque) {
		// TODO Auto-generated method stub
		entityManager.merge(risque);
	}

	
}
