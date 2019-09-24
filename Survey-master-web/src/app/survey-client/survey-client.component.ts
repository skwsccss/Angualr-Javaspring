import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { fadeIn } from "../animations";
import { SurveyClientService } from "./survey-client.service";

@Component({
  selector: "survey-client",
  templateUrl: "./survey-client.component.html",
  styleUrls: ["./survey-client.component.css"],
  animations: [fadeIn]
})
export class SurveyClientComponent implements OnInit {
  test$: Observable<any[]>;

  keysArray = [];
  answers: any[];
  countZ: any;

  questions: any = [];

  constructor(private service: SurveyClientService) {}

  loadAllQuestions() {
    this.service.getAllQuestions().subscribe(
      (data: any) => {
        this.questions = data;
      },
      error => {}
    );
  }

  ngOnInit() {
    this.loadAllQuestions();
  }

  addAKeyACount(key, count) {
    if (this.keysArray.includes(key)) {
      let keyIndex = this.keysArray.indexOf(key);
      this.keysArray.splice(keyIndex, 1);
    } else {
      this.keysArray.push(key);
    }
  }

  submit(f) {
    console.log("submitted!");
    let answers: any = [];
    for (let key of this.keysArray) {
      let answer = {
        questionOption: {
          id: key
        }
      };
      answers.push(answer);
    }
    this.service.saveAnswers(answers).subscribe(
      (data: any) => {
        alert("done");
      },
      error => {}
    );
    this.keysArray = [];
    f.controls.hasAgreed = false;
  }
}
