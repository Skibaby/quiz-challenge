const questions = [
    {
        question: "What is the capital of Venezuela?",
        answers: [
            {text: "Bogota", correct: false},
            {text: "Caracas", correct: true},
            {text: "Medellin", correct: false},
            {text: "Santiago", correct: false},
        ]
    },
    {
        question: "What is the currency of Venezuela?",
        answers: [
            {text: "Venezuelan Pesos", correct: false},
            {text: "Venezuelan Dollar", correct: false},
            {text: "Venezuelan Angel", correct: false},
            {text: "Venezuelan Bolivar", correct: true},
        ]
    },
    {
        question: "How many countries share a land border with Venezuela?",
        answers: [
            {text: "4", correct: false},
            {text: "2", correct: false},
            {text: "3", correct: true},
            {text: "5", correct: false},
        ]
    },
    {
        question: "What mountain range would you find in Venezuela?",
        answers: [
            {text: "Andes Mountain", correct: true},
            {text: "Sierra Patagonia", correct: false},
            {text: "The Alps", correct: false},
            {text: "Bakhuis Mountains", correct: false},
        ]
    }
]; 
// let answer =  {text: "Venezuelan Pesos", correct: false, print: () => {alert(this.text)}};
// answer.text
// answer.print()
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () =>{
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
const selectAnswer = (answer)=>{
    if (answer.correct){
        resultEl.innerHTML = "you got it!"
    } else {
        resultEl.innerHTML = "Try again!"
    }
};

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            
        }
        button.addEventListener("click",()=>{
            if (answer.correct){
                resultEl.innerHTML = "you got it!"
            } else {
                resultEl.innerHTML = "Try again!"
            }
        });

    });

}
const nextQuestion =()=>{
    currentQuestionIndex = currentQuestionIndex + 1;
    showQuestion();
}

function resetState(){
    //nextButton.style.display = "none";
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

startQuiz();
