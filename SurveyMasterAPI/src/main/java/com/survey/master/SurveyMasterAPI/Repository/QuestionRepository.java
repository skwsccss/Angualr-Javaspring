package com.survey.master.SurveyMasterAPI.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.survey.master.SurveyMasterAPI.Entity.Question;

@Repository
public interface QuestionRepository extends CrudRepository<Question, Long> {

}
