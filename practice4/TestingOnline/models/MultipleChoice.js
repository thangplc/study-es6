import Question from "./Question.js";

class MultipleChoice extends Question {
  constructor(id, questionType, content, answers) {
    super(id, questionType, content, answers);
  }
  renderAnswer() {
    let content = this.answers.map((answer) => {
      return `
            <div class="col-6">
                <div class="custom-control custom-radio">
                    <input type="radio" class="custom-control-input" id="multi${this.id}-multiAnswer${answer.id}" value="${answer.content}" name="multi-${this.id}"/>
                    <label class="custom-control-label" for="multi${this.id}-multiAnswer${answer.id}">${answer.content}</label>
                </div>
            </div>
        `;
    });
    return content.join("");
  }
  checkCorrect() {
    // Lấy đáp án người dùng chọn
    const listAnswer = document.querySelectorAll(
      `input[name='multi-${this.id}']`
    );
    let selectedValue = "";
    for (const answer of listAnswer) {
      if (answer.checked) {
        selectedValue = answer.value;
      }
    }

    // Lấy đáp án đúng từ mảng answers
    let correctValue = "";
    for (const answer of this.answers) {
      if (answer.exact) {
        correctValue = answer.content;
      }
    }

    // So sánh câu trả lời có đúng không?
    // if (selectedValue === correctValue) {
    //     return true;
    // } else {
    //     return false;
    // }

    // const isCorrect = selectedValue === correctValue ? true : false;

    return selectedValue === correctValue;
  }
}
export default MultipleChoice;
