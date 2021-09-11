import Question from "./Question.js";

class FillInBlank extends Question {
  constructor(id, questionType, content, answers) {
    super(id, questionType, content, answers);
  }
  renderAnswer() {
    return `
        <div class = "col-12">
            <textarea class = "form-control" id = "fill${this.id}-fillAnswer${this.answers[0].id}" rows = "3"></textarea>
        </div>
    `;
  }
  checkCorrect() {
    const userValue = document.getElementById(
      `fill${this.id}-fillAnswer${this.answers[0].id}`
    ).value;
    // if (userValue === this.answers[0].content) {
    //     return true;
    // } else {
    //     return false;
    // }

    return userValue === this.answers[0].content;
  }
}
export default FillInBlank;
