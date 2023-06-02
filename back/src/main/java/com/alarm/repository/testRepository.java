package com.alarm.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.alarm.entity.test;

public interface testRepository extends CrudRepository<test, Long> {

		  test findById(long id);
}
