// Array de perguntas e respostas
const questions = [
    {
        question: "Qual é a capital da França?",
        answers: [
            { text: "Paris", correct: true },
            { text: "Londres", correct: false },
            { text: "Roma", correct: false },
            { text: "Berlim", correct: false }
        ]
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        answers: [
            { text: "Marte", correct: false },
            { text: "Terra", correct: false },
            { text: "Júpiter", correct: true },
            { text: "Saturno", correct: false }
        ]
    },
    {
        question: "Quem escreveu 'Dom Quixote'?",
        answers: [
            { text: "Miguel de Cervantes", correct: true },
            { text: "William Shakespeare", correct: false },
            { text: "José Saramago", correct: false },
            { text: "Gabriel García Márquez", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("score").innerText = score;
    showQuestion();
}

function showQuestion() {
    resetState();
    const questionElement = document.getElementById("question-text");
    const answerButtonsElement = document.getElementById("answer-buttons");
    
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    const answerButtonsElement = document.getElementById("answer-buttons");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    document.getElementById("next-button").style.display = "none";
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
        document.getElementById("score").innerText = score;
    }
    document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert(`Quiz completo! Sua pontuação final é: ${score}`);
        startQuiz();
    }
}

// Iniciar o quiz ao carregar a página
document.addEventListener("DOMContentLoaded", startQuiz);
