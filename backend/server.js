import express from "express";
import dotenv from "dotenv"
dotenv.config()
import { quizes, questions, answers, users } from "./data/data.js";

const app = express();

const port = process.env.PORT || 5000;

app.get("/api/quizes", (req, res) => res.json(quizes));

app.get("/api/quizes/:quizId", (req, res) => {
  const selectedQuiz = quizes.filter((quiz) => quiz.quizId === req.params.quizId)
  res.json(selectedQuiz[0])
});

app.get("/api/questions", (req, res) => res.json(questions))

app.get("/api/questions/:qid", (req, res) => {
  const selectedQuestion = questions.filter(question => question.id === req.params.qid)
  res.json((selectedQuestion[0]))
})

app.get("/api/answers", (req, res) => res.json(answers))

app.get("/api/answers/:qid", (req, res) => {
  const selectedAnswer = answers.filter(answer => answer.id === req.params.qid)
  res.json(selectedAnswer[0])
})

app.get("/api/users", (req, res) => res.json(users))

app.get("/api/users/:userId", (req, res) => {
  const selectedUser = users.filter(user => user.id === req.params.userId)
  res.json(selectedUser[0])
})

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
