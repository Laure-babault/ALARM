package com.alarm.dao.implementations;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.alarm.dao.interfaces.InterfaceServiceHospitalDAO;
import com.alarm.entity.ServiceHospital;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

@Repository
public class ServiceHospitalDAO implements InterfaceServiceHospitalDAO{
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public ServiceHospital getById(int id) {
		// TODO Auto-generated method stub
		return entityManager.find(ServiceHospital.class, id);
	}

	@Override
	public List<ServiceHospital> getAll() {
		// TODO Auto-generated method stub
		String jpql = "SELECT s FROM ServiceHospital s";
		TypedQuery<ServiceHospital> query = entityManager.createQuery(jpql, ServiceHospital.class);
		return query.getResultList();
	}	

	@Override
	public void addServiceHospital(ServiceHospital serviceHospital) {
		// TODO Auto-generated method stub
		entityManager.persist(serviceHospital);
	}

	@Override
	public void updateServiceHospital(ServiceHospital serviceHospital) {
		// TODO Auto-generated method stub
		entityManager.merge(serviceHospital);
	}
}
