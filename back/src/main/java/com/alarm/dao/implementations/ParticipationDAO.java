package com.alarm.dao.implementations;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.alarm.dao.interfaces.InterfaceParticipationDAO;
import com.alarm.entity.Participation;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

@Repository
public class ParticipationDAO implements InterfaceParticipationDAO{
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public Participation getById(int id) {
		// TODO Auto-generated method stub
		return entityManager.find(Participation.class, id);
	}

	@Override
	public List<Participation> getAll() {
		// TODO Auto-generated method stub
		String jpql = "SELECT p FROM Participation p";
		TypedQuery<Participation> query = entityManager.createQuery(jpql, Participation.class);
		return query.getResultList();
	}

	@Override
	public void addParticipation(Participation participation) {
		// TODO Auto-generated method stub
		entityManager.persist(participation);
	}

	@Override
	public void updateParticipation(Participation participation) {
		// TODO Auto-generated method stub
		entityManager.merge(participation);
	}


}
