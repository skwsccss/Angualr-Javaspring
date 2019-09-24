import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SurveyClientService {
  url: string = environment.serverUrl;

  constructor(private http: HttpClient) {}

  getAllQuestions() {
    return this.http.get(this.url + "questions");
  }

  createQuestion(question: any) {
    return this.http.post(this.url + "question", question);
  }

  updateQuestion(question: any) {
    return this.http.put(this.url + "question", question);
  }

  deleteQuestion(id) {
    return this.http.delete(this.url + "question/" + id);
  }

  createQuestionOption(questionOption: any) {
    return this.http.post(this.url + "questionOption", questionOption);
  }

  updateQuestionOption(questionOption: any) {
    return this.http.put(this.url + "questionOption", questionOption);
  }

  deleteQuestionOption(id) {
    return this.http.delete(this.url + "questionOption/" + id);
  }

  saveAnswers(answers: any) {
    return this.http.post(this.url + "allQuestionAnswers/", answers);
  }

  groupAnswersByQuestion(questionId: any) {
    return this.http.get(this.url + "groupAnswersByQuestion/"+ questionId);
  }
}
