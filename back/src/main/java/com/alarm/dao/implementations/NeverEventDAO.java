package com.alarm.dao.implementations;

import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.alarm.dao.interfaces.InterfaceNeverEventDAO;
import com.alarm.entity.NeverEvent;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

@Component
public class NeverEventDAO implements InterfaceNeverEventDAO{
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public NeverEvent getById(int id) {
		// TODO Auto-generated method stub
		return entityManager.find(NeverEvent.class, id);
	}

	@Override
	public List<NeverEvent> getAll() {
		// TODO Auto-generated method stub
		String jpql = "SELECT n FROM NeverEvent n";
		TypedQuery<NeverEvent> query = entityManager.createQuery(jpql, NeverEvent.class);
		return query.getResultList();
	}

	@Override
	public void addNeverEvent(NeverEvent neverEvent) {
		// TODO Auto-generated method stub
		entityManager.persist(neverEvent);
	}

	@Override
	public void updateNeverEvent(NeverEvent neverEvent) {
		// TODO Auto-generated method stub
		entityManager.merge(neverEvent);
	}


}
