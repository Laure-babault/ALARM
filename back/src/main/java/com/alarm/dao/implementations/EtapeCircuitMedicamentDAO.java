package com.alarm.dao.implementations;

import java.util.List;

import com.alarm.dao.interfaces.InterfaceEtapeCircuitMedicamentDAO;
import com.alarm.entity.EtapeCircuitMedicament;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

public class EtapeCircuitMedicamentDAO implements InterfaceEtapeCircuitMedicamentDAO {
	
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public EtapeCircuitMedicament getById(int id) {
		// TODO Auto-generated method stub
		return entityManager.find(EtapeCircuitMedicament.class, id);
	}

	@Override
	public List<EtapeCircuitMedicament> getAll() {
		// TODO Auto-generated method stub
		String jpql = "SELECT * FROM EtapeCircuitMedicament e";
		TypedQuery<EtapeCircuitMedicament> query = entityManager.createQuery(jpql, EtapeCircuitMedicament.class);
		return query.getResultList();
	}

	@Override
	public void addEtapeCircuitMedicament(EtapeCircuitMedicament etapeCircuitMedicament) {
		// TODO Auto-generated method stub
		entityManager.persist(etapeCircuitMedicament);
	}

	@Override
	public void updateEtapeCircuitMedicament(EtapeCircuitMedicament etapeCircuitMedicament) {
		// TODO Auto-generated method stub
		entityManager.merge(etapeCircuitMedicament);
	}

}
