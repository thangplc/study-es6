import MultipleChoice from "../models/MultipleChoice.js";
import FillInBlank from "../models/FillInBlank.js";
import QuestionService from "../services/QuestionService.js";

const questionService = new QuestionService();
let questionList = [];

const renderHTML = () => {
  let stt = 1;
  let content = "";

  questionList.map((question, index) => {
    let btnNext = "";
    if (index < questionList.length - 1) {
      btnNext = `<a href="#quiz-${
        questionList[index + 1].id
      }" class="quiz__btn">NEXT</a>`;
    } else {
      btnNext = `<a href="#quizResult" class="quiz__btn" onclick="showResult()">SUBMIT</a>`;
    }

    content += `
            <div class="quizSection" id="quiz-${question.id}">
                <div class="quiz__main">
                    <div class="quiz__header">
                        ${question.content}
                    </div>
                    <div class="quiz__body row">
                        ${question.renderAnswer()}
                    </div>
                    <div class="quiz__footer">
                        <p class="quiz__current">Question ${stt} of ${
      questionList.length
    }</p>
                        ${btnNext}
                    </div>
                </div>
            </div>
        `;

    stt++;
  });

  document.getElementById("quizList").innerHTML = content;
};

const renderQuestions = () => {
  questionService
    .fetchQuestion()
    .then((res) => {
      res.data.forEach((question) => {
        const { id, questionType, content, answers } = question;
        switch (questionType) {
          case 1: {
            const multipleChoice = new MultipleChoice(
              id,
              questionType,
              content,
              answers
            );
            questionList = [...questionList, multipleChoice];
            break;
          }
          case 2: {
            const fillInBlank = new FillInBlank(
              id,
              questionType,
              content,
              answers
            );
            questionList = [...questionList, fillInBlank];
            break;
          }
          default:
            console.log("Invalid questionType");
        }
      });

      renderHTML();
    })
    .catch((err) => {
      console.log(err);
    });
};

renderQuestions();

const showResult = () => {
  let correct = 0;
  let wrong = 0;
  let score = 0;

  questionList.forEach((question) => {
    if (question.checkCorrect()) {
      correct++;
    } else {
      wrong++;
    }
  });

  score = (correct * 100) / questionList.length;

  document.getElementById("correct").innerHTML = correct;
  document.getElementById("incorrect").innerHTML = wrong;
  document.getElementById("score").innerHTML = score + "%";
};

window.showResult = showResult;
