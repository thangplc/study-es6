class QuestionService {
  fetchQuestion() {
    return axios({
      url: "http://localhost:3000/questions",
      method: "GET",
    });
  }
}
export default QuestionService;
