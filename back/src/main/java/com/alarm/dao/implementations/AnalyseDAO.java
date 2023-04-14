package com.alarm.dao.implementations;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.alarm.dao.interfaces.InterfaceAnalyseDAO;
import com.alarm.entity.Analyse;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

@Repository
public class AnalyseDAO implements InterfaceAnalyseDAO{
	
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public Analyse getById(int id) {
		// TODO Auto-generated method stub
		return entityManager.find(Analyse.class, id);
	}

	@Override
	public List<Analyse> getAll() {
		// TODO Auto-generated method stub
		String jpql = "SELECT a FROM Analyse a";
		TypedQuery<Analyse> query = entityManager.createQuery(jpql, Analyse.class);
		return query.getResultList();
	}

	@Override
	public void addAnalyse(Analyse analyse) {
		// TODO Auto-generated method stub
		entityManager.persist(analyse);
		
	}

	@Override
	public void updateAnalyse(Analyse analyse) {
		// TODO Auto-generated method stub
		entityManager.merge(analyse);
	}

}
