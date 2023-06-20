package com.alarm.dao.interfaces;

import java.util.List;

import com.alarm.entity.EtapeCircuitMedicament;

public interface InterfaceEtapeCircuitMedicamentDAO {

	EtapeCircuitMedicament getById(int id);

	List<EtapeCircuitMedicament> getAll();

	EtapeCircuitMedicament addEtapeCircuitMedicament(EtapeCircuitMedicament etapeCircuitMedicament);

	void updateEtapeCircuitMedicament(EtapeCircuitMedicament etapeCircuitMedicament);

}
