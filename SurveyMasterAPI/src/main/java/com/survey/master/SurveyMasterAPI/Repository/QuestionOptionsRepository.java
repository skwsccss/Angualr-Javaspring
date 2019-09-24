package com.survey.master.SurveyMasterAPI.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.survey.master.SurveyMasterAPI.Entity.QuestionOptions;

@Repository
public interface QuestionOptionsRepository extends CrudRepository<QuestionOptions, Long> {

}
