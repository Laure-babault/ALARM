package com.alarm.entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.NamedQuery;


/**
 * The persistent class for the Action_reponse database table.
 * 
 */
@Entity
@NamedQuery(name="Action_reponse.findAll", query="SELECT a FROM Action_reponse a")
public class Action_reponse implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private Action_reponsePK id;

	@Column(name="num_ligne")
	private int numLigne;

	@Column(name="reponse")
	private String reponse;

	//bi-directional many-to-one association to Action_question
	@ManyToOne
	private Action_question actionQuestion;

	public Action_reponse() {
	}

	public Action_reponsePK getId() {
		return this.id;
	}

	public void setId(Action_reponsePK id) {
		this.id = id;
	}

	public int getNumLigne() {
		return this.numLigne;
	}

	public void setNumLigne(int numLigne) {
		this.numLigne = numLigne;
	}

	public String getReponse() {
		return this.reponse;
	}

	public void setReponse(String reponse) {
		this.reponse = reponse;
	}

	public Action_question getActionQuestion() {
		return this.actionQuestion;
	}

	public void setActionQuestion(Action_question actionQuestion) {
		this.actionQuestion = actionQuestion;
	}

}