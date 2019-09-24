import { OnInit } from "@angular/core";
import { Component, OnDestroy } from "@angular/core";
import { Observable } from "rxjs";
import { SurveyClientService } from "../survey-client/survey-client.service";

@Component({
  selector: "survey-manager",
  templateUrl: "./survey-manager.component.html",
  styleUrls: ["./survey-manager.component.css"]
})
export class SurveyManagerComponent implements OnInit {
  questions$: Observable<any[]>;

  answers$: Observable<any[]>;

  questions: any = [];

  constructor(private service: SurveyClientService) {}

  loadAllQuestions() {
    this.service.getAllQuestions().subscribe(
      (data: any) => {
        console.log(data);
        this.questions = data;
      },
      error => {}
    );
  }

  ngOnInit() {
    this.loadAllQuestions();
  }

  addQuestion(questionEle) {
    let question = {
      questionText: questionEle.value
    };
    this.service.createQuestion(question).subscribe(
      (data: any) => {
        this.loadAllQuestions();
      },
      error => {}
    );
  }

  deleteQuestion(id) {
    this.service.deleteQuestion(id).subscribe(
      (data: any) => {
        this.loadAllQuestions();
      },
      error => {}
    );
  }

  updateQuestion(question, questionZ) {
    question.questionText = questionZ.value;
    this.service.updateQuestion(question).subscribe(
      (data: any) => {
        this.loadAllQuestions();
      },
      error => {}
    );
  }

  addQuestionOption(question, answer) {
    let questionOption = {
      question: {
        id: question.id
      },
      optionText: answer.value
    };
    this.service.createQuestionOption(questionOption).subscribe(
      (data: any) => {
        this.loadAllQuestions();
      },
      error => {}
    );
  }

  deleteQuestionOption(id) {
    this.service.deleteQuestionOption(id).subscribe(
      (data: any) => {
        this.loadAllQuestions();
      },
      error => {}
    );
  }
}
