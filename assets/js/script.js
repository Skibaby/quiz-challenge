const questions = [
    {
        questions: "What is the capital of Venezuela?",
        answers: [
            {text: "Bogota", correct: false},
            {text: "Caracas", correct: true},
            {text: "Medellin", correct: false},
            {text: "Santiago", correct: false},
        ]
    },
    {
        questions: "What is the currency of Venezuela?",
        answers: [
            {text: "Venezuelan Pesos", correct: false},
            {text: "Venezuelan Dollar", correct: false},
            {text: "Venezuelan Angel", correct: false},
            {text: "Venezuelan Bolivar", correct: true},
        ]
    },
    {
        questions: "How many countries share a land border with Venezuela?",
        answers: [
            {text: "4", correct: false},
            {text: "2", correct: false},
            {text: "3", correct: true},
            {text: "5", correct: false},
        ]
    },
    {
        questions: "What mountain range would you find in Venezuela?",
        answers: [
            {text: "Andes Mountain", correct: true},
            {text: "Sierra Patagonia", correct: false},
            {text: "The Alps", correct: false},
            {text: "Bakhuis Mountains", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const buttons = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add(btn);
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dateset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });

}

function resetState(){
    nextButton.style.display = "none";
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

startQuiz();
