package com.alarm.entity;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.NamedQuery;
import jakarta.persistence.OneToMany;

import java.util.List;


/**
 * The persistent class for the Action_question database table.
 * 
 */
@Entity
@NamedQuery(name="Action_question.findAll", query="SELECT a FROM Action_question a")
public class Action_question implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int id;

	private String libelle;

	//bi-directional many-to-one association to Action_reponse
	@OneToMany(mappedBy="actionQuestion")
	private List<Action_reponse> actionReponses;

	public Action_question() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getLibelle() {
		return this.libelle;
	}

	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}

	public List<Action_reponse> getActionReponses() {
		return this.actionReponses;
	}

	public void setActionReponses(List<Action_reponse> actionReponses) {
		this.actionReponses = actionReponses;
	}

	public Action_reponse addActionRepons(Action_reponse actionRepons) {
		getActionReponses().add(actionRepons);
		actionRepons.setActionQuestion(this);

		return actionRepons;
	}

	public Action_reponse removeActionRepons(Action_reponse actionRepons) {
		getActionReponses().remove(actionRepons);
		actionRepons.setActionQuestion(null);

		return actionRepons;
	}

}