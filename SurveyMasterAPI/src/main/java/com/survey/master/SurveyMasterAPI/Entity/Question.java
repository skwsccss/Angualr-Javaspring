package com.survey.master.SurveyMasterAPI.Entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@SuppressWarnings("serial")
@Entity
@Table(name = "question")
public class Question implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "question_text")
	private String questionText;

	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "question")
	private List<QuestionOptions> questionOptions;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getQuestionText() {
		return questionText;
	}

	public void setQuestionText(String questionText) {
		this.questionText = questionText;
	}

	public List<QuestionOptions> getQuestionOptions() {
		return questionOptions;
	}

	public void setQuestionOptions(List<QuestionOptions> questionOptions) {
		this.questionOptions = questionOptions;
	}

}
