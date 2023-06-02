package com.alarm.dao.interfaces;

import java.util.List;

import com.alarm.entity.ServiceHospital;

public interface InterfaceServiceHospitalDAO {
	
	ServiceHospital getById(int id);

	List<ServiceHospital> getAll();

	void addServiceHospital(ServiceHospital serviceHospital);

	void updateServiceHospital(ServiceHospital serviceHospital);

}
