package com.survey.master.SurveyMasterAPI.Entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@SuppressWarnings("serial")
@Entity
@Table(name = "question_answer")
public class QuestionAnswer implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	/*
	 * @Column(name = "question_option_id") private Long questionOptionId;
	 */

	// @JsonIgnoreProperties("questionOptions")
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "question_option_id")
	private QuestionOptions questionOption;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public QuestionOptions getQuestionOption() {
		return questionOption;
	}

	public void setQuestionOption(QuestionOptions questionOption) {
		this.questionOption = questionOption;
	}

}
