package com.alarm.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name = "Test")
public class test {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int toto;
	
	public test() {
		
	}
	
	
	public int getToto() {
		return this.toto;
	}

}
