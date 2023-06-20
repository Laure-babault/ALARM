package com.alarm.dao.implementations;

import java.util.List;

import org.springframework.stereotype.Component;

import com.alarm.dao.interfaces.InterfaceErreurMedicamenteuseDAO;
import com.alarm.entity.Erreur_medicamenteuse;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

@Component
public class ErreurMedicamenteuseDAO implements InterfaceErreurMedicamenteuseDAO {

	@PersistenceContext
	private EntityManager entityManager;
	
	@Override
	public Erreur_medicamenteuse getById(int id) {
		// TODO Auto-generated method stub
		return entityManager.find(Erreur_medicamenteuse.class, id);
	}

	@Override
	public List<Erreur_medicamenteuse> getAll() {
		// TODO Auto-generated method stub
		String jpql = "SELECT e FROM Erreur_medicamenteuse e";
		TypedQuery<Erreur_medicamenteuse> query = entityManager.createQuery(jpql, Erreur_medicamenteuse.class);
		return query.getResultList();
	}

	@Override
	public void addErreurMedicamenteuse(Erreur_medicamenteuse erreur_medicamenteuse) {
		// TODO Auto-generated method stub
		entityManager.persist(erreur_medicamenteuse);

	}

	@Override
	public void updateErreurMedicamenteuse(Erreur_medicamenteuse erreur_medicamenteuse) {
		// TODO Auto-generated method stub
		entityManager.merge(erreur_medicamenteuse);
	}

}
