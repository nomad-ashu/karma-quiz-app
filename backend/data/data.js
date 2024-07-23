export const quizes = [
  {
    quizId: "test-quiz",
    quizType: "quiz",
    quizTimerEnabled: true,
    quizTimerInMinutes: 5,
    quizLabels: ["test", "geography", "poloitics"],
    quizStartDateTime: "2024-05-25 10:00:00",
    quizEndDateTime: "2024-05-25 11:00:00",
    quizAccessType: ["all"],
    quizQuestionIds: ["q_pol_1", "2", "10", "5"],
  },
];

export const questions = [
  {
    id: "q_pol_1",
    question: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    label: ["politics"],
  },
  {
    id: "2",
    question: "Which river is known as the 'Sorrow of Bihar'?",
    options: ["Ganga", "Yamuna", "Kosi", "Narmada"],
    label: ["geography"],
  },
  {
    id: "3",
    question: "Who was the first woman Chief Minister of India?",
    options: [
      "Indira Gandhi",
      "Mamata Banerjee",
      "Sushma Swaraj",
      "Sucheta Kriplani",
    ],
    label: ["politics"],
  },
  {
    id: "4",
    question: "Which state in India has the highest population density?",
    options: ["Bihar", "West Bengal", "Kerala", "Uttar Pradesh"],
    label: ["sociology"],
  },
  {
    id: "5",
    question: "Which is the largest state in India by area?",
    options: ["Rajasthan", "Madhya Pradesh", "Maharashtra", "Uttar Pradesh"],
    label: ["geography"],
  },
  {
    id: "6",
    question: "Who is known as the 'Iron Man of India'?",
    options: [
      "Jawaharlal Nehru",
      "Sardar Vallabhbhai Patel",
      "Subhas Chandra Bose",
      "B. R. Ambedkar",
    ],
    label: ["politics"],
  },
  {
    id: "7",
    question: "Which Indian state has the longest coastline?",
    options: ["Andhra Pradesh", "Maharashtra", "Tamil Nadu", "Gujarat"],
    label: ["geography"],
  },
  {
    id: "8",
    question: "Who was the first President of India?",
    options: [
      "Dr. Rajendra Prasad",
      "Jawaharlal Nehru",
      "S. Radhakrishnan",
      "Lal Bahadur Shastri",
    ],
    label: ["politics"],
  },
  {
    id: "9",
    question: "Which Indian state has the highest literacy rate?",
    options: ["Kerala", "Tamil Nadu", "Maharashtra", "Punjab"],
    label: ["sociology"],
  },
  {
    id: "10",
    question: "Which is the largest river island in India?",
    options: ["Majuli", "Diu", "Srirangapatna", "Barren Island"],
    label: ["geography"],
  },
  {
    id: "11",
    question:
      "Which Indian state has the highest number of seats in the Lok Sabha?",
    options: ["Maharashtra", "Uttar Pradesh", "West Bengal", "Madhya Pradesh"],
    label: ["politics"],
  },
  {
    id: "12",
    question: "Which is the highest peak in India?",
    options: ["Kanchenjunga", "Nanda Devi", "Mount Everest", "K2"],
    label: ["geography"],
  },
];

export const answers = [
  {
    id: "q_pol_1",
    question: "What is the capital of India?",
    answer: "New Delhi",
  },
  {
    id: "2",
    question: "Which river is known as the 'Sorrow of Bihar'?",
    answer: "Kosi",
  },
  {
    id: "3",
    question: "Who was the first woman Chief Minister of India?",
    answer: "Sucheta Kriplani",
  },
  {
    id: "4",
    question: "Which state in India has the highest population density?",
    answer: "Bihar",
  },
  {
    id: "5",
    question: "Which is the largest state in India by area?",
    answer: "Rajasthan",
  },
  {
    id: "6",
    question: "Who is known as the 'Iron Man of India'?",
    answer: "Sardar Vallabhbhai Patel",
  },
  {
    id: "7",
    question: "Which Indian state has the longest coastline?",
    answer: "Gujarat",
  },
  {
    id: "8",
    question: "Who was the first President of India?",
    answer: "Dr. Rajendra Prasad",
  },
  {
    id: "9",
    question: "Which Indian state has the highest literacy rate?",
    answer: "Kerala",
  },
  {
    id: "10",
    question: "Which is the largest river island in India?",
    answer: "Majuli",
  },
  {
    id: "11",
    question:
      "Which Indian state has the highest number of seats in the Lok Sabha?",
    answer: "Uttar Pradesh",
  },
  {
    id: "12",
    question: "Which is the highest peak in India?",
    answer: "Kanchenjunga",
  },
];

export const users = [
  {
    id: "user_1",
    password: "password",
    role: "user",
  },
];
